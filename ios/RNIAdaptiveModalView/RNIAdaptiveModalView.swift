//
//  RNIAdaptiveModalView.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 11/24/23.
//
import UIKit
import ExpoModulesCore

import ReactNativeIosUtilities
import DGSwiftUtilities
import AdaptiveModal
import ComputableLayout


public class RNIAdaptiveModalView:
  ExpoView, RNICleanable, RNIJSComponentWillUnmountNotifiable {

  // MARK: - Embedded Types
  // ----------------------
  
  enum NativeIDKey: String {
    case modalContent;
  };
  
  // MARK: - Properties
  // ------------------

  var detachedViews: [WeakRef<RNIDetachedView>] = [];
  
  var modalContentDetachedView: RNIDetachedView?;
  
  var navigationEventsController: RNINavigationEventsReportingViewController?;
  
  var modalManager: AdaptiveModalManager?;
  
  // MARK: - Properties - Flags
  // --------------------------
  
  var didTriggerCleanup = false;
  var didAttachToParentVC = false;
  
  // MARK: Properties - Props
  // ------------------------
  
  private(set) public var internalCleanupMode: RNICleanupMode = .automatic;
  public var internalCleanupModeRaw: String? {
    willSet {
      guard let rawString = newValue,
            let cleanupMode = RNICleanupMode(rawValue: rawString)
      else { return };
      
      self.internalCleanupMode = cleanupMode;
    }
  };
  
  public var modalConfig: AdaptiveModalConfig?;
  var modalConfigProp: Dictionary<String, Any>? {
    willSet {
      guard let newValue = newValue else { return };
    
      do {
        let modalConfig = try AdaptiveModalConfig(fromDict: newValue);
        self.modalConfig = modalConfig;
        
        if let modalManager = self.modalManager {
          modalManager.updateModalConfig(
            .staticConfig(modalConfig)
          );
          
        } else {
          try self.setupInitModalManager();
        };
        
      } catch {
        #if DEBUG
        print(
          "RNIAdaptiveModalView.modalConfigProp",
          "\n - error: \(error.localizedDescription)"
        );
        #endif
      };
    }
  };
  
  public var modalContentAnchorMode: RNIModalContentAnchorMode = .center;
  var modalContentAnchorModeProp: String? {
    willSet {
      guard let newValue = newValue,
            let modalContentAnchorMode =
              try? RNIModalContentAnchorMode(fromString: newValue)
      else { return };
      
      self.modalContentAnchorMode = modalContentAnchorMode;
    }
  };
  
  public var modalAnimationMode: AdaptiveModalAnimationMode = .default;
  var modalAnimationModeProp: String? {
    willSet {
      guard let newValue = newValue,
            let modalAnimationMode =
              try? AdaptiveModalAnimationMode(fromString: newValue)
      else { return };
      
      self.modalAnimationMode = modalAnimationMode;
      
      guard let modalManager = self.modalManager else { return };
      modalManager.animationMode = modalAnimationMode;
    }
  };
  
  public var shouldEnableContinuousLayoutResizingDuringAnimation = true {
    didSet {
      guard let modalVC = self.modalViewController else { return };
      modalVC.setupDisplayLinkEventsDelegate();
    }
  };
  
  // MARK: Properties - Props - Events
  // ---------------------------------
  
  public let onModalContentInitialized = EventDispatcher("onModalContentInitialized");
  public let onModalDidHide = EventDispatcher("onModalDidHide");
  
  // MARK: - Computed Properties
  // ---------------------------
  
  var cleanupMode: RNICleanupMode {
    get {
      switch self.internalCleanupMode {
        case .automatic:
          return .reactComponentWillUnmount;
          
        default:
          return self.internalCleanupMode;
      };
    }
  };
  
  // MARK: Init + Lifecycle
  // ----------------------

  public required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext);
  };
  
  public required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented");
  };
  
  // MARK: - RN Lifecycle
  // --------------------

  public override func reactSetFrame(_ frame: CGRect) {
    super.reactSetFrame(frame);
  };
  
  public override func insertReactSubview(_ subview: UIView!, at atIndex: Int) {
    super.insertSubview(subview, at: atIndex);
    
    guard let detachedView = subview as? RNIDetachedView,
          let nativeID = detachedView.nativeID,
          let nativeIDKey = NativeIDKey(rawValue: nativeID)
    else { return };
    
    switch nativeIDKey {
      case .modalContent:
        self.modalContentDetachedView = detachedView;
        self.onModalContentInitialized.callAsFunction();
    };
    
    self.detachedViews.append(
      .init(with: detachedView)
    );
  };
  
  #if DEBUG
  @objc func onRCTBridgeWillReloadNotification(_ notification: Notification){
    self.cleanup();
  };
  #endif
  
  // MARK: - View Lifecycle
  // ----------------------
  
  public override func didMoveToWindow() {
    let didMoveToNilWindow = self.window == nil;
    
    /// A. Not attached to a parent VC yet
    /// B. Moving to a non-nil window
    /// C. attach as "child vc" to "parent vc" enabled
    ///
    /// the VC attached to this view is possibly being attached as a child
    /// view controller to a view controller managed by
    /// `UINavigationController`...
    ///
    let shouldAttachToParentVC =
         !self.didAttachToParentVC
      && !didMoveToNilWindow
      && self.cleanupMode.shouldAttachToParentVC;
      
    
    /// A. Moving to a nil window
    /// B. Not attached to a parent VC yet
    /// C. Attach as "child vc" to "parent vc" disabled
    /// D. Cleanup mode is set to: `didMoveToWindowNil`
    ///
    /// Moving to nil window and not attached to parent vc, possible end of
    /// lifecycle for this view...
    ///
    let shouldTriggerCleanup =
          didMoveToNilWindow
      && !self.didAttachToParentVC
      && !self.cleanupMode.shouldAttachToParentVC
      && self.cleanupMode == .didMoveToWindowNil;
      
      
    if shouldAttachToParentVC {
      // begin setup - attach this view as child vc
      self.attachToParentVC();
    
    } else if shouldTriggerCleanup {
      // trigger manual cleanup
      self.cleanup();
    };
  };
  
  // MARK: - Functions
  // -----------------
  
  func setupInitModalManager() throws {
    guard let modalConfig = self.modalConfig else {
      throw RNIAdaptiveModalError(
        errorCode: .unexpectedNilValue,
        description: "modalConfig is nil",
        extraDebugValues: [
          "modalConfigProp": self.modalConfigProp ?? [:]
        ]
      );
    };
    
    let modalManager = AdaptiveModalManager(staticConfig: modalConfig);
    modalManager.presentationEventsDelegate.add(self);
    modalManager.animationMode = self.modalAnimationMode;
    
    self.modalManager = modalManager;
  };

  func attachToParentVC(){
    guard self.cleanupMode.shouldAttachToParentVC,
          !self.didAttachToParentVC,
          
          // find the nearest parent view controller
          let parentVC = RNIHelpers.getParent(
            responder: self,
            type: UIViewController.self
          )
    else { return };
    
    self.didAttachToParentVC = true;
    
    let childVC = RNINavigationEventsReportingViewController();
    childVC.view = self;
    childVC.delegate = self;
    childVC.parentVC = parentVC;
    
    self.navigationEventsController = childVC;

    parentVC.addChild(childVC);
    childVC.didMove(toParent: parentVC);
  };
  
  func detachFromParentVCIfAny(){
    guard !self.didAttachToParentVC,
          let childVC = self.navigationEventsController
    else { return };
    
    childVC.willMove(toParent: nil);
    childVC.removeFromParent();
  };
  
  func presentModal() throws {
    guard let modalManager = self.modalManager else {
      throw RNIAdaptiveModalError(
        errorCode: .unexpectedNilValue,
        description: "modalManager is nil",
        extraDebugValues: [
          "modalConfigProp": self.modalConfigProp ?? [:]
        ]
      );
    };
    
    guard let modalContentDetachedView = self.modalContentDetachedView else {
      throw RNIAdaptiveModalError(
        errorCode: .unexpectedNilValue,
        description: "modalContentDetachedView is nil"
      );
    };
    
    try modalContentDetachedView.detach();
    
    guard modalContentDetachedView.contentView != nil else {
      throw RNIAdaptiveModalError(
        errorCode: .unexpectedNilValue,
        description: "modalContentView is nil"
      );
    };
    
    guard let window = self.window else {
      throw RNIAdaptiveModalError(
        errorCode: .unexpectedNilValue,
        description: "window is nil"
      );
    };
    
    guard let topVC = window.topmostPresentedViewController else {
      throw RNIAdaptiveModalError(
        errorCode: .unexpectedNilValue,
        description: "Unable to get topmostPresentedViewController"
      );
    };
    
    let modalVC = RNIAdaptiveModalController(
      adaptiveModalView: self,
      modalContentDetachedView: modalContentDetachedView
    );
    
    modalManager.presentModal(
      viewControllerToPresent: modalVC,
      presentingViewController: topVC
    );
  };
  
  // MARK: - Functions - View Module Commands
  // ----------------------------------------

  // WIP - TBA
  
  // MARK: - RNICleanable
  // --------------------
  
  public func cleanup(){
    guard self.cleanupMode.shouldEnableCleanup,
          !self.didTriggerCleanup
    else { return };
    
    self.didTriggerCleanup = true;
    
    self.detachFromParentVCIfAny();
    
    // WIP - TBA
    // Add: Cleanup for detached views here

    self.detachedViews.forEach {
      $0.ref?.cleanup();
    };
    
    self.detachedViews = [];
    
    #if DEBUG
    NotificationCenter.default.removeObserver(self);
    #endif
  };
  
  // MARK: - RNIJSComponentWillUnmountNotifiable
  // -------------------------------------------
  
  public func notifyOnJSComponentWillUnmount(){
    guard self.cleanupMode == .reactComponentWillUnmount
    else { return };
    
    self.cleanup();
  };
};

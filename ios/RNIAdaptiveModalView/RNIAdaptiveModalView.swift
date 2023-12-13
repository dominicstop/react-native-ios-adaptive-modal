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
  
  var modalContentView: RNIDetachedView?;
  
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

  
  // MARK: Properties - Props - Events
  // ---------------------------------
  
  // TBA
  
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
    
    self.setupInitModalManager();
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
          self.modalContentView = detachedView;
          break;
    };
    
    self.detachedViews.append(
      .init(with: detachedView)
    );
    
    detachedView.detach();
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
  
  func setupInitModalManager() {
  
    let dummyConfig = {
      let maxSize = CGSize(width: 375, height: 667);
      
      return AdaptiveModalConfig(
        snapPoints: [
          // Snap Point 1
          AdaptiveModalSnapPointConfig(
            layoutConfig: ComputableLayout(
              horizontalAlignment: .center,
              verticalAlignment: .bottom,
              width: .stretch,
              height: .percent(percentValue: 0.3)
            ),
            keyframeConfig: AdaptiveModalKeyframeConfig(
              modalShadowOffset: .init(width: 0, height: -2),
              modalShadowOpacity: 0.2,
              modalShadowRadius: 7,
              modalCornerRadius: 25,
              modalMaskedCorners: .topCorners,
              modalBackgroundOpacity: 0.9,
              modalBackgroundVisualEffect: UIBlurEffect(style: .systemUltraThinMaterial),
              modalBackgroundVisualEffectIntensity: 1,
              backgroundOpacity: 0,
              backgroundVisualEffect: UIBlurEffect(style: .systemUltraThinMaterialDark),
              backgroundVisualEffectIntensity: 0
            )
          ),
          
          // Snap Point 2
          AdaptiveModalSnapPointConfig(
            layoutConfig: ComputableLayout(
              horizontalAlignment: .center,
              verticalAlignment: .bottom,
              width: .stretch,
              height: .percent(percentValue: 0.5),
              marginLeft: .constant(15),
              marginRight: .constant(15),
              marginBottom: .safeAreaInsets(
                insetKey: \.bottom,
                minValue: .constant(15)
              )
            ),
            keyframeConfig: AdaptiveModalKeyframeConfig(
              secondaryGestureAxisDampingPercent: 1,
              modalShadowOffset: .init(width: 2, height: 2),
              modalShadowOpacity: 0.2,
              modalShadowRadius: 15,
              modalCornerRadius: 10,
              modalMaskedCorners: .allCorners,
              modalBackgroundOpacity: 0.85,
              modalBackgroundVisualEffectIntensity: 0.6,
              backgroundOpacity: 0.1,
              backgroundVisualEffectIntensity: 0.075
            )
          ),
          
          // Snap Point 3
          AdaptiveModalSnapPointConfig(
            layoutConfig: ComputableLayout(
              horizontalAlignment: .center,
              verticalAlignment: .center,
              width: .percent(
                percentValue: 0.85,
                maxValue: .constant(maxSize.width)
              ),
              height: .percent(
                percentValue: 0.75,
                maxValue: .constant(maxSize.height)
              )
            ),
            keyframeConfig: AdaptiveModalKeyframeConfig(
              secondaryGestureAxisDampingPercent: 0.8,
              modalShadowOffset: .init(width: 2, height: 2),
              modalShadowOpacity: 0.3,
              modalShadowRadius: 10,
              modalCornerRadius: 20,
              modalMaskedCorners: .allCorners,
              modalBackgroundOpacity: 0.8,
              modalBackgroundVisualEffectIntensity: 1,
              backgroundOpacity: 0,
              backgroundVisualEffectIntensity: 0.5
            )
          ),
          
          // Snap Point 4
          AdaptiveModalSnapPointConfig(
            layoutConfig: ComputableLayout(
              horizontalAlignment: .center,
              verticalAlignment: .bottom,
              width: ComputableLayoutValue(
                mode: .stretch
              ),
              height: ComputableLayoutValue(
                mode: .stretch
              ),
              marginTop: .safeAreaInsets(insetKey: \.top)
            ),
            keyframeConfig: AdaptiveModalKeyframeConfig(
              secondaryGestureAxisDampingPercent: 1,
              modalShadowOffset: .init(width: 0, height: -1),
              modalShadowOpacity: 0.4,
              modalShadowRadius: 10,
              modalCornerRadius: 25,
              modalMaskedCorners: .topCorners,
              modalBackgroundOpacity: 0.83,
              modalBackgroundVisualEffectIntensity: 1,
              backgroundVisualEffectIntensity: 1
            )
          ),
        ],
        snapDirection: .bottomToTop,
        overshootSnapPoint: AdaptiveModalSnapPointPreset(
          layoutPreset: .fitScreen
        )
      )
    }();
  
    let modalManager = AdaptiveModalManager(
      staticConfig: dummyConfig
    );
    
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
  
  func presentModal(){
    guard let modalManager = self.modalManager,
          let modalContentView = self.modalContentView,
          
          let window = self.window,
          let topVC = window.topmostPresentedViewController
    else { return };
    
    let modalVC = RNIAdaptiveModalController(
      adaptiveModalView: self,
      modalContentView: modalContentView
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

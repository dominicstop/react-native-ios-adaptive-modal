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


public class RNIAdaptiveModalView: ExpoView, RNICleanable {

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
  
  weak var modalViewController: RNIAdaptiveModalController?;
  
  // MARK: - Properties - Flags
  // --------------------------
  
  var _didTriggerCleanup = false;
  var _didAttachToParentVC = false;
  
  // MARK: Properties - Props
  // ------------------------
  
  private(set) public var viewCleanupMode: RNIViewCleanupMode = .default;
  public var internalViewCleanupModeProp: Dictionary<String, Any>? {
    willSet {
      let nextValue: RNIViewCleanupMode = {
        guard let newValue = newValue,
              let viewCleanupMode = try? RNIViewCleanupMode(fromDict: newValue)
        else {
          return .default;
        };
        
        return viewCleanupMode;
      }();
      
      self.viewCleanupMode = nextValue;
      
      if let cleanableViewItem = self.associatedCleanableViewItem {
        cleanableViewItem.viewCleanupMode = nextValue;
      };
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
          
          modalManager.snapToClosestSnapPoint();
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
      
      if let modalVC = self.modalViewController {
        modalVC.setContentAnchorMode(modalContentAnchorMode);
      };
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
  
  public var shouldEnableSnapping: Bool? {
    willSet {
      guard let newValue = newValue,
            let modalManager = self.modalManager
      else { return };
      
      modalManager.shouldEnableSnapping = newValue;
    }
  };
  
  public var shouldEnableOverShooting: Bool? {
    willSet {
      guard let newValue = newValue,
            let modalManager = self.modalManager
      else { return };
      
      modalManager.shouldEnableOverShooting = newValue;
    }
  };
  
  public var shouldDismissKeyboardOnGestureSwipe: Bool? {
    willSet {
      guard let newValue = newValue,
            let modalManager = self.modalManager
      else { return };
      
      modalManager.shouldDismissKeyboardOnGestureSwipe = newValue;
    }
  };
  
  public var shouldLockAxisToModalDirection: Bool? {
    willSet {
      guard let newValue = newValue,
            let modalManager = self.modalManager
      else { return };
      
      modalManager.shouldLockAxisToModalDirection = newValue;
    }
  };
  
  public var overrideShouldSnapToUnderShootSnapPoint: Bool? {
    willSet {
      guard let modalManager = self.modalManager else { return };
      modalManager.overrideShouldSnapToUnderShootSnapPoint = newValue;
    }
  };
  
  public var overrideShouldSnapToOvershootSnapPoint: Bool? {
    willSet {
      guard let modalManager = self.modalManager else { return };
      modalManager.overrideShouldSnapToOvershootSnapPoint = newValue;
    }
  };
  
  public var shouldDismissModalOnSnapToUnderShootSnapPoint: Bool? {
    willSet {
      guard let newValue = newValue,
            let modalManager = self.modalManager
      else { return };
      
      modalManager.shouldDismissModalOnSnapToUnderShootSnapPoint = newValue;
    }
  };
  
  public var shouldDismissModalOnSnapToOverShootSnapPoint: Bool? {
    willSet {
      guard let newValue = newValue,
            let modalManager = self.modalManager
      else { return };
      
      modalManager.shouldDismissModalOnSnapToOverShootSnapPoint = newValue;
    }
  };
  
  public var isSwipeGestureEnabled: Bool? {
    willSet {
      guard let newValue = newValue,
            let modalManager = self.modalManager
      else { return };
      
      modalManager.isSwipeGestureEnabled = newValue;
    }
  };
  
  public var isModalContentSwipeGestureEnabled: Bool? {
    willSet {
      guard let newValue = newValue,
            let modalManager = self.modalManager
      else { return };
      
      modalManager.isModalContentSwipeGestureEnabled = newValue;
    }
  };
  
  public var allowModalToDragWhenAtMinScrollViewOffset: Bool? {
    willSet {
      guard let newValue = newValue,
            let modalManager = self.modalManager
      else { return };
      
      modalManager.allowModalToDragWhenAtMinScrollViewOffset = newValue;
    }
  };
  
  public var allowModalToDragWhenAtMaxScrollViewOffset: Bool? {
    willSet {
      guard let newValue = newValue,
            let modalManager = self.modalManager
      else { return };
      
      modalManager.allowModalToDragWhenAtMaxScrollViewOffset = newValue;
    }
  };
  
  public var isModalDragHandleGestureEnabled: Bool? {
    willSet {
      guard let newValue = newValue,
            let modalManager = self.modalManager
      else { return };
      
      modalManager.isModalDragHandleGestureEnabled = newValue;
    }
  };
  
  // MARK: Properties - Props - Events
  // ---------------------------------
  
  public let onModalContentInitialized = EventDispatcher("onModalContentInitialized");
  
  public let onModalWillSnap = EventDispatcher("onModalWillSnap");
  public let onModalDidSnap = EventDispatcher("onModalDidSnap");
  
  public let onModalWillShow = EventDispatcher("onModalWillShow");
  public let onModalDidShow = EventDispatcher("onModalDidShow");
  
  public let onModalWillHide = EventDispatcher("onModalWillHide");
  public let onModalDidHide = EventDispatcher("onModalDidHide");
  
  public let onModalPresentCancelled = EventDispatcher("onModalPresentCancelled");
  public let onModalDismissCancelled = EventDispatcher("onModalDismissCancelled");
  
  public let onCurrentModalConfigDidChange = EventDispatcher("onCurrentModalConfigDidChange");
  
  public let onBackgroundTapGesture = EventDispatcher("onBackgroundTapGesture");
  
  public let onModalStateWillChange = EventDispatcher("onModalStateWillChange");
  
  // MARK: Init + Lifecycle
  // ----------------------

  public required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext);
  };
  
  public required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented");
  };
  
  deinit {
    try? self.viewCleanupMode.triggerCleanupIfNeededForDeinit(
      for: self,
      shouldForceCleanup: true
    );
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
    let shouldAttachToParentVC = self.viewCleanupMode.shouldAttachToParentController(
      forView: self,
      associatedViewController: self.navigationEventsController,
      currentWindow: self.window
    );
      
    if shouldAttachToParentVC {
      // begin setup - attach this view as child vc
      self.attachToParentVC();
    
    } else {
      // trigger manual cleanup
      try? self.viewCleanupMode.triggerCleanupIfNeededForDidMoveToWindow(
        forView: self,
        associatedViewController: self.navigationEventsController,
        currentWindow: self.window
      );
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
    modalManager.backgroundTapDelegate.add(self);
    modalManager.stateEventsDelegate.add(self);
    
    modalManager.animationMode = self.modalAnimationMode;
    if let value = self.shouldEnableSnapping {
      modalManager.shouldEnableSnapping = value;
    };
    
    if let value = self.shouldEnableOverShooting {
      modalManager.shouldEnableOverShooting = value;
    };
    
    if let value = self.shouldDismissKeyboardOnGestureSwipe {
      modalManager.shouldDismissKeyboardOnGestureSwipe = value;
    };
    
    if let value = self.shouldLockAxisToModalDirection {
      modalManager.shouldLockAxisToModalDirection = value;
    };
    
    modalManager.overrideShouldSnapToUnderShootSnapPoint =
      self.overrideShouldSnapToUnderShootSnapPoint;
      
    modalManager.overrideShouldSnapToOvershootSnapPoint =
      self.overrideShouldSnapToOvershootSnapPoint;
    
    if let value = self.shouldDismissModalOnSnapToUnderShootSnapPoint {
      modalManager.shouldDismissModalOnSnapToUnderShootSnapPoint = value;
    };
    
    if let value = self.shouldDismissModalOnSnapToOverShootSnapPoint {
      modalManager.shouldDismissModalOnSnapToOverShootSnapPoint = value;
    };
    
    if let value = self.isSwipeGestureEnabled {
      modalManager.isSwipeGestureEnabled = value;
    };
    
    if let value = self.isModalContentSwipeGestureEnabled {
      modalManager.isModalContentSwipeGestureEnabled = value;
    };
    
    if let value = self.allowModalToDragWhenAtMinScrollViewOffset {
      modalManager.allowModalToDragWhenAtMinScrollViewOffset = value;
    };
    
    if let value = self.allowModalToDragWhenAtMaxScrollViewOffset {
      modalManager.allowModalToDragWhenAtMaxScrollViewOffset = value;
    };
    
    if let value = self.isModalDragHandleGestureEnabled {
      modalManager.isModalDragHandleGestureEnabled = value;
    };
    
    self.modalManager = modalManager;
  };
  
  func attachToParentVC(){
    guard !self._didAttachToParentVC else { return };
        
    // find the nearest parent view controller
    let parentVC = RNIHelpers.getParent(
      responder: self,
      type: UIViewController.self
    );
    
    guard let parentVC = parentVC else { return };
    self._didAttachToParentVC = true;
    
    let childVC = RNINavigationEventsReportingViewController();
    childVC.view = self;
    childVC.delegate = self;
    childVC.parentVC = parentVC;
    
    self.navigationEventsController = childVC;

    parentVC.addChild(childVC);
    childVC.didMove(toParent: parentVC);
  };
  
  func detachFromParentVCIfAny(){
    guard !self._didAttachToParentVC,
          let childVC = self.navigationEventsController
    else { return };
    
    childVC.willMove(toParent: nil);
    childVC.removeFromParent();
    childVC.view.removeFromSuperview();
  };
  
  func presentModal(
    commandConfig: RNIAdaptiveModalCommandConfigPresent,
    completion: (() -> Void)?
  ) throws {
  
    if self.modalManager == nil {
      try? self.setupInitModalManager();
    };
  
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
    
    self.modalViewController = modalVC;
    
    print(
      "presentModal",
      "\n - modalManager.animationMode:", modalManager.animationMode,
      "\n - modalVC.contentAnchorMode:", modalVC.contentAnchorMode,
      "\n - shouldEnableContinuousLayoutResizingDuringAnimation:", self.shouldEnableContinuousLayoutResizingDuringAnimation,
      "\n"
    );
    
    switch commandConfig.mode {
      case .standard:
        modalManager.presentModal(
          viewControllerToPresent: modalVC,
          presentingViewController: topVC,
          animated: commandConfig.isAnimated,
          animationConfig: commandConfig.animationConfig,
          completion: completion
        );
        
      case let .customSnapPointIndex(snapPointIndex):
        modalManager.presentModal(
          viewControllerToPresent: modalVC,
          presentingViewController: topVC,
          snapPointIndex: snapPointIndex,
          animated: commandConfig.isAnimated,
          animationConfig: commandConfig.animationConfig,
          completion: completion
        );
        
      case let .customSnapPointKey(snapPointKey):
        modalManager.presentModal(
          viewControllerToPresent: modalVC,
          presentingViewController: topVC,
          snapPointKey: snapPointKey,
          animationConfig: commandConfig.animationConfig,
          animated: commandConfig.isAnimated,
          completion: completion
        );
    };
  };
  
  func dismissModal(
    commandConfig: RNIAdaptiveModalCommandConfigDismiss,
    completion: (() -> Void)?
  ) throws {
  
    guard let modalManager = self.modalManager else {
      throw RNIAdaptiveModalError(
        errorCode: .unexpectedNilValue,
        description: "modalManager is nil",
        extraDebugValues: [
          "modalConfigProp": self.modalConfigProp ?? [:]
        ]
      );
    };
    
    switch commandConfig.mode {
      case let .standard(useInBetweenSnapPoints):
        modalManager.dismissModal(
          useInBetweenSnapPoints: useInBetweenSnapPoints,
          animated: commandConfig.isAnimated,
          animationConfig: commandConfig.animationConfig,
          completion: completion
        );
        
      case let .customSnapPointPreset(snapPointPreset):
        modalManager.dismissModal(
          snapPointPreset: snapPointPreset,
          animated: commandConfig.isAnimated,
          animationConfig: commandConfig.animationConfig,
          completion: completion
        );
        
      case let .customKeyframe(keyframe):
        modalManager.dismissModal(
          keyframe: keyframe,
          animated: commandConfig.isAnimated,
          animationConfig: commandConfig.animationConfig,
          completion: completion
        );
    };
  };
  
  func snapTo(
    commandConfig: RNIAdaptiveModalCommandConfigSnapTo,
    completion: (() -> Void)?
  ) throws {
  
    guard let modalManager = self.modalManager else {
      throw RNIAdaptiveModalError(
        errorCode: .unexpectedNilValue,
        description: "modalManager is nil",
        extraDebugValues: [
          "modalConfigProp": self.modalConfigProp ?? [:]
        ]
      );
    };
    
    switch commandConfig.mode {
      case let .index(snapPointIndex):
        modalManager.snapTo(
          snapPointIndex: snapPointIndex,
          isAnimated: commandConfig.isAnimated,
          animationConfig: commandConfig.animationConfig,
          completion: completion
        );
        
      case let .key(snapPointKey):
        try modalManager.snapTo(
          key: snapPointKey,
          isAnimated: commandConfig.isAnimated,
          animationConfig: commandConfig.animationConfig,
          completion: completion
        );
        
      case let .type(snapPointType):
        try modalManager.snapTo(
          key: nil,
          type: snapPointType,
          isAnimated: commandConfig.isAnimated,
          animationConfig: commandConfig.animationConfig,
          completion: completion
        );
    };
  };
  
  func snapToOverride(
    commandConfig: RNIAdaptiveModalCommandConfigSnapToOverride,
    completion: (() -> Void)?
  ) throws {
  
    guard let modalManager = self.modalManager else {
      throw RNIAdaptiveModalError(
        errorCode: .unexpectedNilValue,
        description: "modalManager is nil",
        extraDebugValues: [
          "modalConfigProp": self.modalConfigProp ?? [:]
        ]
      );
    };
    
    try modalManager.snapTo(
      overrideSnapPointConfig: commandConfig.overrideSnapPointConfig,
      overshootSnapPointPreset: commandConfig.overshootSnapPointPreset,
      inBetweenSnapPointsMinPercentDiff: commandConfig.inBetweenSnapPointsMinPercentDiff,
      isAnimated: commandConfig.isAnimated,
      animationConfig: commandConfig.animationConfig,
      completion: completion
    );
  };
  
  // MARK: - Functions - View Module Commands
  // ----------------------------------------

  // WIP - TBA
  
  // MARK: - RNICleanable
  // --------------------
  
  public func cleanup(){
    guard let viewCleanupKey = self.viewCleanupKey else { return };
    
    try? RNICleanableViewRegistryShared.notifyCleanup(
      forKey: viewCleanupKey,
      sender: .cleanableViewDelegate(self),
      shouldForceCleanup: true,
      cleanupTrigger: nil
    );
  };
};

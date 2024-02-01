//
//  RNIAdaptiveModalViewModule.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 11/24/23.
//

import Foundation
import ExpoModulesCore
import ReactNativeIosUtilities

public class RNIAdaptiveModalViewModule: Module {

  public func definition() -> ModuleDefinition {
    Name("RNIAdaptiveModalView");
    
    AsyncFunction("notifyOnComponentWillUnmount") {
      (reactTag: Int, isManuallyTriggered: Bool, promise: Promise) in
      
      DispatchQueue.main.async {
        do {
          let adaptiveModalView = try RNIModuleHelpers.getView(
            withErrorType: RNIAdaptiveModalError.self,
            forNode: reactTag,
            type: RNIAdaptiveModalView.self
          );
          
          adaptiveModalView.notifyOnJSComponentWillUnmount();
          promise.resolve();
        
        } catch let error {
          promise.reject(error);
        };
      };
    };
    
    AsyncFunction("notifyDidLayoutSubviews") {
      (
        reactTag: Int,
        commandParams: Dictionary<String, Any>,
        promise: Promise
      ) in
      
      DispatchQueue.main.async {
        do {
          let adaptiveModalView = try RNIModuleHelpers.getView(
            withErrorType: RNIAdaptiveModalError.self,
            forNode: reactTag,
            type: RNIAdaptiveModalView.self
          );
          
          guard let modalManager = adaptiveModalView.modalManager else {
            throw RNIAdaptiveModalError(
              errorCode: .unexpectedNilValue,
              description: "`modalManager` is nil"
            );
          };

          modalManager.notifyDidLayoutSubviews();
          promise.resolve();
        
        } catch let error {
          promise.reject(error);
        };
      };
    };

    AsyncFunction("clearSnapPointOverride") {
      (
        reactTag: Int,
        commandParams: Dictionary<String, Any>,
        promise: Promise
      ) in
      
      DispatchQueue.main.async {
        do {
          let adaptiveModalView = try RNIModuleHelpers.getView(
            withErrorType: RNIAdaptiveModalError.self,
            forNode: reactTag,
            type: RNIAdaptiveModalView.self
          );
          
          guard let modalManager = adaptiveModalView.modalManager else {
            throw RNIAdaptiveModalError(
              errorCode: .unexpectedNilValue,
              description: "`modalManager` is nil"
            );
          };

          modalManager.clearSnapPointOverride(completion: nil);
          promise.resolve();
        
        } catch let error {
          promise.reject(error);
        };
      };
    };

    AsyncFunction("presentModal") {
      (
        reactTag: Int,
        commandParams: Dictionary<String, Any>,
        promise: Promise
      ) in
      
      DispatchQueue.main.async {
        do {
          let adaptiveModalView = try RNIModuleHelpers.getView(
            withErrorType: RNIAdaptiveModalError.self,
            forNode: reactTag,
            type: RNIAdaptiveModalView.self
          );
          
          let commandConfig = try RNIAdaptiveModalCommandConfigPresent(
            fromDict: commandParams
          );
          
          try adaptiveModalView.presentModal(commandConfig: commandConfig){
            promise.resolve();
          };
        
        } catch let error {
          promise.reject(error);
        };
      };
    };

    AsyncFunction("dismissModal") {
      (
        reactTag: Int,
        commandParams: Dictionary<String, Any>,
        promise: Promise
      ) in
      
      DispatchQueue.main.async {
        do {
          let adaptiveModalView = try RNIModuleHelpers.getView(
            withErrorType: RNIAdaptiveModalError.self,
            forNode: reactTag,
            type: RNIAdaptiveModalView.self
          );
          
          let commandConfig =
            try RNIAdaptiveModalCommandConfigDismiss(fromDict: commandParams);

          try adaptiveModalView.dismissModal(commandConfig: commandConfig){
            promise.resolve();
          };
        
        } catch let error {
          promise.reject(error);
        };
      };
    };

    AsyncFunction("snapTo") {
      (
        reactTag: Int,
        commandParams: Dictionary<String, Any>,
        promise: Promise
      ) in
      
      DispatchQueue.main.async {
        do {
          let adaptiveModalView = try RNIModuleHelpers.getView(
            withErrorType: RNIAdaptiveModalError.self,
            forNode: reactTag,
            type: RNIAdaptiveModalView.self
          );
          
          let commandConfig =
            try RNIAdaptiveModalCommandConfigSnapTo(fromDict: commandParams);

          try adaptiveModalView.snapTo(commandConfig: commandConfig){
            promise.resolve();
          };
        
        } catch let error {
          promise.reject(error);
        };
      };
    };

    AsyncFunction("snapToOverride") {
      (
        reactTag: Int,
        commandParams: Dictionary<String, Any>,
        promise: Promise
      ) in
      
      DispatchQueue.main.async {
        do {
          let adaptiveModalView = try RNIModuleHelpers.getView(
            withErrorType: RNIAdaptiveModalError.self,
            forNode: reactTag,
            type: RNIAdaptiveModalView.self
          );
          
          let commandConfig =
            try RNIAdaptiveModalCommandConfigSnapToOverride(fromDict: commandParams);

          try adaptiveModalView.snapToOverride(commandConfig: commandConfig) {
            promise.resolve();
          };
        
        } catch let error {
          promise.reject(error);
        };
      };
    };

    AsyncFunction("snapToClosestSnapPoint") {
      (
        reactTag: Int,
        commandParams: Dictionary<String, Any>,
        promise: Promise
      ) in
      
      DispatchQueue.main.async {
        do {
          let adaptiveModalView = try RNIModuleHelpers.getView(
            withErrorType: RNIAdaptiveModalError.self,
            forNode: reactTag,
            type: RNIAdaptiveModalView.self
          );
          
          guard let modalManager = adaptiveModalView.modalManager else {
            throw RNIAdaptiveModalError(
              errorCode: .unexpectedNilValue,
              description: "`modalManager` is nil"
            );
          };
          
          let commandConfig = try RNIAdaptiveModalCommandConfigSnapToCommon(
            fromDict: commandParams
          );

          modalManager.snapToClosestSnapPoint(
            isAnimated: commandConfig.isAnimated,
            animationConfig: commandConfig.animationConfig
          );
        
        } catch let error {
          promise.reject(error);
        };
      };
    };

    View(RNIAdaptiveModalView.self) {
      Events("onModalContentInitialized");
      Events("onModalWillSnap");
      Events("onModalDidSnap");
      Events("onModalWillShow");
      Events("onModalDidShow");
      Events("onModalWillHide");
      Events("onModalDidHide");
      Events("onModalPresentCancelled");
      Events("onModalDismissCancelled");
      Events("onCurrentModalConfigDidChange");
      Events("onBackgroundTapGesture");
      Events("onModalStateWillChange");
      
      Prop("modalConfig") {
        $0.modalConfigProp = $1;
      };
      
      Prop("modalContentAnchorMode") {
        $0.modalContentAnchorModeProp = $1;
      };
      
      Prop("modalAnimationMode") {
        $0.modalAnimationModeProp = $1;
      };
      
      Prop("shouldEnableContinuousLayoutResizingDuringAnimation") {
        $0.shouldEnableContinuousLayoutResizingDuringAnimation = $1;
      };
      
      Prop("shouldEnableSnapping") {
        $0.shouldEnableSnapping = $1;
      };
      
      Prop("shouldEnableOverShooting") {
        $0.shouldEnableOverShooting = $1;
      };
      
      Prop("shouldDismissKeyboardOnGestureSwipe") {
        $0.shouldDismissKeyboardOnGestureSwipe = $1;
      };
      
      Prop("shouldLockAxisToModalDirection") {
        $0.shouldLockAxisToModalDirection = $1;
      };
      
      Prop("overrideShouldSnapToUnderShootSnapPoint") {
        $0.overrideShouldSnapToUnderShootSnapPoint = $1;
      };
      
      Prop("overrideShouldSnapToOvershootSnapPoint") {
        $0.overrideShouldSnapToOvershootSnapPoint = $1;
      };
      
      Prop("shouldDismissModalOnSnapToUnderShootSnapPoint") {
        $0.shouldDismissModalOnSnapToUnderShootSnapPoint = $1;
      };
      
      Prop("shouldDismissModalOnSnapToOverShootSnapPoint") {
        $0.shouldDismissModalOnSnapToOverShootSnapPoint = $1;
      };
      
      Prop("isSwipeGestureEnabled") {
        $0.isSwipeGestureEnabled = $1;
      };
      
      Prop("isModalContentSwipeGestureEnabled") {
        $0.isModalContentSwipeGestureEnabled = $1;
      };
      
      Prop("allowModalToDragWhenAtMinScrollViewOffset") {
        $0.allowModalToDragWhenAtMinScrollViewOffset = $1;
      };
      
      Prop("allowModalToDragWhenAtMaxScrollViewOffset") {
        $0.allowModalToDragWhenAtMaxScrollViewOffset = $1;
      };
      
      Prop("isModalDragHandleGestureEnabled") {
        $0.isModalDragHandleGestureEnabled = $1;
      };
    };
  };
};

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
    
    AsyncFunction("presentModal") {
      (reactTag: Int, promise: Promise) in
      
      DispatchQueue.main.async {
        do {
          let adaptiveModalView = try RNIModuleHelpers.getView(
            withErrorType: RNIAdaptiveModalError.self,
            forNode: reactTag,
            type: RNIAdaptiveModalView.self
          );
          
          try adaptiveModalView.presentModal();
        
        } catch let error {
          promise.reject(error);
        };
      };
    };

    View(RNIAdaptiveModalView.self) {
      Events("onModalContentInitialized");
      Events("onModalDidHide");
      
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
    };
  };
};

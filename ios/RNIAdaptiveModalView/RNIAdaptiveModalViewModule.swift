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
          let contextMenuView = try RNIModuleHelpers.getView(
            withErrorType: RNIAdaptiveModalError.self,
            forNode: reactTag,
            type: RNIAdaptiveModalView.self
          );
          
          contextMenuView.notifyOnJSComponentWillUnmount();
          promise.resolve();
        
        } catch let error {
          promise.reject(error);
        };
      };
    };

    View(RNIAdaptiveModalView.self) {
  
    };
  };
};

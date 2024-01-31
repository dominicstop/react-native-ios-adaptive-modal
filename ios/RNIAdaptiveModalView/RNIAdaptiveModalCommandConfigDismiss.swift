//
//  RNIAdaptiveModalCommandConfigDismiss.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 2/1/24.
//

import Foundation
import DGSwiftUtilities
import AdaptiveModal


struct RNIAdaptiveModalCommandConfigDismiss: InitializableFromDictionary {

  var mode: RNIAdaptiveModalCommandConfigDismissMode;
  
  var isAnimated: Bool;
  var animationConfig: AnimationConfig?;
  
  init(fromDict dict: Dictionary<String, Any>) throws {
    self.mode = try .init(fromDict: dict);
    
    self.isAnimated = {
      let value = try? dict.getValueFromDictionary(
        forKey: "isAnimated",
        type: Bool.self
      );
      
      return value ?? true;
    }();
    
    self.animationConfig =
      try? dict.getValueFromDictionary(forKey: "animationConfig");
  };
};

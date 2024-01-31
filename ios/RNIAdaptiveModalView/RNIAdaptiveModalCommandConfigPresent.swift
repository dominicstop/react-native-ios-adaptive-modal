//
//  RNIAdaptiveModalCommandConfigPresent.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 1/31/24.
//

import Foundation
import DGSwiftUtilities

struct RNIAdaptiveModalCommandConfigPresent: InitializableFromDictionary {

  var mode: RNIAdaptiveModalCommandConfigPresentMode;
  
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

//
//  RNIAdaptiveModalCommandConfigSnapToOverride.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 2/1/24.
//

import Foundation
import DGSwiftUtilities
import AdaptiveModal


struct RNIAdaptiveModalCommandConfigSnapToOverride: InitializableFromDictionary {

  var overrideSnapPointConfig: AdaptiveModalSnapPointConfig;
  var overshootSnapPointPreset: AdaptiveModalSnapPointPreset?;
  
  var inBetweenSnapPointsMinPercentDiff: CGFloat;
  var isAnimated: Bool;
  var animationConfig: AnimationConfig?;
  
  init(fromDict dict: Dictionary<String, Any>) throws {
    self.overrideSnapPointConfig = try dict.getValueFromDictionary(
      forKey: "overrideSnapPointConfig"
    );
    
    self.overshootSnapPointPreset = try? dict.getValueFromDictionary(
      forKey: "overshootSnapPointPreset"
    );
    
    self.inBetweenSnapPointsMinPercentDiff = {
      let value = try? dict.getValueFromDictionary(
        forKey: "inBetweenSnapPointsMinPercentDiff",
        type: CGFloat.self
      );
      
      return value ?? 0.1;
    }();
    
    self.isAnimated = {
      let value = try? dict.getValueFromDictionary(
        forKey: "isAnimated",
        type: Bool.self
      );
      
      return value ?? true;
    }();
    
    self.animationConfig = try? dict.getValueFromDictionary(
      forKey: "animationConfig",
      type: AnimationConfig.self
    );
  };
};

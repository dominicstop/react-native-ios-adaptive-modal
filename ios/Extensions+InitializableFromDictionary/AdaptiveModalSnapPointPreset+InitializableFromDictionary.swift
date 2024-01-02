//
//  AdaptiveModalSnapPointPreset+InitializableFromDictionary.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 1/2/24.
//

import UIKit
import DGSwiftUtilities
import ComputableLayout
import AdaptiveModal


extension AdaptiveModalSnapPointPreset: InitializableFromDictionary {
  
  public init(fromDict dict: Dictionary<String, Any>) throws {
    let layoutPreset = try dict.getValueFromDictionary(
      forKey: "layoutPreset",
      type: ComputableLayoutPreset.self
    );
    
    let keyframeConfig = try? dict.getValueFromDictionary(
      forKey: "keyframeConfig",
      type: AdaptiveModalKeyframeConfig.self
    );
  
    self.init(
      layoutPreset: layoutPreset,
      keyframeConfig: keyframeConfig
    );
  };
};

//
//  RNIAdaptiveModalCommandConfigDismissMode.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 2/1/24.
//

import Foundation
import DGSwiftUtilities
import AdaptiveModal

enum RNIAdaptiveModalCommandConfigDismissMode: InitializableFromDictionary {

  case standard(useInBetweenSnapPoints: Bool);
  case customSnapPointPreset(snapPointPreset: AdaptiveModalSnapPointPreset);
  case customKeyframe(keyframe: AdaptiveModalKeyframeConfig);
  
  init(fromDict dict: Dictionary<String, Any>) throws {
    let mode = try dict.getValueFromDictionary(
      forKey: "mode",
      type: String.self
    );
    
    switch mode {
      case "standard":
        let useInBetweenSnapPoints = try dict.getValueFromDictionary(
          forKey: "useInBetweenSnapPoints",
          type: Bool.self
        );
        
        self = .standard(
          useInBetweenSnapPoints: useInBetweenSnapPoints
        );
      
      case "customSnapPointPreset":
        let snapPointPreset = try dict.getValueFromDictionary(
          forKey: "snapPointPreset",
          type: AdaptiveModalSnapPointPreset.self
        );
        
        self = .customSnapPointPreset(
          snapPointPreset: snapPointPreset
        );
        
      case "customKeyframe":
        let keyframe = try dict.getValueFromDictionary(
          forKey: "keyframe",
          type: AdaptiveModalKeyframeConfig.self
        );
        
        self = .customKeyframe(
          keyframe: keyframe
        );
      
      default:
        throw RNIAdaptiveModalError(
          errorCode: .invalidValue,
          description: "Invalid string value for `mode`",
          extraDebugValues: [
            "mode": mode,
          ]
        );
    };
  };
};


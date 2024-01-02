//
//  AdaptiveModalLayoutValueEdgeInsets+InitializableFromDictionary.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 1/2/24.
//

import UIKit
import DGSwiftUtilities
import ComputableLayout
import AdaptiveModal


extension AdaptiveModalKeyframeConfig.LayoutValueEdgeInsets: InitializableFromDictionary {

  public init(fromDict dict: Dictionary<String, Any>) throws {
    let modeString = try dict.getValueFromDictionary(
      forKey: "mode",
      type: String.self
    );
    
    switch modeString {
      case "edgeInsets":
        let value = try dict.getValueFromDictionary(
          forKey: "value",
          type: UIEdgeInsets.self
        );
        
        self = .edgeInsets(value);
        
      case "layoutValue":
        let top = try dict.getValueFromDictionary(
          forKey: "top",
          type: ComputableLayoutValue.self
        );
        
        let left = try dict.getValueFromDictionary(
          forKey: "left",
          type: ComputableLayoutValue.self
        );
        
        let bottom = try dict.getValueFromDictionary(
          forKey: "bottom",
          type: ComputableLayoutValue.self
        );
        
        let right = try dict.getValueFromDictionary(
          forKey: "right",
          type: ComputableLayoutValue.self
        );
        
        self = .layoutValue(
          top: top,
          left: left,
          bottom: bottom,
          right: right
        );
        
      default:
        throw RNIAdaptiveModalError(
          errorCode: .invalidValue,
          description: "Invalid value for mode",
          extraDebugValues: [
            "dict": dict,
            "modeString": modeString,
          ]
        );
    };
  };
};

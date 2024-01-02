//
//  AdaptiveModalClampingConfig+InitializableFromDictionary.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 1/2/24.
//

import UIKit
import DGSwiftUtilities
import ComputableLayout
import AdaptiveModal

extension AdaptiveModalClampingConfig: InitializableFromDictionary {
  
  public init(fromDict dict: Dictionary<String, Any>) throws {

    let clampingKeysLeft = try? dict.getValueFromDictionary(
      forKey: "clampingKeysLeft",
      type: Set<AdaptiveModalClampingConfig.ClampingKeys>.self
    );
    
    let clampingKeysRight = try? dict.getValueFromDictionary(
      forKey: "clampingKeysRight",
      type: Set<AdaptiveModalClampingConfig.ClampingKeys>.self
    );
    
    if let clampingKeysLeft = clampingKeysLeft,
       let clampingKeysRight = clampingKeysRight {
      
      self.init(
        clampingKeysLeft: clampingKeysLeft,
        clampingKeysRight: clampingKeysRight
      );
      
      return;
    };
    
    let clampingKeys = try? dict.getValueFromDictionary(
      forKey: "clampingKeys",
      type: Set<AdaptiveModalClampingConfig.ClampingKeys>.self
    );
    
    if let clampingKeys = clampingKeys {
      self.init(clampingKeys: clampingKeys);
      return;
    };
    
    let clampingPresetString = try? dict.getValueFromDictionary(
      forKey: "clampingPreset",
      type: String.self
    );
    
    if let clampingPresetString = clampingPresetString {
      switch clampingPresetString {
        case "defaultHorizontal":
          self = .defaultHorizontal;
          return;
          
        case "defaultVertical":
          self = .defaultVertical;
          return;
         
        default:
          throw GenericError(
            errorCode: .invalidValue,
            description: "No matching preset found for string",
            extraDebugValues: [
              "dict": dict,
              "clampingPresetString": clampingPresetString,
            ]
          );
      };
    };
    
    throw GenericError(
      errorCode: .invalidValue,
      description: "Unable to parse dict",
      extraDebugValues: [
        "dict": dict
      ]
    );
  };
};

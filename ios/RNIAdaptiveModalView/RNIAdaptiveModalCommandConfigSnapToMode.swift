//
//  RNIAdaptiveModalCommandConfigSnapToMode.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 2/1/24.
//

import Foundation
import DGSwiftUtilities
import AdaptiveModal

enum RNIAdaptiveModalCommandConfigSnapToMode: InitializableFromDictionary {

  case index(snapPointIndex: Int);
  case key(snapPointKey: String);
  case type(snapPointType: AdaptiveModalSnapPointType);
  
  init(fromDict dict: Dictionary<String, Any>) throws {
    let mode = try dict.getValueFromDictionary(
      forKey: "mode",
      type: String.self
    );
    
    switch mode {
      case "index":
        let snapPointIndex = try dict.getValueFromDictionary(
          forKey: "snapPointIndex",
          type: Int.self
        );
        
        self = .index(
          snapPointIndex: snapPointIndex
        );
      
      case "key":
        let snapPointKey = try dict.getValueFromDictionary(
          forKey: "snapPointKey",
          type: String.self
        );
        
        self = .key(
          snapPointKey: snapPointKey
        );
        
      case "type":
        let snapPointType = try dict.getEnumFromDictionary(
          forKey: "snapPointType",
          type: AdaptiveModalSnapPointType.self
        );
        
        self = .type(
          snapPointType: snapPointType
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

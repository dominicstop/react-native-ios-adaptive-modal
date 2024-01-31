//
//  RNIAdaptiveModalCommandConfigPresentMode.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 1/31/24.
//

import Foundation
import DGSwiftUtilities

enum RNIAdaptiveModalCommandConfigPresentMode: InitializableFromDictionary {
  case standard;
  case customSnapPointIndex(snapPointIndex: Int);
  case customSnapPointKey(snapPointKey: String);
  
  init(fromDict dict: Dictionary<String, Any>) throws {
    let mode = try dict.getValueFromDictionary(
      forKey: "mode",
      type: String.self
    );
    
    switch mode {
      case "standard":
        self = .standard;
      
      case "customSnapPointIndex":
        let snapPointIndex = try dict.getValueFromDictionary(
          forKey: "snapPointIndex",
          type: Int.self
        );
        
        self = .customSnapPointIndex(
          snapPointIndex: snapPointIndex
        );
        
      case "customSnapPointKey":
        let snapPointKey = try dict.getValueFromDictionary(
          forKey: "snapPointKey",
          type: String.self
        );
        
        self = .customSnapPointKey(
          snapPointKey: snapPointKey
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

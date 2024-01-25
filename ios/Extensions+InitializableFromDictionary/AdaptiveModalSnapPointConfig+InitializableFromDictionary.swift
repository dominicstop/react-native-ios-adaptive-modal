//
//  AdaptiveModalSnapPointConfig+InitializableFromDictionary.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 1/2/24.
//

import UIKit
import DGSwiftUtilities
import ComputableLayout
import AdaptiveModal

extension AdaptiveModalSnapPointConfig: InitializableFromDictionary {

  fileprivate enum Mode: String {
    case standard, inBetween;
  };
  
  public init(fromDict dict: Dictionary<String, Any>) throws {
  
    let mode = try dict.getEnumFromDictionary(
      forKey: "mode",
      type: Mode.self
    );
    
    let key = try? dict.getValueFromDictionary(
      forKey: "key",
      type: String.self
    );
    
    let layoutConfig = try? dict.getValueFromDictionary(
      forKey: "layoutConfig",
      type: ComputableLayout.self
    );
    
    let keyframeConfig = try? dict.getValueFromDictionary(
      forKey: "keyframeConfig",
      type: AdaptiveModalKeyframeConfig.self
    );
    
    switch mode {
      case .standard:
        guard let layoutConfig = layoutConfig else {
          throw RNIAdaptiveModalError(
            errorCode: .unexpectedNilValue,
            description: "layoutConfig is nil"
          );
        };
        
        self = .init(
          key: key,
          type: .standard(
            layoutConfig: layoutConfig
          ),
          keyframeConfig: keyframeConfig
        );
        
      case .inBetween:
        self = .init(
          key: key,
          type: .inBetween(
            layoutConfig: layoutConfig
          ),
          keyframeConfig: keyframeConfig
        );
    };
  };
};

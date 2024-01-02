//
//  Dictionary+Helpers.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 1/2/24.
//

import Foundation
import DGSwiftUtilities

// TODO: Move to `DGSwiftUtilities`
public extension Dictionary where Key == String {
  
  func getColorFromDictionary(forKey key: String) throws -> UIColor {
    let stringValue = try? self.getValueFromDictionary(
      forKey: key,
      type: String.self
    );
    
    if let stringValue = stringValue,
       let color = UIColor(rgbString: stringValue) {
      
      return color;
    };
    
    let dictValue = try? self.getValueFromDictionary(
      forKey: key,
      type: NSDictionary.self
    );
    
    if let dictValue = dictValue,
       let color = UIColor(dynamicDict: dictValue) {
      
      return color;
    };
    
    throw GenericError(
      errorCode: .unexpectedNilValue,
      description: "Unable to get color from dictionary for key",
      extraDebugValues: [
        "key": key
      ]
    );
  };
};

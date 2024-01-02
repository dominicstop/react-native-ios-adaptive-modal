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

  func getValueFromDictionary<T: OptionSet & InitializableFromString>(
    forKey key: String,
    type: T.Type = T.self
  ) throws -> T {
  
    let stringValues = try self.getValueFromDictionary(
      forKey: "modalMaskedCorners",
      type: [String].self
    );
    
    var optionSets = stringValues.compactMap {
      try? T.init(fromString: $0);
    };
    
    guard let optionSetItem = optionSets.popLast() else {
      throw GenericError(
        errorCode: .unexpectedNilValue,
        description: "array of optionSet values is 0",
        extraDebugValues: [
          "key": key
        ]
      );
    };
    
    return optionSets.reduce(optionSetItem) {
      $0.union($1);
    };
  };
  
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

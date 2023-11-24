//
//  RNIAdaptiveModalError.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 11/24/23.
//

import ReactNativeIosUtilities
import DGSwiftUtilities

public typealias RNIAdaptiveModalError =
  RNIError<RNIAdaptiveModalErrorMetadata>;
  
public struct RNIAdaptiveModalErrorMetadata: ErrorMetadata {
  public static var domain: String? = "react-native-ios-adaptive-modal";
  
  public static var parentType: String?;
};


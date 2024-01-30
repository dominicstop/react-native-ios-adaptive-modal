//
//  RNIAdaptiveModalView+AdaptiveModalBackgroundTapDelegate.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 1/29/24.
//

import Foundation
import AdaptiveModal

extension RNIAdaptiveModalView: AdaptiveModalBackgroundTapDelegate {

  public func notifyOnBackgroundTapGesture(sender: UIGestureRecognizer) {
    self.onBackgroundTapGesture.callAsFunction();
  };
};

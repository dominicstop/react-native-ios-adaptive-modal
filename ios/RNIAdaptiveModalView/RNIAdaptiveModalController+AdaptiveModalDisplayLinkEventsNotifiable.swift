//
//  RNIAdaptiveModalController+AdaptiveModalDisplayLinkEventsNotifiable.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 1/6/24.
//

import UIKit
import ExpoModulesCore

import ReactNativeIosUtilities
import DGSwiftUtilities
import AdaptiveModal


extension RNIAdaptiveModalController: AdaptiveModalDisplayLinkEventsNotifiable {
  func onDisplayLinkTick(
    sender: AdaptiveModalManager,
    displayLink: CADisplayLink,
    modalFrame: CGRect
  ) {
    
    self.updateModalContentSize(withSize: modalFrame.size);
  };
};

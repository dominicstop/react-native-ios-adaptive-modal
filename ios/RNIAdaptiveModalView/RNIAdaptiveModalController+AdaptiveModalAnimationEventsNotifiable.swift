//
//  RNIAdaptiveModalController+AdaptiveModalAnimationEventsNotifiable.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 12/13/23.
//
import UIKit
import ExpoModulesCore

import ReactNativeIosUtilities
import DGSwiftUtilities
import AdaptiveModal



extension RNIAdaptiveModalController: AdaptiveModalAnimationEventsNotifiable {
  func notifyOnModalAnimatorStart(
     sender: AdaptiveModalManager,
     animator: UIViewPropertyAnimator?,
     interpolationPoint: AdaptiveModalInterpolationPoint,
     isAnimated: Bool
  ) {
    // no-op
  };
  
  func notifyOnModalAnimatorPercentChanged(
    sender: AdaptiveModalManager,
    percent: CGFloat
  ) {
    
    //self.updateModalContentSize();
  };
  
  func notifyOnModalAnimatorStop(sender: AdaptiveModalManager) {
    self.updateModalContentSize();
  };
  
  func notifyOnModalAnimatorCompletion(
    sender: AdaptiveModalManager,
    position: UIViewAnimatingPosition
  ) {
    
    //self.updateModalContentSize();
  };
};

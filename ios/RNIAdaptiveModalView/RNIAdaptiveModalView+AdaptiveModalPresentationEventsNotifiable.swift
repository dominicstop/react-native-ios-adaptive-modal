//
//  RNIAdaptiveModalView+AdaptiveModalPresentationEventsNotifiable.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 12/16/23.
//

import UIKit
import ExpoModulesCore

import ReactNativeIosUtilities
import DGSwiftUtilities
import AdaptiveModal
import ComputableLayout

extension RNIAdaptiveModalView: AdaptiveModalPresentationEventsNotifiable {

  public func notifyOnModalWillSnap(
    sender: AdaptiveModalManager, prevSnapPointIndex: Int?,
    nextSnapPointIndex: Int,
    prevSnapPointConfig: AdaptiveModalSnapPointConfig?,
    nextSnapPointConfig: AdaptiveModalSnapPointConfig,
    prevInterpolationPoint: AdaptiveModalInterpolationPoint?,
    nextInterpolationPoint: AdaptiveModalInterpolationPoint
  ) {
    // no-op
  };
  
  public func notifyOnModalDidSnap(
    sender: AdaptiveModal.AdaptiveModalManager,
    prevSnapPointIndex: Int?,
    currentSnapPointIndex: Int,
    prevSnapPointConfig: AdaptiveModalSnapPointConfig?,
    currentSnapPointConfig: AdaptiveModalSnapPointConfig,
    prevInterpolationPoint: AdaptiveModalInterpolationPoint?,
    currentInterpolationPoint: AdaptiveModalInterpolationPoint
  ) {
    // no-op
  };
  
  public func notifyOnAdaptiveModalWillShow(sender: AdaptiveModalManager) {
    // no-op
  };
  
  public func notifyOnAdaptiveModalDidShow(sender: AdaptiveModalManager) {
    // no-op
  };
  
  public func notifyOnAdaptiveModalWillHide(sender: AdaptiveModalManager) {
    // no-op
  };
  
  public func notifyOnAdaptiveModalDidHide(sender: AdaptiveModalManager) {
    self.onModalDidHide.callAsFunction();
    
    if let modalContentDetachedView = self.modalContentDetachedView {
      modalContentDetachedView.cleanup();
      self.modalContentDetachedView = nil;
    };
    
    self.modalManager = nil;
    self.modalViewController = nil;
  };
  
  public func notifyOnModalPresentCancelled(sender: AdaptiveModalManager) {
    // no-op
  };
  
  public func notifyOnModalDismissCancelled(sender: AdaptiveModalManager) {
    // no-op
  };
  
  public func notifyOnCurrentModalConfigDidChange(
    sender: AdaptiveModalManager,
    currentModalConfig: AdaptiveModalConfig?,
    prevModalConfig: AdaptiveModalConfig?
  ) {
    // no-op
  };
};

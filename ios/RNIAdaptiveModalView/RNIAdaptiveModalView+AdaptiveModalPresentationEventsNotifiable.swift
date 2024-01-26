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


fileprivate extension AdaptiveModalInterpolationPoint {
  
  var eventPayload: Dictionary<String, Any> {
    var eventPayload: Dictionary<String, Any> = [
      "index": self.snapPoint.index,
    ];
    
    if let nextSnapPointKey = self.snapPoint.key {
      eventPayload["key"] = nextSnapPointKey;
    };

    return eventPayload;
  };
};

extension RNIAdaptiveModalView: AdaptiveModalPresentationEventsNotifiable {

  public func notifyOnModalWillSnap(
    sender: AdaptiveModalManager,
    prevInterpolationPoint: AdaptiveModalInterpolationPoint?,
    nextInterpolationPoint: AdaptiveModalInterpolationPoint
  ) {
  
    var eventPayload: Dictionary<String, Any> = [
      "nextInterpolationPoint": nextInterpolationPoint.eventPayload
    ];
    
    if let prevInterpolationPoint = prevInterpolationPoint {
      eventPayload["prevInterpolationPoint"] = prevInterpolationPoint.eventPayload;
    };

    self.onModalWillSnap.callAsFunction(eventPayload);
  };
  
  public func notifyOnModalDidSnap(
    sender: AdaptiveModal.AdaptiveModalManager,
    prevInterpolationPoint: AdaptiveModalInterpolationPoint?,
    currentInterpolationPoint: AdaptiveModalInterpolationPoint
  ) {
    
    var eventPayload: Dictionary<String, Any> = [
      "currentInterpolationPoint": currentInterpolationPoint.eventPayload
    ];
    
    if let prevInterpolationPoint = prevInterpolationPoint {
      eventPayload["prevInterpolationPoint"] = prevInterpolationPoint.eventPayload;
    };

    self.onModalDidSnap.callAsFunction(eventPayload);
  };
  
  public func notifyOnAdaptiveModalWillShow(sender: AdaptiveModalManager) {
    self.onModalWillShow.callAsFunction();
  };
  
  public func notifyOnAdaptiveModalDidShow(sender: AdaptiveModalManager) {
    self.onModalDidShow.callAsFunction();
  };
  
  public func notifyOnAdaptiveModalWillHide(sender: AdaptiveModalManager) {
    self.onModalWillHide.callAsFunction();
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
    self.onModalPresentCancelled.callAsFunction();
  };
  
  public func notifyOnModalDismissCancelled(sender: AdaptiveModalManager) {
    self.onModalDismissCancelled.callAsFunction();
  };
  
  public func notifyOnCurrentModalConfigDidChange(
    sender: AdaptiveModalManager,
    currentModalConfig: AdaptiveModalConfig?,
    prevModalConfig: AdaptiveModalConfig?
  ) {
  
    self.onCurrentModalConfigDidChange.callAsFunction();
  };
};

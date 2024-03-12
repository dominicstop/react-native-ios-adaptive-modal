//
//  RNIAdaptiveModalView+RNICleanableViewDelegate.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 3/12/24.
//

import UIKit
import ReactNativeIosUtilities

extension RNIAdaptiveModalView: RNICleanableViewDelegate {
  
  public func notifyOnViewCleanupRequest(
    sender: RNICleanableViewSenderType,
    item: RNICleanableViewItem
  ) -> Bool {
  
    let isPresenting = self.modalManager?.modalState.isPresented ?? false;
    guard !isPresenting else { return false };
  
    let isViewInactive = self.superview == nil || self.window == nil
    guard isViewInactive else { return false };
    
    let shouldTriggerCleanup =
         !self.viewCleanupMode.isDisabled
      && !self._didTriggerCleanup;
    
    guard shouldTriggerCleanup else { return false };
    return true;
  };
  
  public func notifyOnViewCleanupWillBegin(){
    self.modalManager?.dismissModal(
      useInBetweenSnapPoints: false,
      animated: false
    );
  };
  
  public func notifyOnViewCleanupCompletion() {
    self._didTriggerCleanup = true;
    
    #if DEBUG
    NotificationCenter.default.removeObserver(self);
    #endif
  };
};

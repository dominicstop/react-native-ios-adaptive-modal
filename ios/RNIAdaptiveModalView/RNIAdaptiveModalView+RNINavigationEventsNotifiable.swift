//
//  RNIAdaptiveModalView+RNINavigationEventsNotifiable.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 11/24/23.
//

import ReactNativeIosUtilities

extension RNIAdaptiveModalView: RNINavigationEventsNotifiable {

  public func notifyViewControllerDidPop(
    sender: RNINavigationEventsReportingViewController
  ) {
    try? self.viewCleanupMode
      .triggerCleanupIfNeededForViewControllerDidPopEvent(for: self);
  };
};

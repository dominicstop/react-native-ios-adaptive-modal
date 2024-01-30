//
//  RNIAdaptiveModalView+AdaptiveModalStateEventsNotifiable.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 1/30/24.
//

import Foundation
import AdaptiveModal

extension RNIAdaptiveModalView: AdaptiveModalStateEventsNotifiable {

  public func notifyOnModalStateWillChange(
    sender: AdaptiveModalManager,
    prevState: AdaptiveModalState,
    currentState: AdaptiveModalState,
    nextState: AdaptiveModalState
  ) {
    
    self.onModalStateWillChange.callAsFunction([
      "prevState": prevState.rawValue,
      "currentState": currentState.rawValue,
      "nextState": nextState.rawValue,
    ]);
  };
};

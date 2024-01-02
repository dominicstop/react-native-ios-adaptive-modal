//
//  AdaptiveModalConfig+InitializableFromDictionary.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 1/2/24.
//

import UIKit
import DGSwiftUtilities
import ComputableLayout
import AdaptiveModal

extension AdaptiveModalConfig: InitializableFromDictionary {
  
  public init(fromDict dict: Dictionary<String, Any>) throws {
    let snapPoints = try {
      let snapPointsRaw = try dict.getValueFromDictionary(
        forKey: "snapPoints",
        type: [Dictionary<String, Any>].self
      );
      
      return snapPointsRaw.compactMap {
        try? AdaptiveModalSnapPointConfig(fromDict: $0);
      };
    }();
    
    let snapDirection = try dict.getEnumFromDictionary(
      forKey: "snapDirection",
      type: SnapDirection.self
    );
    
    let snapPercentStrategy = try? dict.getEnumFromDictionary(
      forKey: "snapPercentStrategy",
      type: SnapPercentStrategy.self
    );
    
    let snapAnimationConfig = try? dict.getValueFromDictionary(
      forKey: "snapAnimationConfig",
      type: AnimationConfig.self
    );
    
    let entranceAnimationConfig = try? dict.getValueFromDictionary(
      forKey: "entranceAnimationConfig",
      type: AnimationConfig.self
    );
    
    let exitAnimationConfig = try? dict.getValueFromDictionary(
      forKey: "exitAnimationConfig",
      type: AnimationConfig.self
    );
    
    let interpolationClampingConfig = try? dict.getValueFromDictionary(
      forKey: "interpolationClampingConfig",
      type: AdaptiveModalClampingConfig.self
    );
    
    let initialSnapPointIndex = try? dict.getValueFromDictionary(
      forKey: "initialSnapPointIndex",
      type: NSNumber.self
    );
    
    let undershootSnapPoint = try? dict.getValueFromDictionary(
      forKey: "undershootSnapPoint",
      type: AdaptiveModalSnapPointPreset.self
    );
    
    let overshootSnapPoint = try? dict.getValueFromDictionary(
      forKey: "overshootSnapPoint",
      type: AdaptiveModalSnapPointPreset.self
    );
    
    let dragHandlePosition = try? dict.getEnumFromDictionary(
      forKey: "dragHandlePosition",
      type: DragHandlePosition.self
    );
    
    let dragHandleHitSlop = try? dict.getValueFromDictionary(
      forKey: "dragHandleHitSlop",
      type: CGPoint.self
    );
    
    let modalSwipeGestureEdgeHeight = try? dict.getValueFromDictionary(
      forKey: "modalSwipeGestureEdgeHeight",
      type: CGFloat.self
    );
    
    let shouldSetModalScrollViewContentInsets = try? dict.getValueFromDictionary(
      forKey: "shouldSetModalScrollViewContentInsets",
      type: Bool.self
    );
    
    let shouldSetModalScrollViewVerticalScrollIndicatorInsets = try? dict.getValueFromDictionary(
      forKey: "shouldSetModalScrollViewVerticalScrollIndicatorInsets",
      type: Bool.self
    );
    
    let shouldSetModalScrollViewHorizontalScrollIndicatorInsets = try? dict.getValueFromDictionary(
      forKey: "shouldSetModalScrollViewHorizontalScrollIndicatorInsets",
      type: Bool.self
    );
    
    self.init(
      snapPoints: snapPoints,
      snapDirection: snapDirection,
      snapPercentStrategy: snapPercentStrategy,
      snapAnimationConfig: snapAnimationConfig,
      entranceAnimationConfig: entranceAnimationConfig,
      exitAnimationConfig: exitAnimationConfig,
      interpolationClampingConfig: interpolationClampingConfig,
      initialSnapPointIndex: initialSnapPointIndex?.intValue,
      undershootSnapPoint: undershootSnapPoint,
      overshootSnapPoint: overshootSnapPoint,
      dragHandlePosition: dragHandlePosition ?? .automatic,
      dragHandleHitSlop: dragHandleHitSlop,
      modalSwipeGestureEdgeHeight: modalSwipeGestureEdgeHeight,
      shouldSetModalScrollViewContentInsets: shouldSetModalScrollViewContentInsets,
      shouldSetModalScrollViewVerticalScrollIndicatorInsets: shouldSetModalScrollViewVerticalScrollIndicatorInsets,
      shouldSetModalScrollViewHorizontalScrollIndicatorInsets: shouldSetModalScrollViewHorizontalScrollIndicatorInsets
    );
  };
};

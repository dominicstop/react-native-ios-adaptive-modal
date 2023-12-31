import { AnimationConfig, CGSize } from "react-native-ios-utilities";

import { SnapDirection } from "./SnapDirection";
import { SnapPercentStrategy } from "./SnapPercentStrategy";
import { AdaptiveModalClampingConfig } from "./AdaptiveModalClampingConfig";
import { AdaptiveModalSnapPointConfig } from "./AdaptiveModalSnapPointConfig";


export type AdaptiveModalConfig = {
  snapPoints: AdaptiveModalSnapPointConfig[];
  snapDirection: SnapDirection;

  snapPercentStrategy?: SnapPercentStrategy;
  snapAnimationConfig?: AnimationConfig;
  entranceAnimationConfig?: AnimationConfig;
  exitAnimationConfig?: AnimationConfig;
  interpolationClampingConfig?: AdaptiveModalClampingConfig;
  
  initialSnapPointIndex?: number;
  dragHandleHitSlop?: CGSize;
  modalSwipeGestureEdgeHeight?: number;

  shouldSetModalScrollViewContentInsets?: boolean;
  shouldSetModalScrollViewVerticalScrollIndicatorInsets?: boolean;
  shouldSetModalScrollViewHorizontalScrollIndicatorInsets?: boolean;
};
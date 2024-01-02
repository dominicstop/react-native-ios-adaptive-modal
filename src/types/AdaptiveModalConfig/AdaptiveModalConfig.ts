import { AnimationConfig, CGPoint } from "react-native-ios-utilities";

import { SnapDirection } from "./SnapDirection";
import { SnapPercentStrategy } from "./SnapPercentStrategy";
import { AdaptiveModalClampingConfig } from "./AdaptiveModalClampingConfig";
import { AdaptiveModalSnapPointConfig } from "./AdaptiveModalSnapPointConfig";
import { AdaptiveModalSnapPointPreset } from "./AdaptiveModalSnapPointPreset";
import { DragHandlePosition } from "./DragHandlePosition";


export type AdaptiveModalConfig = {
  snapPoints: AdaptiveModalSnapPointConfig[];
  snapDirection: SnapDirection;
  
  snapPercentStrategy?: SnapPercentStrategy;
  snapAnimationConfig?: AnimationConfig;
  entranceAnimationConfig?: AnimationConfig;
  exitAnimationConfig?: AnimationConfig;
  interpolationClampingConfig?: AdaptiveModalClampingConfig;
  initialSnapPointIndex?: number;
  undershootSnapPoint?: AdaptiveModalSnapPointPreset;
  overshootSnapPoint?: AdaptiveModalSnapPointPreset;
  dragHandlePosition?: DragHandlePosition;
  dragHandleHitSlop?: CGPoint;
  modalSwipeGestureEdgeHeight?: number;
  shouldSetModalScrollViewContentInsets?: boolean;
  shouldSetModalScrollViewVerticalScrollIndicatorInsets?: boolean;
  shouldSetModalScrollViewHorizontalScrollIndicatorInsets?: boolean
};
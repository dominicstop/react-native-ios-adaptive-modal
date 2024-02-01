import { AnimationConfig } from "react-native-ios-utilities";
import { AdaptiveModalSnapPointConfig, AdaptiveModalSnapPointPreset } from "../../types/AdaptiveModalConfig";

export type RNIAdaptiveModalCommandConfigSnapToOverride = {
  overrideSnapPointConfig: AdaptiveModalSnapPointConfig;
  overshootSnapPointPreset?: AdaptiveModalSnapPointPreset;
  inBetweenSnapPointsMinPercentDiff?: number;
  isAnimated?: boolean;
  animationConfig?: AnimationConfig;
};
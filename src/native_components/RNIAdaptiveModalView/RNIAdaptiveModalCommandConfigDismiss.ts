import { AnimationConfig } from "react-native-ios-utilities";
import { AdaptiveModalKeyframeConfig, AdaptiveModalSnapPointPreset } from "../../types/AdaptiveModalConfig";


export type RNIAdaptiveModalCommandConfigDismissBase = {
  isAnimated?: boolean;
  animationConfig?: AnimationConfig;
};

export type RNIAdaptiveModalCommandConfigDismissMode = {
  mode: 'standard';
  useInBetweenSnapPoints: boolean;
} | {
  mode: 'customSnapPointPreset';
  snapPointPreset: AdaptiveModalSnapPointPreset;
} | {
  mode: 'customKeyframe';
  keyframe: AdaptiveModalKeyframeConfig;
};

export type RNIAdaptiveModalCommandConfigDismiss = 
  & RNIAdaptiveModalCommandConfigDismissBase
  & RNIAdaptiveModalCommandConfigDismissMode;
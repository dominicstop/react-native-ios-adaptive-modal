import { AnimationConfig } from "react-native-ios-utilities";
import { AdaptiveModalSnapPointType } from "../../types/AdaptiveModal";


export type RNIAdaptiveModalCommandConfigSnapToBase = {
  isAnimated?: boolean;
  animationConfig?: AnimationConfig;
}; 

export type RNIAdaptiveModalCommandConfigSnapToMode = {
  mode: 'index';
  snapPointIndex: number;
} | {
  mode: 'key';
  snapPointKey: string;
} | {
  mode: 'type';
  snapPointType: AdaptiveModalSnapPointType;
};

export type RNIAdaptiveModalCommandConfigSnapTo =
  & RNIAdaptiveModalCommandConfigSnapToBase
  & RNIAdaptiveModalCommandConfigSnapToMode;
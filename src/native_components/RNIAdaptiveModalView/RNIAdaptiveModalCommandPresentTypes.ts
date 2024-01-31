import { AnimationConfig } from "react-native-ios-utilities";

export type RNIAdaptiveModalCommandConfigPresentBase = {
  isAnimated?: boolean;
  animationConfig?: AnimationConfig; 
};

export type RNIAdaptiveModalCommandConfigPresentMode = {
  mode: 'standard';
} | {
  mode: 'customSnapPointIndex';
  snapPointIndex: number;
} | {
  mode: 'customSnapPointKey';
  snapPointKey: string;
};

export type RNIAdaptiveModalCommandConfigPresent = 
  & RNIAdaptiveModalCommandConfigPresentBase
  & RNIAdaptiveModalCommandConfigPresentMode;
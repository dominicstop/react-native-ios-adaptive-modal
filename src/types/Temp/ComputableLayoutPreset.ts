import { ComputableLayout } from "react-native-ios-utilities";

export type ComputableLayoutPreset = 
  | 'automatic'
  | 'offscreenBottom'
  | 'offscreenTop'
  | 'offscreenLeft'
  | 'offscreenRight'
  | 'halfOffscreenBottom'
  | 'halfOffscreenTop'
  | 'halfOffscreenLeft'
  | 'halfOffscreenRight'
  | 'edgeBottom'
  | 'edgeTop'
  | 'edgeLeft'
  | 'edgeRight'
  | 'fitScreen'
  | 'fitScreenHorizontally'
  | 'fitScreenVertically'
  | 'center';

export type ComputableLayoutPresetConfig = {
  mode: 'preset';
  preset: ComputableLayoutPreset;
} | {
  mode: 'layoutConfig';
  value: ComputableLayout
};

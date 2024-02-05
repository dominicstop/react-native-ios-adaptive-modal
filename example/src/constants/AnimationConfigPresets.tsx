import { AnimationConfig } from "react-native-ios-utilities"


export const AnimationConfigCurvePresets: Array<AnimationConfig> = [{
  mode: 'presetCurve',
  curve: 'easeIn',
  duration: 1
}, {
  mode: 'presetCurve',
  curve: 'easeOut',
  duration: 1
}, {
  mode: 'presetCurve',
  curve: 'easeInOut',
  duration: 1
}, {
  mode: 'presetCurve',
  curve: 'linear',
  duration: 1
}];

export const AnimationConfigPresets: Array<AnimationConfig> = [
  ...AnimationConfigCurvePresets,
];
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

export const AnimationConfigSpringPresets: Array<AnimationConfig> = [{
  mode: 'presetSpring',
  duration: 1,
  dampingRatio: 1,  
}, {
  mode: 'presetSpring',
  duration: 1.25,
  dampingRatio: 0.75,  
}, {
  mode: 'presetSpring',
  duration: 1.5,
  dampingRatio: 0.5,  
}, {
  mode: 'presetSpring',
  duration: 1.75,
  dampingRatio: 0.25,  
}, {
  mode: 'presetSpring',
  duration: 2,
  dampingRatio: 0,  
}];
export const AnimationConfigPresets: Array<AnimationConfig> = [
  ...AnimationConfigCurvePresets,
  ...AnimationConfigSpringPresets,
];
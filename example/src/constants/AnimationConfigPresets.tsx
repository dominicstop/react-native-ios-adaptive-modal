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

export const AnimationConfigBezierCurvePresets: Array<AnimationConfig> = [
  // Linear
  {
    mode: 'bezierCurve',
    controlPoint1: {
      x: 0,
      y: 0,
    },
    controlPoint2: {
      x: 1,
      y: 1,
    },
  },

  // Ease-in
  {
    mode: 'bezierCurve',
    controlPoint1: {
      x: 0.2,
      y: 0,
    },
    controlPoint2: {
      x: 1,
      y: 0.5,
    },
  },

  // Ease-out
  {
    mode: 'bezierCurve',
    controlPoint1: {
      x: 0.0,
      y: 0.5,
    },
    controlPoint2: {
      x: 0.8,
      y: 1.0,
    },
  },

  // Ease-in-out
  {
    mode: 'bezierCurve',
    controlPoint1: {
      x: 0.4,
      y: 0,
    },
    controlPoint2: {
      x: 0.,
      y: 1.0,
    },
  },

  // Subtle ease-in:
  {
    mode: 'bezierCurve',
    controlPoint1: {
      x: 0.1,
      y: 0,
    },
    controlPoint2: {
      x: 0.9,
      y: 0.5,
    },
  },

  // Sharp ease-out:
  {
    mode: 'bezierCurve',
    controlPoint1: {
      x: 0.2,
      y: 1.0,
    },
    controlPoint2: {
      x: 0.8,
      y: 0,
    },
  },

  // Quick stop and bounce:
  {
    mode: 'bezierCurve',
    controlPoint1: {
      x: 0.2,
      y: 0.0,
    },
    controlPoint2: {
      x: 1.0,
      y: -0.2,
    },
  },

  // S-shaped curve
  {
    mode: 'bezierCurve',
    controlPoint1: {
      x: 0.2,
      y: 0.5,
    },
    controlPoint2: {
      x: 0.8,
      y: 0.5,
    },
  },
];

export const AnimationConfigSpringDampingPresets: Array<AnimationConfig> = [{
  mode: 'springDamping',
  duration: 1,
  dampingRatio: 0.5,
}];

export const AnimationConfigPresets: Array<AnimationConfig> = [
  ...AnimationConfigCurvePresets,
  ...AnimationConfigSpringPresets,
  ...AnimationConfigBezierCurvePresets,
  ...AnimationConfigSpringDampingPresets,
];
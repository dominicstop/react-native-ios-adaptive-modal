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
    duration: 1,
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
    duration: 1.5,
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
    duration: 1.5,
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
    duration: 2,
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
    duration: 2,
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
    duration: 2,
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
    duration: 1.5,
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
    duration: 2,
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

export const AnimationConfigSpringPhysicsPresets: Array<AnimationConfig> = [
  // Bouncy and fast
  {
    mode: 'springPhysics',
    duration: 1,
    mass: 1.0,
    stiffness: 100.0,
    damping: 0.25,
    initialVelocity: { dx: 0.0, dy: 0.0 },
  },

  // Smooth and controlled
  {
    mode: 'springPhysics',
    duration: 2,
    mass: 5.0,
    stiffness: 50.0,
    damping: 0.9,
    initialVelocity: { dx: 0.0, dy: 0.0 }
  },

  // Fast start and quick stop
  {
    mode: 'springPhysics',
    duration: 1,
    mass: 1.0,
    stiffness: 200.0,
    damping: 0.25,
    initialVelocity: { dx: 1.0, dy: 0.0 },
  },

  // Slow and damped animation
  {
    mode: 'springPhysics',
    duration: 2,
    mass: 10.0,
    stiffness: 20.0,
    damping: 1.0,
    initialVelocity: { dx: 0.0, dy: 0.0 },
  },

  {
    mode: 'springPhysics',
    duration: 1,
    mass: 5.0,
    stiffness: 50.0,
    damping: 0.95,
    initialVelocity: { dx: 1.0, dy: 0.0 }, 
  },
  
  {
    mode: 'springPhysics',
    duration: 1,
    mass: 0.25,
    stiffness: 30.0,
    damping: 0.9,
    initialVelocity: { dx: 0.0, dy: 0.0 },
  },
]

export const AnimationConfigPresets: Array<AnimationConfig> = [
  ...AnimationConfigCurvePresets,
  ...AnimationConfigSpringPresets,
  ...AnimationConfigBezierCurvePresets,
  ...AnimationConfigSpringDampingPresets,
  ...AnimationConfigSpringPhysicsPresets,
];
import { AdaptiveModalConfig } from "react-native-ios-adaptive-modal";
import { CGSize } from "react-native-ios-utilities";

const ScreenSizes: Record<string, CGSize> = {
  iPhone8: {
    width: 375, 
    height: 667
  },
};

export const AdaptiveModalConfigPresetDemo01: AdaptiveModalConfig = {
  snapPoints: [{
    // Snap Point 1
    mode: 'standard',
    layoutConfig: {
      horizontalAlignment: 'center',
      verticalAlignment: 'bottom',
      width: {
        mode: {
          mode: 'stretch',
        },
      },
      height: {
        mode: {
          mode: 'percent',
          percentValue: 0.3,
        },
      }
    },
    keyframeConfig: {
      modalShadowOffset: {
        width: 0,
        height: -2,
      },
      modalShadowOpacity: 0.2,
      modalShadowRadius: 7,
      modalCornerRadius: 25,
      modalMaskedCorners: ['topCorners'],
      modalBackgroundOpacity: 0.9,
      modalBackgroundVisualEffect: 'systemUltraThinMaterial',
      modalBackgroundVisualEffectIntensity: 1,
      backgroundOpacity: 0,
      backgroundVisualEffect: 'systemUltraThinMaterialDark',
      backgroundVisualEffectIntensity: 0
    },
  }, {
    // Snap Point 2
    mode: 'standard',
    layoutConfig: {
      horizontalAlignment: 'center',
      verticalAlignment: 'bottom',
      width: {
        mode: {
          mode: 'stretch'
        },
      },
      height: {
        mode: {
          mode: 'percent',
          percentValue: 0.5,
        },        
      },
      marginLeft: {
        mode: {
          mode: 'constant',
          value: 15,
        }
      },
      marginRight: {
        mode: {
          mode: 'constant',
          value: 15,
        }
      },
      marginBottom: {
        mode: {
          mode: 'safeAreaInsets',
          insetKey: 'bottom',
        },
        minValue: {
          mode: 'constant',
          value: 15
        }
      },
    },
    keyframeConfig: {
      secondaryGestureAxisDampingPercent: 1,
      modalShadowOffset: {
        width: 2, 
        height: 2
      },
      modalShadowOpacity: 0.2,
      modalShadowRadius: 15,
      modalCornerRadius: 10,
      modalMaskedCorners: ['allCorners'],
      modalBackgroundOpacity: 0.85,
      modalBackgroundVisualEffectIntensity: 0.6,
      backgroundOpacity: 0.1,
      backgroundVisualEffectIntensity: 0.075
    },
  }, {
    // Snap Point 3
    mode: 'standard',
    layoutConfig: {
      horizontalAlignment: 'center',
      verticalAlignment: 'center',
      width: {
        mode: {
          mode: 'percent',
          percentValue: 0.85,
        },
        maxValue: {
          mode: 'constant',
          value: ScreenSizes.iPhone8.width,
        }
      },
      height: {
        mode: {
          mode: 'percent',
          percentValue: 0.75,
        },
        maxValue: {
          mode: 'constant',
          value: ScreenSizes.iPhone8.height,
        }
      }
    },
    keyframeConfig: {
      secondaryGestureAxisDampingPercent: 0.8,
      modalShadowOffset: {
        width: 0, 
        height: -1
      },
      modalShadowOpacity: 0.4,
      modalShadowRadius: 10,
      modalCornerRadius: 25,
      modalMaskedCorners: ['allCorners'],
      modalBackgroundOpacity: 0.83,
      modalBackgroundVisualEffectIntensity: 1,
      backgroundVisualEffectIntensity: 1
    },
  }, {
    // Snap Point 4
    mode: 'standard',
    layoutConfig: {
      horizontalAlignment: 'center',
      verticalAlignment: 'bottom',
      width: {
        mode: {
          mode: 'stretch'
        },
      },
      height: {
        mode: {
          mode: 'stretch'
        },
      },
      marginTop: {
        mode: {
          mode: 'safeAreaInsets',
          insetKey: 'top'
        },
      },
    },
    keyframeConfig: {
      secondaryGestureAxisDampingPercent: 1,
      modalShadowOffset: {
        width: 0, 
        height: -1
      },
      modalShadowOpacity: 0.4,
      modalShadowRadius: 10,
      modalCornerRadius: 25,
      modalMaskedCorners: ['topCorners'],
      modalBackgroundOpacity: 0.83,
      modalBackgroundVisualEffectIntensity: 1,
      backgroundVisualEffectIntensity: 1
    },
  }],
  snapDirection: 'bottomToTop',
  overshootSnapPoint: {
    layoutPreset: {
      mode: 'preset',
      preset: 'fitScreen'
    },
  },
};

export const AdaptiveModalConfigPresetDemo02: AdaptiveModalConfig = {
  snapPoints: [
    // Snap point - 1
    {
      mode: 'standard',
      layoutConfig: {
        horizontalAlignment: 'center',
        verticalAlignment: 'bottom',
        width: {
          mode: {
            mode: 'percent',
            percentValue: 0.8
          }
        },
        height: {
          mode: {
            mode: 'percent',
            percentValue: 0.2
          }
        }
      },
      keyframeConfig: {
        modalTransform: {
          rotateX: {
            mode: 'degrees',
            value: 0,
          },
        },
        modalShadowOffset: {
          width: 0, 
          height: -2
        },
        modalShadowOpacity: 0.3,
        modalShadowRadius: 7,
        modalCornerRadius: 10,
        modalMaskedCorners: ['topCorners'],
        modalContentOpacity: 1,
        backgroundOpacity: 0,
        backgroundVisualEffect: 'regular',
        backgroundVisualEffectIntensity: 0   
      },
    }, 

    // Snap point - 2
    {
      mode: 'standard',
      layoutConfig: {
        horizontalAlignment: 'center',
        verticalAlignment: 'bottom',
        width: {
          mode: {
            mode: 'percent',
            percentValue: 0.8,
          },
        },
        height: {
          mode:  {
            mode: 'percent',
            percentValue: 0.4,
          },
        },
      },
      keyframeConfig: {
        backgroundTapInteraction: 'dismiss',
        modalShadowOffset: {
          width: 1, 
          height: 1
        },
        modalShadowOpacity: 0.4,
        modalShadowRadius: 7,
        modalCornerRadius: 15,
        modalMaskedCorners: ['topCorners'],
        backgroundOpacity: 0.1
      },
    },

    // Snap point - 3
    {
      mode: 'standard',
      layoutConfig: {
        horizontalAlignment: 'center',
        verticalAlignment: 'bottom',
        width: {
          mode: {
            mode: 'percent',
            percentValue: 0.9
          },
        },
        height: {
          mode: {
            mode: 'percent',
            percentValue: 0.7,
          },
        },
      },
      keyframeConfig: {
        backgroundTapInteraction: 'ignore',
        modalShadowOffset: {
          width: 2, 
          height: 2
        },
        modalShadowOpacity: 0.3,
        modalShadowRadius: 8,
        backgroundOpacity: 0.3,
        backgroundVisualEffect: 'regular',
        backgroundVisualEffectIntensity: 0.3
      },
    },
  ],
  snapDirection: 'bottomToTop',
  undershootSnapPoint: {
    layoutPreset: {
      mode: 'preset',
      preset: 'automatic'
    },
    keyframeConfig: {
      modalTransform: {
        rotateX: {
          mode: 'degrees',
          value: -25,
        },
        perspective: 1 / 500
      },
      modalContentOpacity: 0.5
    },
  },
  overshootSnapPoint: {
    layoutPreset: {
      mode: 'preset',
      preset: 'fitScreenVertically',
    },
  },
};

export const AdaptiveModalConfigPresetDemo03: AdaptiveModalConfig = {
  snapPoints: [
    // Snap Point - 1
    {
      mode: 'standard',
      layoutConfig: {
        horizontalAlignment: 'left',
        verticalAlignment: 'center',
        width: {
          mode: {
            mode: 'percent',
            percentValue: 0.5,
          },
        },
        height: {
          mode: {
            mode: 'percent',
            percentValue: 0.65,
          },
        },
        marginLeft: {
          mode: {
            mode: 'constant',
            value: 15,
          },
        },
      },
      keyframeConfig: {
        secondaryGestureAxisDampingPercent: 0.5,
        modalTransform: {
          scaleX: 1,
          scaleY: 1
        },
        modalShadowOffset: {
          width: 1, 
          height: 1
        },
        modalShadowOpacity: 0.3,
        modalShadowRadius: 8,
        modalCornerRadius: 10,
        modalContentOpacity: 1,
        modalBackgroundOpacity: 0.87,
        modalBackgroundVisualEffect: "regular",
        modalBackgroundVisualEffectIntensity: 1,
        modalDragHandleOffset: -14,
        modalDragHandleColor: "systemBackground",
        backgroundVisualEffect: "regular",
        backgroundVisualEffectIntensity: 0.04
      },
    },

    // Snap Point - 2
    {
      mode: 'standard',
      layoutConfig: {
        horizontalAlignment: 'center',
        verticalAlignment: 'center',
        width: {
          mode: {
            mode: 'stretch'
          },
        },
        height: {
          mode: {
            mode: 'percent',
            percentValue: 0.85,
          },
        },
        marginLeft: {
          mode: {
            mode: 'constant',
            value: 20,
          },
        },
        marginRight: {
          mode: {
            mode: 'constant',
            value: 20,
          },
        },
      },
      keyframeConfig: {
        secondaryGestureAxisDampingPercent: 1,
        modalShadowOffset: {
          width: 2, 
          height: 2
        },
        modalShadowOpacity: 0.2,
        modalShadowRadius: 15,
        modalCornerRadius: 15,
        modalBackgroundOpacity: 0.9,
        modalBackgroundVisualEffectIntensity: 0.5,
        modalDragHandleOffset: 6,
        modalDragHandleColor: 'systemGray',
        backgroundVisualEffectIntensity: 0.5
      },
    }
  ],
  snapDirection: 'leftToRight',
  undershootSnapPoint: {
    layoutPreset: {
      mode: 'preset',
      preset: 'offscreenLeft'
    },
    keyframeConfig: {
      modalTransform: {
        scaleX: 0.5,
        scaleY: 0.5
      },
      modalCornerRadius: 5,
      modalContentOpacity: 0.3,
      modalDragHandleOffset: -14,
      backgroundVisualEffectIntensity: 0
    },
  },
  overshootSnapPoint: {
    layoutPreset: {
      mode: 'preset',
      preset: 'offscreenRight'
    },
  },
};

export const AdaptiveModalConfigPresetDemo04: AdaptiveModalConfig = {
  snapPoints: [
    // Snap Point 1
    {
      mode: 'standard',
      layoutConfig: {
        horizontalAlignment: 'center',
        verticalAlignment: 'top',
        width: {
          mode: {
            mode: 'stretch'
          },
        },
        height: {
          mode: {
            mode: 'percent',
            percentValue: 0.2,
          },
        },
        marginLeft: {
          mode: {
            mode: 'constant',
            value: 10,
          },
        },
        marginRight: {
          mode: {
            mode: 'constant',
            value: 10,
          },
        },
        marginTop: {
          mode: {
            mode: 'multipleValues',
            values: [{
              mode: 'safeAreaInsets',
              insetKey: 'top',
            }, {
              mode: 'constant',
              value: 10,
            }],
          },
        },
      },
      keyframeConfig: {
        modalTransform: {
          translateX: 1,
          translateY: 1,
          scaleX: 1,
          scaleY: 1
        },
        modalShadowOpacity: 0.3,
        modalShadowRadius: 10,
        modalCornerRadius: 10
      },
    },

    // Snap Point 2
    {
      mode: 'standard',
      layoutConfig: {
        horizontalAlignment: 'center',
        verticalAlignment: 'center',
        width: {
          mode: {
            mode: 'stretch',
          },
        },
        height: {
          mode: {
            mode: 'percent',
            percentValue: 0.5,
          },
        },
        marginLeft: {
          mode: {
            mode: 'constant',
            value: 15,
          },
        },
        marginRight: {
          mode: {
            mode: 'constant',
            value: 15,
          },
        },
      },
      keyframeConfig: {
        modalShadowOffset: {
          width: 2, 
          height: 2
        },
        modalShadowOpacity: 0.2,
        modalShadowRadius: 5,
        modalCornerRadius: 15,
        backgroundOpacity: 0.25
      },
    },
  ],
  snapDirection: 'topToBottom',
  undershootSnapPoint: {
    layoutPreset: {
      mode: 'preset',
      preset: 'offscreenTop',
    },
    keyframeConfig: {
      modalTransform: {
        scaleX: 0.75,
        scaleY: 0.75
      },
    },
  },
  overshootSnapPoint: {
    layoutPreset: {
      mode: 'preset',
      preset: 'offscreenBottom'
    },
    keyframeConfig: {
      modalTransform: {
        scaleX: 0.9,
        scaleY: 0.9
      },
      modalOpacity: 0.8,
      backgroundOpacity: 0
    },
  },
};

export const AdaptiveModalConfigPresetDemo05: AdaptiveModalConfig = {
  snapPoints: [
    // Snap Point 1
    {
      mode: 'standard',
      layoutConfig: {
        horizontalAlignment: 'left',
        verticalAlignment: 'center',
        width: {
          mode: {
            mode: 'percent',
            percentValue: 0.7
          },
        },
        height: {
          mode: {
            mode: 'stretch',
          },
        },
      },
      keyframeConfig: {
        modalShadowOffset: {
          width: 1, 
          height: 0
        },
        modalShadowOpacity: 0.3,
        modalShadowRadius: 8,
        modalBackgroundOpacity: 0.87,
        modalBackgroundVisualEffect: 'regular',
        modalBackgroundVisualEffectIntensity: 1,
        backgroundVisualEffect: 'regular',
        backgroundVisualEffectIntensity: 0.04
      },
    },

    // Snap Point 2
    {
      mode: 'standard',
      layoutConfig: {
        horizontalAlignment: 'center',
        verticalAlignment: 'center',
        width: {
          mode: {
            mode: 'stretch',
          },
          offsetValue: {
            mode: 'constant',
            value: 40,
          },
          offsetOperation: 'subtract',
        },
        height: {
          mode: {
            mode: 'stretch',
          },
          offsetValue: {
            mode: 'multipleValues',
            values: [{
              mode: 'safeAreaInsets',
              insetKey: 'top',
            }, {
              mode: 'safeAreaInsets',
              insetKey: 'bottom',
            }, {
              mode: 'constant',
              value: 40,
            }],
          },
          offsetOperation: 'subtract',
        },
      },
      keyframeConfig: {
        modalShadowOffset: {
          width: 2, 
          height: 2
        },
        modalShadowOpacity: 0.2,
        modalShadowRadius: 15,
        modalCornerRadius: 15,
        modalBackgroundOpacity: 0.9,
        modalBackgroundVisualEffectIntensity: 0.5,
        backgroundVisualEffectIntensity: 0.5
      },
    },
  ],
  snapDirection: 'leftToRight',
  undershootSnapPoint: {
    layoutPreset: {
      mode: 'preset',
      preset: 'offscreenLeft'
    },
    keyframeConfig: {
      backgroundVisualEffectIntensity: 0,
    },
  },
  overshootSnapPoint: {
    layoutPreset: {
      mode: 'preset',
      preset: 'edgeRight',
    },
  },
};

export const AdaptiveModalConfigPresets: AdaptiveModalConfig[] = [
  // Index: 0 - demo01
  AdaptiveModalConfigPresetDemo01,

  // Index: 1 - demo02
  AdaptiveModalConfigPresetDemo02,

  // Index: 2 - demo03
  AdaptiveModalConfigPresetDemo03,

  // Index: 3 - demo04
  AdaptiveModalConfigPresetDemo04,

  // Index: 4 - demo05
  AdaptiveModalConfigPresetDemo05,
];

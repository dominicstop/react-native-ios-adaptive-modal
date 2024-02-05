import { ComponentProps, createElement } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { AdaptiveModalConfig, AdaptiveModalViewProps } from "react-native-ios-adaptive-modal";
import { CGSize } from "react-native-ios-utilities";
import { Ionicons } from "@expo/vector-icons";

const ScreenSizes: Record<string, CGSize> = {
  iPhone8: {
    width: 375,
    height: 667,
  },
};

export const PresetConfigSnapPointKeys = {
  lastSnapPoint: "lastSnapPoint",
  secondToLastSnapPoint: "secondToLastSnapPoint",
};

export const AdaptiveModalConfigPresetDemo01: AdaptiveModalConfig = {
  snapPoints: [
    {
      // Snap Point 1
      mode: "standard",
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "bottom",
        width: {
          mode: {
            mode: "stretch",
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.3,
          },
        },
      },
      keyframeConfig: {
        modalShadowOffset: {
          width: 0,
          height: -2,
        },
        modalShadowOpacity: 0.2,
        modalShadowRadius: 7,
        modalCornerRadius: 25,
        modalMaskedCorners: ["topCorners"],
        modalBackgroundOpacity: 0.9,
        modalBackgroundVisualEffect: "systemUltraThinMaterial",
        modalBackgroundVisualEffectIntensity: 1,
        backgroundOpacity: 0,
        backgroundVisualEffect: "systemUltraThinMaterialDark",
        backgroundVisualEffectIntensity: 0,
      },
    },
    {
      // Snap Point 2
      mode: "standard",
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "bottom",
        width: {
          mode: {
            mode: "stretch",
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.5,
          },
        },
        marginLeft: {
          mode: {
            mode: "constant",
            value: 15,
          },
        },
        marginRight: {
          mode: {
            mode: "constant",
            value: 15,
          },
        },
        marginBottom: {
          mode: {
            mode: "safeAreaInsets",
            insetKey: "bottom",
          },
          minValue: {
            mode: "constant",
            value: 15,
          },
        },
      },
      keyframeConfig: {
        secondaryGestureAxisDampingPercent: 1,
        modalShadowOffset: {
          width: 2,
          height: 2,
        },
        modalShadowOpacity: 0.2,
        modalShadowRadius: 15,
        modalCornerRadius: 10,
        modalMaskedCorners: ["allCorners"],
        modalBackgroundOpacity: 0.85,
        modalBackgroundVisualEffectIntensity: 0.6,
        backgroundOpacity: 0.1,
        backgroundVisualEffectIntensity: 0.075,
      },
    },
    {
      // Snap Point 3
      mode: "standard",
      key: PresetConfigSnapPointKeys.secondToLastSnapPoint,
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "center",
        width: {
          mode: {
            mode: "percent",
            percentValue: 0.85,
          },
          maxValue: {
            mode: "constant",
            value: ScreenSizes.iPhone8.width,
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.75,
          },
          maxValue: {
            mode: "constant",
            value: ScreenSizes.iPhone8.height,
          },
        },
      },
      keyframeConfig: {
        secondaryGestureAxisDampingPercent: 0.8,
        modalShadowOffset: {
          width: 0,
          height: -1,
        },
        modalShadowOpacity: 0.4,
        modalShadowRadius: 10,
        modalCornerRadius: 25,
        modalMaskedCorners: ["allCorners"],
        modalBackgroundOpacity: 0.83,
        modalBackgroundVisualEffectIntensity: 1,
        backgroundVisualEffectIntensity: 1,
      },
    },
    {
      // Snap Point 4
      mode: "standard",
      key: PresetConfigSnapPointKeys.lastSnapPoint,
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "bottom",
        width: {
          mode: {
            mode: "stretch",
          },
        },
        height: {
          mode: {
            mode: "stretch",
          },
        },
        marginTop: {
          mode: {
            mode: "safeAreaInsets",
            insetKey: "top",
          },
        },
      },
      keyframeConfig: {
        secondaryGestureAxisDampingPercent: 1,
        modalShadowOffset: {
          width: 0,
          height: -1,
        },
        modalShadowOpacity: 0.4,
        modalShadowRadius: 10,
        modalCornerRadius: 25,
        modalMaskedCorners: ["topCorners"],
        modalBackgroundOpacity: 0.83,
        modalBackgroundVisualEffectIntensity: 1,
        backgroundVisualEffectIntensity: 1,
      },
    },
  ],
  snapDirection: "bottomToTop",
  overshootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "fitScreen",
    },
  },
};

export const AdaptiveModalConfigPresetDemo02: AdaptiveModalConfig = {
  snapPoints: [
    // Snap point - 1
    {
      mode: "standard",
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "bottom",
        width: {
          mode: {
            mode: "percent",
            percentValue: 0.8,
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.2,
          },
        },
      },
      keyframeConfig: {
        modalTransform: {
          rotateX: {
            mode: "degrees",
            value: 0,
          },
        },
        modalShadowOffset: {
          width: 0,
          height: -2,
        },
        modalShadowOpacity: 0.3,
        modalShadowRadius: 7,
        modalCornerRadius: 10,
        modalMaskedCorners: ["topCorners"],
        modalContentOpacity: 1,
        backgroundOpacity: 0,
        backgroundVisualEffect: "regular",
        backgroundVisualEffectIntensity: 0,
      },
    },

    // Snap point - 2
    {
      mode: "standard",
      key: PresetConfigSnapPointKeys.secondToLastSnapPoint,
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "bottom",
        width: {
          mode: {
            mode: "percent",
            percentValue: 0.8,
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.4,
          },
        },
      },
      keyframeConfig: {
        backgroundTapInteraction: "dismiss",
        modalShadowOffset: {
          width: 1,
          height: 1,
        },
        modalShadowOpacity: 0.4,
        modalShadowRadius: 7,
        modalCornerRadius: 15,
        modalMaskedCorners: ["topCorners"],
        backgroundOpacity: 0.1,
      },
    },

    // Snap point - 3
    {
      mode: "standard",
      key: PresetConfigSnapPointKeys.lastSnapPoint,
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "bottom",
        width: {
          mode: {
            mode: "percent",
            percentValue: 0.9,
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.7,
          },
        },
      },
      keyframeConfig: {
        backgroundTapInteraction: "ignore",
        modalShadowOffset: {
          width: 2,
          height: 2,
        },
        modalShadowOpacity: 0.3,
        modalShadowRadius: 8,
        backgroundOpacity: 0.3,
        backgroundVisualEffect: "regular",
        backgroundVisualEffectIntensity: 0.3,
      },
    },
  ],
  snapDirection: "bottomToTop",
  undershootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "automatic",
    },
    keyframeConfig: {
      modalTransform: {
        rotateX: {
          mode: "degrees",
          value: -25,
        },
        perspective: 1 / 500,
      },
      modalContentOpacity: 0.5,
    },
  },
  overshootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "fitScreenVertically",
    },
  },
};

export const AdaptiveModalConfigPresetDemo03: AdaptiveModalConfig = {
  snapPoints: [
    // Snap Point - 1
    {
      mode: "standard",
      layoutConfig: {
        horizontalAlignment: "left",
        verticalAlignment: "center",
        width: {
          mode: {
            mode: "percent",
            percentValue: 0.5,
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.65,
          },
        },
        marginLeft: {
          mode: {
            mode: "constant",
            value: 15,
          },
        },
      },
      keyframeConfig: {
        secondaryGestureAxisDampingPercent: 0.5,
        modalTransform: {
          scaleX: 1,
          scaleY: 1,
        },
        modalShadowOffset: {
          width: 1,
          height: 1,
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
        backgroundVisualEffectIntensity: 0.04,
      },
    },

    // Snap Point - 2
    {
      mode: "standard",
      key: PresetConfigSnapPointKeys.lastSnapPoint,
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "center",
        width: {
          mode: {
            mode: "stretch",
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.85,
          },
        },
        marginLeft: {
          mode: {
            mode: "constant",
            value: 20,
          },
        },
        marginRight: {
          mode: {
            mode: "constant",
            value: 20,
          },
        },
      },
      keyframeConfig: {
        secondaryGestureAxisDampingPercent: 1,
        modalShadowOffset: {
          width: 2,
          height: 2,
        },
        modalShadowOpacity: 0.2,
        modalShadowRadius: 15,
        modalCornerRadius: 15,
        modalBackgroundOpacity: 0.9,
        modalBackgroundVisualEffectIntensity: 0.5,
        modalDragHandleOffset: 6,
        modalDragHandleColor: "systemGray",
        backgroundVisualEffectIntensity: 0.5,
      },
    },
  ],
  snapDirection: "leftToRight",
  undershootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "offscreenLeft",
    },
    keyframeConfig: {
      modalTransform: {
        scaleX: 0.5,
        scaleY: 0.5,
      },
      modalCornerRadius: 5,
      modalContentOpacity: 0.3,
      modalDragHandleOffset: -14,
      backgroundVisualEffectIntensity: 0,
    },
  },
  overshootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "offscreenRight",
    },
  },
};

export const AdaptiveModalConfigPresetDemo04: AdaptiveModalConfig = {
  snapPoints: [
    // Snap Point 1
    {
      mode: "standard",
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "top",
        width: {
          mode: {
            mode: "stretch",
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.2,
          },
        },
        marginLeft: {
          mode: {
            mode: "constant",
            value: 10,
          },
        },
        marginRight: {
          mode: {
            mode: "constant",
            value: 10,
          },
        },
        marginTop: {
          mode: {
            mode: "multipleValues",
            values: [
              {
                mode: "safeAreaInsets",
                insetKey: "top",
              },
              {
                mode: "constant",
                value: 10,
              },
            ],
          },
        },
      },
      keyframeConfig: {
        modalTransform: {
          translateX: 1,
          translateY: 1,
          scaleX: 1,
          scaleY: 1,
        },
        modalShadowOpacity: 0.3,
        modalShadowRadius: 10,
        modalCornerRadius: 10,
      },
    },

    // Snap Point 2
    {
      mode: "standard",
      key: PresetConfigSnapPointKeys.lastSnapPoint,
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "center",
        width: {
          mode: {
            mode: "stretch",
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.5,
          },
        },
        marginLeft: {
          mode: {
            mode: "constant",
            value: 15,
          },
        },
        marginRight: {
          mode: {
            mode: "constant",
            value: 15,
          },
        },
      },
      keyframeConfig: {
        modalShadowOffset: {
          width: 2,
          height: 2,
        },
        modalShadowOpacity: 0.2,
        modalShadowRadius: 5,
        modalCornerRadius: 15,
        backgroundOpacity: 0.25,
      },
    },
  ],
  snapDirection: "topToBottom",
  undershootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "offscreenTop",
    },
    keyframeConfig: {
      modalTransform: {
        scaleX: 0.75,
        scaleY: 0.75,
      },
    },
  },
  overshootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "offscreenBottom",
    },
    keyframeConfig: {
      modalTransform: {
        scaleX: 0.9,
        scaleY: 0.9,
      },
      modalOpacity: 0.8,
      backgroundOpacity: 0,
    },
  },
};

export const AdaptiveModalConfigPresetDemo05: AdaptiveModalConfig = {
  snapPoints: [
    // Snap Point 1
    {
      mode: "standard",
      layoutConfig: {
        horizontalAlignment: "left",
        verticalAlignment: "center",
        width: {
          mode: {
            mode: "percent",
            percentValue: 0.7,
          },
        },
        height: {
          mode: {
            mode: "stretch",
          },
        },
      },
      keyframeConfig: {
        modalShadowOffset: {
          width: 1,
          height: 0,
        },
        modalShadowOpacity: 0.3,
        modalShadowRadius: 8,
        modalBackgroundOpacity: 0.87,
        modalBackgroundVisualEffect: "regular",
        modalBackgroundVisualEffectIntensity: 1,
        backgroundVisualEffect: "regular",
        backgroundVisualEffectIntensity: 0.04,
      },
    },

    // Snap Point 2
    {
      mode: "standard",
      key: PresetConfigSnapPointKeys.lastSnapPoint,
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "center",
        width: {
          mode: {
            mode: "stretch",
          },
          offsetOperation: "subtract",
          offsetValue: {
            mode: "constant",
            value: 40,
          },
        },
        height: {
          mode: {
            mode: "stretch",
          },
          offsetOperation: "subtract",
          offsetValue: {
            mode: "multipleValues",
            values: [
              {
                mode: "safeAreaInsets",
                insetKey: "top",
              },
              {
                mode: "safeAreaInsets",
                insetKey: "bottom",
              },
              {
                mode: "constant",
                value: 40,
              },
            ],
          },
        },
      },
      keyframeConfig: {
        modalShadowOffset: {
          width: 2,
          height: 2,
        },
        modalShadowOpacity: 0.2,
        modalShadowRadius: 15,
        modalCornerRadius: 15,
        modalBackgroundOpacity: 0.9,
        modalBackgroundVisualEffectIntensity: 0.5,
        backgroundVisualEffectIntensity: 0.5,
      },
    },
  ],
  snapDirection: "leftToRight",
  undershootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "offscreenLeft",
    },
    keyframeConfig: {
      backgroundVisualEffectIntensity: 0,
    },
  },
  overshootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "edgeRight",
    },
  },
};

export const AdaptiveModalConfigPresetDemo06: AdaptiveModalConfig = {
  snapPoints: [
    // snap point - 1
    {
      mode: "standard",
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "bottom",
        width: {
          mode: {
            mode: "percent",
            percentValue: 0.95,
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.2,
          },
        },
        marginBottom: {
          mode: {
            mode: "safeAreaInsets",
            insetKey: "bottom",
          },
          minValue: {
            mode: "constant",
            value: 15,
          },
        },
      },
      keyframeConfig: {
        modalShadowOffset: {
          width: 0,
          height: -2,
        },
        modalShadowOpacity: 0.3,
        modalShadowRadius: 7,
        modalCornerRadius: 10,
        backgroundOpacity: 0,
        backgroundVisualEffect: "regular",
        backgroundVisualEffectIntensity: 0,
      },
    },

    // snap point - 2
    {
      mode: "standard",
      key: PresetConfigSnapPointKeys.secondToLastSnapPoint,
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "bottom",
        width: {
          mode: {
            mode: "percent",
            percentValue: 0.85,
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.5,
          },
        },
        marginBottom: {
          mode: {
            mode: "safeAreaInsets",
            insetKey: "bottom",
          },
          minValue: {
            mode: "constant",
            value: 15,
          },
        },
      },
      keyframeConfig: {
        modalShadowOffset: {
          width: 1,
          height: 1,
        },
        modalShadowOpacity: 0.4,
        modalShadowRadius: 7,
        modalCornerRadius: 15,
        backgroundOpacity: 0.1,
      },
    },

    // snap point - 3
    {
      mode: "standard",
      key: PresetConfigSnapPointKeys.lastSnapPoint,
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "bottom",
        width: {
          mode: {
            mode: "percent",
            percentValue: 0.87,
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.7,
          },
        },
        marginBottom: {
          mode: {
            mode: "safeAreaInsets",
            insetKey: "bottom",
          },
          minValue: {
            mode: "constant",
            value: 15,
          },
        },
      },
      keyframeConfig: {
        modalShadowOffset: {
          width: 2,
          height: 2,
        },
        modalShadowOpacity: 0.3,
        modalShadowRadius: 8,
        backgroundOpacity: 0.3,
        backgroundVisualEffectIntensity: 0.3,
      },
    },
  ],
  snapDirection: "bottomToTop",
  overshootSnapPoint: {
    layoutPreset: {
      mode: "layoutConfig",
      value: {
        horizontalAlignment: "center",
        verticalAlignment: "center",
        width: {
          mode: {
            mode: "percent",
            percentValue: 0.87,
          },
        },
        height: {
          mode: {
            mode: "stretch",
          },
        },
        marginTop: {
          mode: {
            mode: "safeAreaInsets",
            insetKey: "top",
          },
          minValue: {
            mode: "constant",
            value: 15,
          },
        },
        marginBottom: {
          mode: {
            mode: "safeAreaInsets",
            insetKey: "bottom",
          },
          minValue: {
            mode: "constant",
            value: 15,
          },
        },
      },
    },
    keyframeConfig: {
      modalShadowOffset: {
        width: 3,
        height: 3,
      },
      modalShadowOpacity: 0.35,
      modalShadowRadius: 15,
    },
  },
};

export const AdaptiveModalConfigPresetDemo07: AdaptiveModalConfig = {
  snapPoints: [
    // snap point - 1
    {
      mode: "standard",
      layoutConfig: {
        horizontalAlignment: "left",
        verticalAlignment: "center",
        width: {
          mode: {
            mode: "percent",
            percentValue: 0.7,
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.65,
          },
        },
        marginLeft: {
          mode: {
            mode: "constant",
            value: 15,
          },
        },
      },
      keyframeConfig: {
        secondaryGestureAxisDampingPercent: 0.8,
        modalTransform: {
          scaleX: 1,
          scaleY: 1,
        },
        modalShadowOffset: {
          width: 1,
          height: 1,
        },
        modalShadowOpacity: 0.3,
        modalShadowRadius: 10,
        modalCornerRadius: 15,
        modalBackgroundOpacity: 0.85,
        modalBackgroundVisualEffectIntensity: 0.9,
        backgroundColor: "white",
        backgroundOpacity: 0.15,
        backgroundVisualEffectIntensity: 0.05,
      },
    },

    // snap point - 2
    {
      mode: "standard",
      key: PresetConfigSnapPointKeys.lastSnapPoint,
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "center",
        width: {
          mode: {
            mode: "stretch",
          },
        },
        height: {
          mode: {
            mode: "stretch",
          },
        },
      },
      keyframeConfig: {
        secondaryGestureAxisDampingPercent: 1,
        modalShadowOffset: {
          width: 0,
          height: 0,
        },
        modalShadowOpacity: 0,
        modalShadowRadius: 0,
        modalBackgroundOpacity: 0,
        modalBackgroundVisualEffectOpacity: 0,
        modalBackgroundVisualEffectIntensity: 0,
        modalDragHandleOpacity: 0,
        backgroundColor: "white",
        backgroundOpacity: 0.75,
        backgroundVisualEffectIntensity: 1,
      },
    },
  ],
  snapDirection: "leftToRight",
  undershootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "offscreenLeft",
    },
    keyframeConfig: {
      modalTransform: {
        scaleX: 0.5,
        scaleY: 0.5,
      },
      modalCornerRadius: 10,
      modalBackgroundOpacity: 1,
      modalBackgroundVisualEffect: "regular",
      modalBackgroundVisualEffectIntensity: 0,
      backgroundVisualEffect: "regular",
      backgroundVisualEffectIntensity: 0,
    },
  },
  overshootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "offscreenRight",
    },
  },
};

// Custom Snap Point Test
export const AdaptiveModalConfigPresetDemo08: AdaptiveModalConfig = {
  snapPoints: [
    // Snap Point 1
    {
      mode: "standard",
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "bottom",
        width: {
          mode: {
            mode: "stretch",
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.3,
          },
        },
      },
      keyframeConfig: {
        modalShadowOffset: {
          width: 0,
          height: -2,
        },
        modalShadowOpacity: 0.2,
        modalShadowRadius: 7,
        modalCornerRadius: 0,
        modalMaskedCorners: ["layerMinXMinYCorner", "layerMaxXMinYCorner"],
        modalBackgroundOpacity: 0.9,
        modalBackgroundVisualEffect: "systemUltraThinMaterial",
        modalBackgroundVisualEffectIntensity: 1,
        backgroundVisualEffect: "regular",
        backgroundVisualEffectIntensity: 0,
      },
    },

    // Snap Point 2
    {
      mode: "standard",
      key: PresetConfigSnapPointKeys.lastSnapPoint,
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "bottom",
        width: {
          mode: {
            mode: "stretch",
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.75,
          },
        },
      },
      keyframeConfig: {
        modalShadowOffset: {
          width: 0,
          height: -2,
        },
        modalShadowOpacity: 0.2,
        modalShadowRadius: 7,
        modalCornerRadius: 15,
        modalMaskedCorners: ["layerMinXMinYCorner", "layerMaxXMinYCorner"],
        modalBackgroundOpacity: 0.85,
        modalBackgroundVisualEffectIntensity: 0.25,
        backgroundVisualEffectIntensity: 0.75,
      },
    },
  ],
  snapDirection: "bottomToTop",
  overshootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "fitScreen",
    },
  },
};

// Keyboard Test
export const AdaptiveModalConfigPresetDemo09: AdaptiveModalConfig = {
  snapPoints: [
    // Snap Point 1
    {
      mode: "standard",
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "bottom",
        width: {
          mode: {
            mode: "stretch",
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.3,
          },
        },
        marginLeft: {
          mode: {
            mode: "multipleValues",
            values: [
              {
                mode: "safeAreaInsets",
                insetKey: "left",
              },
              {
                mode: "constant",
                value: 15,
              },
            ],
          },
        },
        marginRight: {
          mode: {
            mode: "multipleValues",
            values: [
              {
                mode: "safeAreaInsets",
                insetKey: "right",
              },
              {
                mode: "constant",
                value: 15,
              },
            ],
          },
        },
        marginBottom: {
          mode: {
            mode: "multipleValues",
            values: [
              {
                mode: "safeAreaInsets",
                insetKey: "bottom",
              },
              {
                mode: "keyboardRelativeSize",
                sizeKey: "height",
              },
              // {
              //   mode: "constant",
              //   value: 15,
              // },
            ],
          },
        },
      },
      keyframeConfig: {
        modalShadowOffset: {
          width: 0,
          height: -2,
        },
        modalShadowOpacity: 0.2,
        modalShadowRadius: 7,
        modalCornerRadius: 12,
        modalMaskedCorners: ["allCorners"],
        modalBackgroundOpacity: 0.9,
        modalBackgroundVisualEffect: "systemUltraThinMaterial",
        modalBackgroundVisualEffectIntensity: 1,
        backgroundVisualEffect: "regular",
        backgroundVisualEffectIntensity: 0,
      },
    },
  ],
  snapDirection: "bottomToTop",
  overshootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "fitScreenVertically",
    },
  },
};

export const AdaptiveModalConfigPresetDemo10: AdaptiveModalConfig = {
  snapPoints: [
    // snap point - 1
    {
      mode: "standard",
      layoutConfig: {
        horizontalAlignment: "left",
        verticalAlignment: "center",
        width: {
          mode: {
            mode: "percent",
            percentValue: 0.5,
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.5,
          },
        },
      },
      keyframeConfig: {
        modalTransform: {
          scaleX: 1,
          scaleY: 1,
          rotateY: {
            mode: "degrees",
            value: 0,
          },
        },
        modalShadowOffset: {
          width: 1,
          height: 1,
        },
        modalShadowOpacity: 0.3,
        modalShadowRadius: 8,
        modalCornerRadius: 10,
        modalMaskedCorners: ["rightCorners"],
        modalContentOpacity: 1,
        modalBackgroundOpacity: 0.8,
        modalBackgroundVisualEffect: "regular",
        modalBackgroundVisualEffectIntensity: 1,
        modalDragHandleOffset: -14,
        modalDragHandleColor: "systemBackground",
        backgroundVisualEffect: "regular",
        backgroundVisualEffectIntensity: 0.04,
      },
    },

    // snap point - 2
    {
      mode: "standard",
      key: PresetConfigSnapPointKeys.secondToLastSnapPoint,
      layoutConfig: {
        horizontalAlignment: "left",
        verticalAlignment: "center",
        width: {
          mode: {
            mode: "percent",
            percentValue: 0.7,
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.85,
          },
        },
      },
      keyframeConfig: {
        modalShadowOffset: {
          width: 2,
          height: 2,
        },
        modalShadowOpacity: 0.2,
        modalShadowRadius: 12,
        modalCornerRadius: 15,
        modalBackgroundOpacity: 0.9,
        modalBackgroundVisualEffectIntensity: 0.6,
        modalDragHandleOffset: 6,
        modalDragHandleColor: "systemGray",
        backgroundVisualEffectIntensity: 0.4,
      },
    },

    // snap point - 3
    {
      mode: "standard",
      key: PresetConfigSnapPointKeys.lastSnapPoint,
      layoutConfig: {
        horizontalAlignment: "left",
        verticalAlignment: "center",
        width: {
          mode: {
            mode: "percent",
            percentValue: 0.95,
          },
        },
        height: {
          mode: {
            mode: "stretch",
          },
        },
      },
      keyframeConfig: {
        modalShadowOffset: {
          width: 2.5,
          height: 0,
        },
        modalShadowOpacity: 0.35,
        modalShadowRadius: 10,
        modalCornerRadius: 20,
        modalBackgroundOpacity: 0.87,
        modalBackgroundVisualEffectIntensity: 0.4,
        modalDragHandleOffset: 6,
        modalDragHandleColor: "systemGray",
        backgroundVisualEffectIntensity: 0.9,
      },
    },
  ],
  snapDirection: "leftToRight",
  undershootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "offscreenLeft",
    },
    keyframeConfig: {
      modalTransform: {
        scaleX: 0.5,
        scaleY: 0.5,
        rotateY: {
          mode: "degrees",
          value: -45,
        },
        perspective: 1 / 750,
      },
      modalCornerRadius: 5,
      modalContentOpacity: 0.25,
      modalBackgroundVisualEffectIntensity: 1,
      modalDragHandleOffset: -14,
      backgroundVisualEffectIntensity: 0,
    },
  },
  overshootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "fitScreenHorizontally",
    },
  },
};

// Index: 10 - Keyboard
export const AdaptiveModalConfigPresetDemo11: AdaptiveModalConfig = {
  snapPoints: [
    // Snap Point 1
    {
      mode: "standard",
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "bottom",
        width: {
          mode: {
            mode: "stretch",
          },
        },
        height: {
          mode: {
            mode: "multipleValues",
            values: [
              {
                mode: "percent",
                percentValue: 0.3,
              },
              {
                mode: "conditionalLayoutValue",
                condition: {
                  mode: "keyboardPresent",
                },
                trueValue: {
                  mode: "keyboardRelativeSize",
                  sizeKey: "height",
                },
                falseValue: {
                  mode: "safeAreaInsets",
                  insetKey: "bottom",
                },
              },
            ],
          },
        },
        paddingLeft: {
          mode: {
            mode: "multipleValues",
            values: [
              {
                mode: "safeAreaInsets",
                insetKey: "left",
              },
              {
                mode: "constant",
                value: 15,
              },
            ],
          },
        },
        paddingRight: {
          mode: {
            mode: "multipleValues",
            values: [
              {
                mode: "safeAreaInsets",
                insetKey: "right",
              },
              {
                mode: "constant",
                value: 15,
              },
            ],
          },
        },
        paddingBottom: {
          mode: {
            mode: "conditionalLayoutValue",
            condition: {
              mode: "keyboardPresent",
            },
            trueValue: {
              mode: "keyboardRelativeSize",
              sizeKey: "height",
            },
            falseValue: {
              mode: "safeAreaInsets",
              insetKey: "bottom",
            },
          },
        },
      },
      keyframeConfig: {
        modalShadowOffset: {
          width: 0,
          height: -2,
        },
        modalShadowOpacity: 0.25,
        modalShadowRadius: 7,
        modalCornerRadius: 12,
        modalMaskedCorners: ["topCorners"],
        modalBackgroundOpacity: 0.9,
        modalBackgroundVisualEffect: "systemUltraThinMaterial",
        modalBackgroundVisualEffectIntensity: 1,
        backgroundVisualEffect: "regular",
        backgroundVisualEffectIntensity: 0,
      },
    },
  ],
  snapDirection: "bottomToTop",
  overshootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "fitScreenVertically",
    },
  },
};

// Index: 11 - demo12
export const AdaptiveModalConfigPresetDemo12: AdaptiveModalConfig = {
  snapPoints: [
    // Snap Point 1
    {
      mode: "standard",
      layoutConfig: {
        horizontalAlignment: "right",
        verticalAlignment: "center",
        width: {
          mode: {
            mode: "percent",
            percentValue: 0.5,
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.5,
          },
        },
        marginRight: {
          mode: {
            mode: "multipleValues",
            values: [
              {
                mode: "safeAreaInsets",
                insetKey: "right",
              },
              {
                mode: "constant",
                value: 10,
              },
            ],
          },
        },
      },
      keyframeConfig: {
        secondaryGestureAxisDampingPercent: 0.25,
        modalCornerRadius: 15,
        modalShadowOffset: {
          width: 4,
          height: -2.5,
        },
        modalShadowOpacity: 0.4,
        modalShadowRadius: 8,
      },
    },

    // Snap Point 2
    {
      mode: "standard",
      key: PresetConfigSnapPointKeys.lastSnapPoint,
      layoutConfig: {
        horizontalAlignment: "left",
        verticalAlignment: "center",
        width: {
          mode: {
            mode: "percent",
            percentValue: 0.5,
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.5,
          },
        },
        marginLeft: {
          mode: {
            mode: "multipleValues",
            values: [
              {
                mode: "safeAreaInsets",
                insetKey: "left",
              },
              {
                mode: "constant",
                value: 10,
              },
            ],
          },
        },
      },
      keyframeConfig: {
        modalShadowOffset: {
          width: -4,
          height: -2.5,
        },
      },
    },
  ],

  snapDirection: "rightToLeft",
  undershootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "offscreenRight",
    },
  },
  overshootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "offscreenLeft",
    },
  },
  dragHandlePosition: "none",
};

// Index: 12 - demo13 - ScrollView
export const AdaptiveModalConfigPresetDemo13: AdaptiveModalConfig = {
  snapPoints: [
    // snap point - 1
    {
      mode: "standard",
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "bottom",
        width: {
          mode: {
            mode: "percent",
            percentValue: 0.9,
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.3,
          },
        },
      },
      keyframeConfig: {
        modalShadowOffset: {
          width: 0,
          height: -2,
        },
        modalShadowOpacity: 0.3,
        modalShadowRadius: 7,
        modalCornerRadius: 10,
        modalMaskedCorners: ["topCorners"],
        modalBackgroundOpacity: 0.9,
        modalBackgroundVisualEffect: "regular",
        modalBackgroundVisualEffectIntensity: 1,
        backgroundOpacity: 0,
        backgroundVisualEffect: "regular",
        backgroundVisualEffectIntensity: 0,
      },
    },

    // snap point - 2
    {
      mode: "standard",
      key: PresetConfigSnapPointKeys.lastSnapPoint,
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "bottom",
        width: {
          mode: {
            mode: "percent",
            percentValue: 0.9,
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.7,
          },
        },
      },
      keyframeConfig: {
        modalShadowOffset: {
          width: 2,
          height: 2,
        },
        modalShadowOpacity: 0.3,
        modalShadowRadius: 8,
        modalBackgroundOpacity: 0.8,
        modalBackgroundVisualEffectIntensity: 0.8,
        backgroundOpacity: 0.2,
        backgroundVisualEffectIntensity: 0.1,
      },
    },
  ],
  snapDirection: "bottomToTop",
  overshootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "fitScreenVertically",
    },
  },
};

// Index: 13 - demo14 - ScrollView
export const AdaptiveModalConfigPresetDemo14: AdaptiveModalConfig = {
  snapPoints: [
    // snap point - 1
    {
      mode: "standard",
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "bottom",
        width: {
          mode: {
            mode: "stretch",
          },
        },
        height: {
          mode: {
            mode: "stretch",
          },
        },
      },
      keyframeConfig: {
        modalContentOpacity: 1,
        backgroundOpacity: 0.2,
        backgroundVisualEffectIntensity: 1,
      },
    },
  ],
  snapDirection: "bottomToTop",
  undershootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "offscreenBottom",
    },
    keyframeConfig: {
      modalContentOpacity: 0,
      modalBackgroundOpacity: 0,
      backgroundColor: "white",
      backgroundOpacity: 0,
      backgroundVisualEffect: "regular",
      backgroundVisualEffectIntensity: 0,
    },
  },
  overshootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "halfOffscreenTop",
    },
  },
  dragHandlePosition: "none",
};

// Index: 14 - demo14 - ScrollView
export const AdaptiveModalConfigPresetDemo15: AdaptiveModalConfig = {
  snapPoints: [
    // snap point - 1
    {
      mode: "standard",
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "bottom",
        width: {
          mode: {
            mode: "percent",
            percentValue: 0.9,
          },
        },
        height: {
          mode: {
            mode: "percent",
            percentValue: 0.3,
          },
          minValue: {
            mode: "constant",
            value: 300,
          },
        },
        paddingTop: {
          mode: {
            mode: "constant",
            value: 0,
          },
        },
      },
      keyframeConfig: {
        secondaryGestureAxisDampingPercent: 0.5,
        modalTransform: {
          scaleX: 1,
          scaleY: 1,
        },
        modalShadowOffset: {
          width: 0,
          height: -2,
        },
        modalShadowOpacity: 0.3,
        modalShadowRadius: 7,
        modalCornerRadius: 15,
        modalMaskedCorners: ["allCorners"],
        modalContentOpacity: 1,
        modalBackgroundOpacity: 0.9,
        modalBackgroundVisualEffect: "regular",
        modalBackgroundVisualEffectIntensity: 1,
        modalDragHandleSize: {
          width: 50,
          height: 6.5,
        },
        modalDragHandleOffset: -16.5,
        modalDragHandleColor: "white",
        modalDragHandleOpacity: 0.8,
        backgroundOpacity: 0,
        backgroundVisualEffect: "regular",
        backgroundVisualEffectIntensity: 0,
      },
    },

    // snap point - 2
    {
      mode: "standard",
      key: PresetConfigSnapPointKeys.lastSnapPoint,
      layoutConfig: {
        horizontalAlignment: "center",
        verticalAlignment: "bottom",
        width: {
          mode: {
            mode: "stretch",
          },
        },
        height: {
          mode: {
            mode: "stretch",
          },
        },
        marginTop: {
          mode: {
            mode: "multipleValues",
            values: [
              {
                mode: "safeAreaInsets",
                insetKey: "top",
              },
            ],
          },
        },
        paddingTop: {
          mode: {
            mode: "constant",
            value: 6 + 8 + 6,
          },
        },
      },
      keyframeConfig: {
        secondaryGestureAxisDampingPercent: 1,
        modalShadowOffset: {
          width: 2,
          height: 2,
        },
        modalShadowOpacity: 0.3,
        modalShadowRadius: 7,
        modalCornerRadius: 10,
        modalMaskedCorners: ["topCorners"],
        modalBackgroundOpacity: 0.8,
        modalBackgroundVisualEffectIntensity: 0.8,
        modalDragHandleSize: {
          width: 40,
          height: 6,
        },
        modalDragHandleOffset: 8,
        modalDragHandleColor: "gray",
        modalDragHandleOpacity: 0.9,
        backgroundOpacity: 0.2,
        backgroundVisualEffectIntensity: 0.1,
      },
    },
  ],
  snapDirection: "bottomToTop",
  undershootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "offscreenBottom",
    },
    keyframeConfig: {
      modalTransform: {
        scaleX: 0.75,
        scaleY: 0.75,
      },
      modalCornerRadius: 15,
      modalMaskedCorners: ["allCorners"],
      modalContentOpacity: 0.25,
    },
  },
  overshootSnapPoint: {
    layoutPreset: {
      mode: "preset",
      preset: "fitScreenVertically",
    },
  },
  modalSwipeGestureEdgeHeight: 20,
};

type AdaptiveModalPropsOverride = Pick<AdaptiveModalViewProps,
  | 'shouldEnableOverShooting'
  | 'overrideShouldSnapToUnderShootSnapPoint'
  | 'overrideShouldSnapToOvershootSnapPoint'
  | 'shouldDismissModalOnSnapToUnderShootSnapPoint'
  | 'shouldDismissModalOnSnapToOverShootSnapPoint'
  | 'shouldDismissKeyboardOnGestureSwipe'
>;

const ADAPTIVE_MODAL_DEFAULT_PROPS: AdaptiveModalPropsOverride = {
  shouldEnableOverShooting: undefined,
  overrideShouldSnapToUnderShootSnapPoint: undefined,
  overrideShouldSnapToOvershootSnapPoint: undefined,
  shouldDismissModalOnSnapToUnderShootSnapPoint: undefined,
  shouldDismissModalOnSnapToOverShootSnapPoint: undefined,
  shouldDismissKeyboardOnGestureSwipe: undefined,
};


export const AdaptiveModalConfigPresetsWithMetadata: {
  modalConfig: AdaptiveModalConfig;
  shouldShowTextBox: boolean;
  adaptiveModalProps: AdaptiveModalPropsOverride;
  title: string;
  description: string;
  component?: React.ComponentType;
}[] = [
  // Index: 0 - demo01
  {
    modalConfig: AdaptiveModalConfigPresetDemo01,
    shouldShowTextBox: false,
    title: `The sheet you dreamt of`,
    description: `Snap points aren't the half of it...`,
    adaptiveModalProps: {
      ...ADAPTIVE_MODAL_DEFAULT_PROPS,
    },
  },

  // Index: 1 - demo02
  {
    modalConfig: AdaptiveModalConfigPresetDemo02,
    shouldShowTextBox: false,
    title: `Horizontal snap points too...`,
    description: `And automatic layout animations`,
    adaptiveModalProps: {
      ...ADAPTIVE_MODAL_DEFAULT_PROPS,
    },
  },

  // Index: 2 - demo03
  {
    modalConfig: AdaptiveModalConfigPresetDemo03,
    shouldShowTextBox: false,
    title: `Bottom sheet?`,
    description: `Drop the "bottom" – just "sheet"`,
    adaptiveModalProps: {
      ...ADAPTIVE_MODAL_DEFAULT_PROPS,
    },
  },

  // Index: 3 - demo04
  {
    modalConfig: AdaptiveModalConfigPresetDemo04,
    shouldShowTextBox: false,
    title: `And while we're at it...`,
    description: `Why not a "top sheet"?`,
    adaptiveModalProps: {
      ...ADAPTIVE_MODAL_DEFAULT_PROPS,
      overrideShouldSnapToOvershootSnapPoint: true,
      shouldDismissModalOnSnapToOverShootSnapPoint: true,
    },
  },

  // Index: 4 - demo05
  {
    modalConfig: AdaptiveModalConfigPresetDemo05,
    shouldShowTextBox: false,
    title: "Make it a drawer",
    description: `And drag it into a modal...`,
    adaptiveModalProps: {
      ...ADAPTIVE_MODAL_DEFAULT_PROPS,
    },
  },

  // Index: 5 - demo06
  {
    modalConfig: AdaptiveModalConfigPresetDemo06,
    shouldShowTextBox: false,
    title: "Try eating Family-style.",
    description: `CC @benjitaylor`,
    adaptiveModalProps: {
      ...ADAPTIVE_MODAL_DEFAULT_PROPS,
    },
  },

  // Index: 6 - demo07
  {
    modalConfig: AdaptiveModalConfigPresetDemo07,
    shouldShowTextBox: false,
    title: `Feeling full screen?`,
    description: `Even the status bar animates in sync.`,
    adaptiveModalProps: {
      ...ADAPTIVE_MODAL_DEFAULT_PROPS,
      shouldEnableOverShooting: false,
    },
  },

  // Index: 7 - demo08
  {
    modalConfig: AdaptiveModalConfigPresetDemo08,
    shouldShowTextBox: false,
    title: `Keep it simple`,
    description: `2 snap points with a blurry background`,
    adaptiveModalProps: {
      ...ADAPTIVE_MODAL_DEFAULT_PROPS,
    },
  },

  // Index: 8 - demo09
  {
    modalConfig: AdaptiveModalConfigPresetDemo09,
    shouldShowTextBox: true,
    title: `Keyboard support?`,
    description: `Easy.`,
    adaptiveModalProps: {
      ...ADAPTIVE_MODAL_DEFAULT_PROPS,
      shouldDismissKeyboardOnGestureSwipe: true,
    },
  },

  // Index: 9 - Demo10
  {
    modalConfig: AdaptiveModalConfigPresetDemo10,
    shouldShowTextBox: false,
    title: `So...which fields can you animate?`,
    description: "Yes.",
    adaptiveModalProps: {
      ...ADAPTIVE_MODAL_DEFAULT_PROPS,
    },
  },

  // Index: 10 - Demo11
  {
    modalConfig: AdaptiveModalConfigPresetDemo11,
    shouldShowTextBox: true,
    title: `What about a boring old keyboard?`,
    description: `No problem.`,
    adaptiveModalProps: {
      ...ADAPTIVE_MODAL_DEFAULT_PROPS,
    },
  },

  // Index: 11 - Demo12
  {
    modalConfig: AdaptiveModalConfigPresetDemo12,
    shouldShowTextBox: false,
    title: `Can your "bottom sheet" do this?`,
    description: `And power it from UIKit?`,
    adaptiveModalProps: {
      ...ADAPTIVE_MODAL_DEFAULT_PROPS,
    },
  },

  // Index: 12 - Demo13
  {
    modalConfig: AdaptiveModalConfigPresetDemo13,
    shouldShowTextBox: false,
    title: `Okay, okay, what about...scrolling?`,
    description: `Swipe away.`,
    component() {
      return (
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView>
            {new Array(40).fill("").map((_, i) => (
              <Image
                key={i}
                {...{
                  source: require("../assets/beatgig-256.png"),
                  style: {
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                    alignSelf: "center",
                  },
                }}
              />
            ))}
          </ScrollView>
        </View>
      );
    },
    adaptiveModalProps: {
      ...ADAPTIVE_MODAL_DEFAULT_PROPS,
      overrideShouldSnapToOvershootSnapPoint: true,
      shouldDismissModalOnSnapToOverShootSnapPoint: true,
    },
  },

  // Index: 13 - Demo14
  {
    modalConfig: AdaptiveModalConfigPresetDemo14,
    shouldShowTextBox: false,
    title: `What about the Spotify menu UI?`,
    description: `No problem.`,
    component() {
      const actions = {
        primary: {
          Shuffle: "shuffle-outline",
          Repeat: "repeat-outline",
          "Go to queue": "list",
        },
        secondary: {
          "Add to playlist": "add-circle-outline",
          "Hide song": "remove-circle-outline",
          Share: "share-outline",
          "Go to radio": "radio-outline",
          "View album": "albums-outline",
        },
      } satisfies Record<
        string,
        Record<string, ComponentProps<typeof Ionicons>["name"]>
      >;
      return (
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={{ paddingVertical: 70, gap: 32 }}>
              <View
                style={{
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <Image
                  source={{
                    uri: "https://m.media-amazon.com/images/I/51BLpSt6DqL._SX300_SY300_QL70_FMwebp_.jpg",
                  }}
                  style={{
                    width: 200,
                    height: 200,
                    objectFit: "cover",
                  }}
                />
                <View style={{ gap: 4 }}>
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Take a Shot For Me
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    Drake
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "75%",
                  alignSelf: "center",
                }}
              >
                {Object.entries(actions.primary).map(([label, iconName]) => (
                  <View
                    key={label}
                    style={{ alignItems: "center", gap: 8, flex: 1 }}
                  >
                    <Ionicons
                      {...{
                        name: iconName,
                        size: 30,
                        color: "white",
                      }}
                    />
                    <Text
                      style={{
                        color: "white",
                        fontSize: 12,
                      }}
                    >
                      {label}
                    </Text>
                  </View>
                ))}
              </View>

              <View
                style={{
                  gap: 32,
                }}
              >
                {Object.entries(actions.secondary).map(([label, iconName]) => (
                  <View
                    key={label}
                    style={{
                      alignItems: "center",
                      flexDirection: "row",
                      gap: 16,
                      paddingHorizontal: 20,
                    }}
                  >
                    <Ionicons
                      {...{
                        name: iconName,
                        size: 24,
                        color: "white",
                      }}
                    />
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        fontWeight: "500",
                      }}
                    >
                      {label}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      );
    },
    adaptiveModalProps: {
      ...ADAPTIVE_MODAL_DEFAULT_PROPS,
    },
  },

  // Index: 13 - Demo15
  {
    modalConfig: AdaptiveModalConfigPresetDemo15,
    shouldShowTextBox: false,
    title: "I go up, I go down...",
    description: `But also side to side.`,
    adaptiveModalProps: {
      ...ADAPTIVE_MODAL_DEFAULT_PROPS,
    },
  },
];

export type AdaptiveModalConfigPresetWithMetadataItem =
  (typeof AdaptiveModalConfigPresetsWithMetadata)[number];

export const AdaptiveModalConfigPresets: AdaptiveModalConfig[] =
  AdaptiveModalConfigPresetsWithMetadata.map((item) => item.modalConfig);

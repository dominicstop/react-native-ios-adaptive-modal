import { CGSize, Transform3D } from "react-native-ios-utilities";

import { AdaptiveModalBackgroundInteractionMode } from "./AdaptiveModalBackgroundInteractionMode";
import { AdaptiveModalLayoutValueEdgeInsets } from "./AdaptiveModalLayoutValueEdgeInsets";
import { CACornerMask } from "../Temp/CACornerMask";
import { UIBlurEffectStyle } from "../Temp/UIBlurEffectStyle";


export type AdaptiveModalKeyframeConfig = {
  allowSnapping?: boolean;

  backgroundTapInteraction?: AdaptiveModalBackgroundInteractionMode;
  secondaryGestureAxisDampingPercent?: number;
  
  modalScrollViewContentInsets?: AdaptiveModalLayoutValueEdgeInsets;
  modalScrollViewVerticalScrollIndicatorInsets?: AdaptiveModalLayoutValueEdgeInsets;
  modalScrollViewHorizontalScrollIndicatorInsets?: AdaptiveModalLayoutValueEdgeInsets;

  modalTransform?: Transform3D;
  
  modalBorderWidth?: number;
  modalBorderColor?: string;
  
  modalShadowColor?: string;
  modalShadowOffset?: CGSize;
  modalShadowOpacity?: number;
  modalShadowRadius?: number;
  
  modalCornerRadius?: number;
  modalMaskedCorners?: CACornerMask;
  
  modalOpacity?: number;
  modalContentOpacity?: number;
  modalBackgroundColor?: string;
  modalBackgroundOpacity?: number;
  
  modalBackgroundVisualEffect?: UIBlurEffectStyle;
  modalBackgroundVisualEffectOpacity?: number;
  modalBackgroundVisualEffectIntensity?: number;
  
  modalDragHandleSize?: CGSize;
  modalDragHandleOffset?: number;
  modalDragHandleColor?: string;
  modalDragHandleOpacity?: number;
  modalDragHandleCornerRadius?: number;
  
  backgroundColor?: string;
  backgroundOpacity?: number;
  
  backgroundVisualEffect?: UIBlurEffectStyle;
  backgroundVisualEffectOpacity?: number;
  backgroundVisualEffectIntensity?: number;
};
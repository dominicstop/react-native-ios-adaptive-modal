//
//  AdaptiveModalKeyframeConfig+InitializableFromDictionary.swift
//  ReactNativeIosAdaptiveModal
//
//  Created by Dominic Go on 1/2/24.
//

import UIKit
import DGSwiftUtilities
import ComputableLayout
import AdaptiveModal


extension AdaptiveModalKeyframeConfig: InitializableFromDictionary {
  
  public init(fromDict dict: Dictionary<String, Any>) throws {
    let allowSnapping = try? dict.getValueFromDictionary(
      forKey: "allowSnapping",
      type: Bool.self
    );

    let backgroundTapInteraction = try? dict.getEnumFromDictionary(
      forKey: "backgroundTapInteraction",
      type: BackgroundInteractionMode.self
    );

    let secondaryGestureAxisDampingPercent = try? dict.getValueFromDictionary(
      forKey: "secondaryGestureAxisDampingPercent",
      type: CGFloat.self
    );

    let modalScrollViewContentInsets = try? dict.getValueFromDictionary(
      forKey: "modalScrollViewContentInsets",
      type: LayoutValueEdgeInsets.self
    );

    let modalScrollViewVerticalScrollIndicatorInsets = try? dict.getValueFromDictionary(
      forKey: "modalScrollViewVerticalScrollIndicatorInsets",
      type: LayoutValueEdgeInsets.self
    );

    let modalScrollViewHorizontalScrollIndicatorInsets = try? dict.getValueFromDictionary(
      forKey: "modalScrollViewHorizontalScrollIndicatorInsets",
      type: LayoutValueEdgeInsets.self
    );

    let modalTransform = try? dict.getValueFromDictionary(
      forKey: "modalTransform",
      type: Transform3D.self
    );

    let modalBorderWidth = try? dict.getValueFromDictionary(
      forKey: "modalBorderWidth",
      type: CGFloat.self
    );

    let modalBorderColor = try? dict.getColorFromDictionary(
      forKey: "modalBorderColor"
    );

    let modalShadowColor = try? dict.getColorFromDictionary(
      forKey: "modalShadowColor"
    );

    let modalShadowOffset = try? dict.getValueFromDictionary(
      forKey: "modalShadowOffset",
      type: CGSize.self
    );

    let modalShadowOpacity = try? dict.getValueFromDictionary(
      forKey: "modalShadowOpacity",
      type: CGFloat.self
    );

    let modalShadowRadius = try? dict.getValueFromDictionary(
      forKey: "modalShadowRadius",
      type: CGFloat.self
    );

    let modalCornerRadius = try? dict.getValueFromDictionary(
      forKey: "modalCornerRadius",
      type: CGFloat.self
    );

    let modalMaskedCorners = try? dict.getValueFromDictionary(
      forKey: "modalMaskedCorners",
      type: CACornerMask.self
    );

    let modalOpacity = try? dict.getValueFromDictionary(
      forKey: "modalOpacity",
      type: CGFloat.self
    );

    let modalContentOpacity = try? dict.getValueFromDictionary(
      forKey: "modalContentOpacity",
      type: CGFloat.self
    );

    let modalBackgroundColor = try? dict.getColorFromDictionary(
      forKey: "modalBackgroundColor"
    );

    let modalBackgroundOpacity = try? dict.getValueFromDictionary(
      forKey: "modalBackgroundOpacity",
      type: CGFloat.self
    );

    let modalBackgroundVisualEffect: UIVisualEffect? = {
      let blurEffectStyle = try? dict.getEnumFromDictionary(
        forKey: "modalBackgroundVisualEffect",
        type: UIBlurEffect.Style.self
      );
      
      guard let blurEffectStyle = blurEffectStyle else { return nil };
      return UIBlurEffect(style: blurEffectStyle);
    }();

    let modalBackgroundVisualEffectOpacity = try? dict.getValueFromDictionary(
      forKey: "modalBackgroundVisualEffectOpacity",
      type: CGFloat.self
    );

    let modalBackgroundVisualEffectIntensity = try? dict.getValueFromDictionary(
      forKey: "modalBackgroundVisualEffectIntensity",
      type: CGFloat.self
    );

    let modalDragHandleSize = try? dict.getValueFromDictionary(
      forKey: "modalDragHandleSize",
      type: CGSize.self
    );

    let modalDragHandleOffset = try? dict.getValueFromDictionary(
      forKey: "modalDragHandleOffset",
      type: CGFloat.self
    );
    
    
    let modalDragHandleColor = try? dict.getColorFromDictionary(
      forKey: "modalDragHandleColor"
    );
    
    print(
      "modalDragHandleColor:",  dict["modalDragHandleColor"],
      "\n - modalDragHandleColor:", modalDragHandleColor
    );


    let modalDragHandleOpacity = try? dict.getValueFromDictionary(
      forKey: "modalDragHandleOpacity",
      type: CGFloat.self
    );

    let modalDragHandleCornerRadius = try? dict.getValueFromDictionary(
      forKey: "modalDragHandleCornerRadius",
      type: CGFloat.self
    );

    let backgroundColor = try? dict.getColorFromDictionary(
      forKey: "backgroundColor"
    );

    let backgroundOpacity = try? dict.getValueFromDictionary(
      forKey: "backgroundOpacity",
      type: CGFloat.self
    );

    let backgroundVisualEffect: UIVisualEffect? = {
      let blurEffectStyle = try? dict.getEnumFromDictionary(
        forKey: "backgroundVisualEffect",
        type: UIBlurEffect.Style.self
      );
      
      guard let blurEffectStyle = blurEffectStyle else { return nil };
      return UIBlurEffect(style: blurEffectStyle);
    }();

    let backgroundVisualEffectOpacity = try? dict.getValueFromDictionary(
      forKey: "backgroundVisualEffectOpacity",
      type: CGFloat.self
    );

    let backgroundVisualEffectIntensity = try? dict.getValueFromDictionary(
      forKey: "backgroundVisualEffectIntensity",
      type: CGFloat.self
    );

    self.init(
      allowSnapping: allowSnapping,
      backgroundTapInteraction: backgroundTapInteraction,
      secondaryGestureAxisDampingPercent: secondaryGestureAxisDampingPercent,
      modalScrollViewContentInsets: modalScrollViewContentInsets,
      modalScrollViewVerticalScrollIndicatorInsets: modalScrollViewVerticalScrollIndicatorInsets,
      modalScrollViewHorizontalScrollIndicatorInsets: modalScrollViewHorizontalScrollIndicatorInsets,
      modalTransform: modalTransform,
      modalBorderWidth: modalBorderWidth,
      modalBorderColor: modalBorderColor,
      modalShadowColor: modalShadowColor,
      modalShadowOffset: modalShadowOffset,
      modalShadowOpacity: modalShadowOpacity,
      modalShadowRadius: modalShadowRadius,
      modalCornerRadius: modalCornerRadius,
      modalMaskedCorners: modalMaskedCorners,
      modalOpacity: modalOpacity,
      modalContentOpacity: modalContentOpacity,
      modalBackgroundColor: modalBackgroundColor,
      modalBackgroundOpacity: modalBackgroundOpacity,
      modalBackgroundVisualEffect: modalBackgroundVisualEffect,
      modalBackgroundVisualEffectOpacity: modalBackgroundVisualEffectOpacity,
      modalBackgroundVisualEffectIntensity: modalBackgroundVisualEffectIntensity,
      modalDragHandleSize: modalDragHandleSize,
      modalDragHandleOffset: modalDragHandleOffset,
      modalDragHandleColor: modalDragHandleColor,
      modalDragHandleOpacity: modalDragHandleOpacity,
      modalDragHandleCornerRadius: modalDragHandleCornerRadius,
      backgroundColor: backgroundColor,
      backgroundOpacity: backgroundOpacity,
      backgroundVisualEffect: backgroundVisualEffect,
      backgroundVisualEffectOpacity: backgroundVisualEffectOpacity,
      backgroundVisualEffectIntensity: backgroundVisualEffectIntensity
    );
  };
};

import { ComputableLayoutValue, UIEdgeInsets } from "react-native-ios-utilities";

// Maps to `AdaptiveModalKeyframeConfig.LayoutValueEdgeInsets`
export type AdaptiveModalLayoutValueEdgeInsets = {
  mode: 'edgeInsets';
  value: UIEdgeInsets;
} | {
  mode: 'layoutValue';
  top: ComputableLayoutValue;
  left: ComputableLayoutValue;
  bottom: ComputableLayoutValue;
  right: ComputableLayoutValue;
};
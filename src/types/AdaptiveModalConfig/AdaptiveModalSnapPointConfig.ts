import { ComputableLayout } from "react-native-ios-utilities";
import { AdaptiveModalKeyframeConfig } from "./AdaptiveModalKeyframeConfig";


export type AdaptiveModalSnapPointConfig = ({
  mode: 'standard';
  layoutConfig: ComputableLayout;
} | {
  mode: 'inBetween';
  layoutConfig?: ComputableLayout;
}) & {
  key?: string;
  keyframeConfig?: AdaptiveModalKeyframeConfig; 
};

export type AdaptiveModalSnapPointConfigMode =
  AdaptiveModalSnapPointConfig['mode'];
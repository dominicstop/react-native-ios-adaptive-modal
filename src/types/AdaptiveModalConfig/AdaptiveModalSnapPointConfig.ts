import { ComputableLayout } from "react-native-ios-utilities";
import { AdaptiveModalKeyframeConfig } from "./AdaptiveModalKeyframeConfig";

export type AdaptiveModalSnapPointConfigMode = 
 | 'standard'
 | 'inBetween';

export type AdaptiveModalSnapPointConfig = {
  mode: AdaptiveModalSnapPointConfigMode;
  // TODO: WIP
  // key: SnapPointKey;

  layoutConfig: ComputableLayout;
  keyframeConfig?: AdaptiveModalKeyframeConfig; 
};
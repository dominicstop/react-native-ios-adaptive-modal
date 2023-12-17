import { ComputableLayout } from "../ComputableLayout/ComputableLayout";

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
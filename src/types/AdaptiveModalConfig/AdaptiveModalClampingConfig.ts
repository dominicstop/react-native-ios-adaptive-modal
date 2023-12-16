import { AdaptiveModalClampingKeys } from "./AdaptiveModalClampingKeys";


export type AdaptiveModalClampingConfigPreset =
  | 'defaultHorizontal'
  | 'defaultVertical';

export type AdaptiveModalClampingConfig = {
  clampingKeysLeft: AdaptiveModalClampingKeys[];
  clampingKeysRight: AdaptiveModalClampingKeys[];
} | {
  clampingKeys: AdaptiveModalClampingKeys[];
} | {
  clampingPreset: AdaptiveModalClampingConfigPreset;
};

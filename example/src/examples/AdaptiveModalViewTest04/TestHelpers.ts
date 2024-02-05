import { RNIAdaptiveModalCommandConfigPresent } from "react-native-ios-adaptive-modal/native_components/RNIAdaptiveModalView";
import { AdaptiveModalConfigPresetWithMetadataItem } from "../../constants/AdaptiveModalConfigPresets";

import * as AdaptiveModalConfigHelpers from '../../functions/AdaptiveModalConfigHelpers';

export function createAdaptiveModalPresentCommandConfig(
  configPreset: AdaptiveModalConfigPresetWithMetadataItem
): Array<RNIAdaptiveModalCommandConfigPresent> {
  const commandConfigItems: Array<RNIAdaptiveModalCommandConfigPresent> = [{
    mode: 'standard',
  }];

  const snapPointCount = 
    AdaptiveModalConfigHelpers.getSnapPointCount(configPreset.modalConfig);

  const lastIndex = snapPointCount - 1;

  // range: 1...lastIndex
  // E.g. for lastIndex of 3, items are: [2, 3]
  if(lastIndex > 1) {
    let index = 2;
     while(index <= lastIndex){
      commandConfigItems.push({
        mode: 'customSnapPointIndex',
        snapPointIndex: index,
      });

      index++;
     };
  };

  const snapPointKeys = 
    AdaptiveModalConfigHelpers.getSnapPointKeys(configPreset.modalConfig);

  for(const snapPointKey of snapPointKeys){
    commandConfigItems.push({
      mode: 'customSnapPointKey',
      snapPointKey: snapPointKey
    });
  };

  return commandConfigItems;
};
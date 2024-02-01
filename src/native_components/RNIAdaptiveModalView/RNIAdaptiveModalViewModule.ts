import { requireNativeModule } from 'expo-modules-core';
import type { NotifyOnComponentWillUnmount } from 'react-native-ios-utilities';

import type { RNIAdaptiveModalCommandConfigPresent } from './RNIAdaptiveModalCommandPresentTypes';
import type { RNIAdaptiveModalCommandConfigDismiss } from './RNIAdaptiveModalCommandConfigDismiss';
import type { RNIAdaptiveModalCommandConfigSnapTo } from './RNIAdaptiveModalCommandSnapToTypes';
import type { RNIAdaptiveModalCommandConfigSnapToOverride } from './RNIAdaptiveModalCommandSnapToOverrideTypes';
import type { RNIAdaptiveModalCommandConfigSnapToCommon } from './RNIAdaptiveModalCommandSnapToCommonTypes';


interface RNIAdaptiveModalViewModule  {
  notifyOnComponentWillUnmount: NotifyOnComponentWillUnmount;

  notifyDidLayoutSubviews: (
    reactTag: number
  ) => Promise<void>;

  clearSnapPointOverride: (
    reactTag: number
  ) => Promise<void>;

  presentModal: (
    reactTag: number,
    commandParams: RNIAdaptiveModalCommandConfigPresent
  ) => Promise<void>;

  dismissModal: (
    reactTag: number,
    commandParams: RNIAdaptiveModalCommandConfigDismiss
  ) => Promise<void>;

  snapTo: (
    reactTag: number,
    commandParams: RNIAdaptiveModalCommandConfigSnapTo
  ) => Promise<void>;

  snapToOverride: (
    reactTag: number,
    commandParams: RNIAdaptiveModalCommandConfigSnapToOverride
  ) => Promise<void>;

  snapToClosestSnapPoint: (
    reactTag: number,
    commandParams: RNIAdaptiveModalCommandConfigSnapToCommon
  ) => Promise<void>;

  snapToPrevSnapPointIndex: (
    reactTag: number,
    commandParams: RNIAdaptiveModalCommandConfigSnapToCommon
  ) => Promise<void>;

  snapToCurrentSnapPointIndex: (
    reactTag: number,
    commandParams: RNIAdaptiveModalCommandConfigSnapToCommon
  ) => Promise<void>;

  snapToNextSnapPointIndex: (
    reactTag: number,
    commandParams: RNIAdaptiveModalCommandConfigSnapToCommon
  ) => Promise<void>;

  // TBA
  // refreshCurrentModalConfig
  // refreshSnapPoints
  // getDeltaOfSnapPoints
};

export const RNIAdaptiveModalViewModule: RNIAdaptiveModalViewModule = 
  requireNativeModule('RNIAdaptiveModalView');
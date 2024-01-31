import { requireNativeModule } from 'expo-modules-core';
import type { NotifyOnComponentWillUnmount } from 'react-native-ios-utilities';

import type { RNIAdaptiveModalCommandConfigPresent } from './RNIAdaptiveModalCommandPresentTypes';
import type { RNIAdaptiveModalCommandConfigDismiss } from './RNIAdaptiveModalCommandConfigDismiss';


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

};

export const RNIAdaptiveModalViewModule: RNIAdaptiveModalViewModule = 
  requireNativeModule('RNIAdaptiveModalView');
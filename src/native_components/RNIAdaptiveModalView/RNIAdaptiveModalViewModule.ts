import { requireNativeModule } from 'expo-modules-core';
import type { NotifyOnComponentWillUnmount } from 'react-native-ios-utilities';


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
};

export const RNIAdaptiveModalViewModule: RNIAdaptiveModalViewModule = 
  requireNativeModule('RNIAdaptiveModalView');
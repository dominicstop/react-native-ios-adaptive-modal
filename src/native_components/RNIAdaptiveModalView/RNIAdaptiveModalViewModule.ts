import { requireNativeModule } from 'expo-modules-core';
import type { NotifyOnComponentWillUnmount } from 'react-native-ios-utilities';


interface RNIAdaptiveModalViewModule  {
  notifyOnComponentWillUnmount: NotifyOnComponentWillUnmount;
  
  presentModal: (
    reactTag: number
  ) => Promise<void>;
};

export const RNIAdaptiveModalViewModule: RNIAdaptiveModalViewModule = 
  requireNativeModule('RNIAdaptiveModalView');
import { ViewProps } from 'react-native';
import type { RNICleanupMode } from 'react-native-ios-utilities';

export type RNIAdaptiveModalNativeViewBaseProps = {

  // Internal
  // --------

  internalCleanupMode: RNICleanupMode;

  // Value Props
  // -----------

  // WIP - TBA

  // Events - Lifecycle
  // ------------------

  // WIP - TBA
};

export type RNIAdaptiveModalNativeViewProps = 
  RNIAdaptiveModalNativeViewBaseProps & ViewProps;
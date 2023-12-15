import type { ViewProps } from 'react-native';
import type { RNICleanupMode } from 'react-native-ios-utilities';

import type { OnModalContentDetachedEvent, OnModalDidHideEvent } from './RNIAdaptiveModalViewEvents';

export type RNIAdaptiveModalNativeViewBaseProps = {

  // Internal
  // --------

  internalCleanupMode: RNICleanupMode;

  // Value Props
  // -----------

  // WIP - TBA

  // Events - Lifecycle
  // ------------------

  onModalContentDetached: OnModalContentDetachedEvent;
  onModalDidHide: OnModalDidHideEvent;
};

export type RNIAdaptiveModalNativeViewProps = 
  RNIAdaptiveModalNativeViewBaseProps & ViewProps;
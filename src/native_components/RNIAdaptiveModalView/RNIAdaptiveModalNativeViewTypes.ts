import type { ViewProps } from 'react-native';
import type { RNICleanupMode } from 'react-native-ios-utilities';

import type { OnModalContentInitializedEvent, OnModalDidHideEvent } from './RNIAdaptiveModalViewEvents';
import { AdaptiveModalConfig } from '../../types/AdaptiveModalConfig';

export type RNIAdaptiveModalNativeViewBaseProps = {

  // Internal
  // --------

  internalCleanupMode: RNICleanupMode;
  modalConfig: AdaptiveModalConfig | undefined;


  // Value Props
  // -----------

  // WIP - TBA

  // Events - Lifecycle
  // ------------------

  onModalContentInitialized: OnModalContentInitializedEvent;
  onModalDidHide: OnModalDidHideEvent;
};

export type RNIAdaptiveModalNativeViewProps = 
  RNIAdaptiveModalNativeViewBaseProps & ViewProps;
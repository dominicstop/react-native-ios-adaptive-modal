import type { ViewProps } from 'react-native';
import type { RNICleanupMode } from 'react-native-ios-utilities';

import type { OnModalContentInitializedEvent, OnModalDidHideEvent } from './RNIAdaptiveModalViewEvents';
import { AdaptiveModalConfig } from '../../types/AdaptiveModalConfig';
import { RNIModalContentAnchorMode } from './RNIModalContentAnchorMode';

export type RNIAdaptiveModalNativeViewBaseProps = {

  // Internal
  // --------

  internalCleanupMode: RNICleanupMode;

  // Value Props
  // -----------

  modalConfig: AdaptiveModalConfig | undefined;
  modalContentAnchorMode: RNIModalContentAnchorMode | undefined;

  // Events - Lifecycle
  // ------------------

  onModalContentInitialized: OnModalContentInitializedEvent;
  onModalDidHide: OnModalDidHideEvent;
};

export type RNIAdaptiveModalNativeViewProps = 
  RNIAdaptiveModalNativeViewBaseProps & ViewProps;
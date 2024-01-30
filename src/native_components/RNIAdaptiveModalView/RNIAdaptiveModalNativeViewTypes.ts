import type { ViewProps } from 'react-native';
import type { RNICleanupMode } from 'react-native-ios-utilities';

import type { OnBackgroundTapGestureEvent, OnCurrentModalConfigDidChangeEvent, OnModalContentInitializedEvent, OnModalDidHideEvent, OnModalDidShowEvent, OnModalDidSnapEvent, OnModalDismissCancelledEvent, OnModalPresentCancelledEvent, OnModalStateWillChangeEvent, OnModalWillHideEvent, OnModalWillShowEvent, OnModalWillSnapEvent } from './RNIAdaptiveModalViewEvents';
import type { AdaptiveModalConfig } from '../../types/AdaptiveModalConfig';
import type { RNIModalContentAnchorMode } from './RNIModalContentAnchorMode';
import type { AdaptiveModalAnimationMode } from '../../types/AdaptiveModalAnimationMode';


export type RNIAdaptiveModalNativeViewBaseProps = {

  // Internal
  // --------

  internalCleanupMode: RNICleanupMode;

  // Value Props
  // -----------
  modalConfig: AdaptiveModalConfig | undefined;
  modalContentAnchorMode: RNIModalContentAnchorMode | undefined;
  modalAnimationMode: AdaptiveModalAnimationMode | undefined;
  shouldEnableContinuousLayoutResizingDuringAnimation: boolean;

  // Events - Lifecycle
  // ------------------

  onModalContentInitialized: OnModalContentInitializedEvent;
  
  onModalWillSnap: OnModalWillSnapEvent;
  onModalDidSnap: OnModalDidSnapEvent;
  onModalWillShow: OnModalWillShowEvent;
  onModalDidShow: OnModalDidShowEvent;
  onModalWillHide: OnModalWillHideEvent;
  onModalDidHide: OnModalDidHideEvent;
  onModalPresentCancelled: OnModalPresentCancelledEvent;
  onModalDismissCancelled: OnModalDismissCancelledEvent;
  onCurrentModalConfigDidChange: OnCurrentModalConfigDidChangeEvent;
  onBackgroundTapGesture: OnBackgroundTapGestureEvent;
  onModalStateWillChange: OnModalStateWillChangeEvent;
};

export type RNIAdaptiveModalNativeViewProps = 
  RNIAdaptiveModalNativeViewBaseProps & ViewProps;
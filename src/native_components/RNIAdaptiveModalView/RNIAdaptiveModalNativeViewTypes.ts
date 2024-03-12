import type { ViewProps } from 'react-native';
import type { RNIViewCleanupModeProp } from 'react-native-ios-utilities';

import type { OnBackgroundTapGestureEvent, OnCurrentModalConfigDidChangeEvent, OnModalContentInitializedEvent, OnModalDidHideEvent, OnModalDidShowEvent, OnModalDidSnapEvent, OnModalDismissCancelledEvent, OnModalPresentCancelledEvent, OnModalStateWillChangeEvent, OnModalWillHideEvent, OnModalWillShowEvent, OnModalWillSnapEvent } from './RNIAdaptiveModalViewEvents';
import type { AdaptiveModalConfig } from '../../types/AdaptiveModalConfig';
import type { RNIModalContentAnchorMode } from './RNIModalContentAnchorMode';
import type { AdaptiveModalAnimationMode } from '../../types/AdaptiveModal';


export type RNIAdaptiveModalNativeViewBaseProps = {

  // Value Props
  // -----------
  
  modalConfig: AdaptiveModalConfig | undefined;
  modalContentAnchorMode: RNIModalContentAnchorMode | undefined;
  modalAnimationMode: AdaptiveModalAnimationMode | undefined;

  shouldEnableContinuousLayoutResizingDuringAnimation: boolean;
  shouldEnableSnapping: boolean;
  shouldEnableOverShooting: boolean;
  shouldDismissKeyboardOnGestureSwipe: boolean;
  shouldLockAxisToModalDirection: boolean;
  overrideShouldSnapToUnderShootSnapPoint: boolean | undefined;
  overrideShouldSnapToOvershootSnapPoint: boolean | undefined;
  shouldDismissModalOnSnapToUnderShootSnapPoint: boolean;
  shouldDismissModalOnSnapToOverShootSnapPoint: boolean;
  isSwipeGestureEnabled: boolean;
  isModalContentSwipeGestureEnabled: boolean;
  allowModalToDragWhenAtMinScrollViewOffset: boolean;
  allowModalToDragWhenAtMaxScrollViewOffset: boolean;
  isModalDragHandleGestureEnabled: boolean;

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
  & RNIViewCleanupModeProp
  & RNIAdaptiveModalNativeViewBaseProps 
  & ViewProps;
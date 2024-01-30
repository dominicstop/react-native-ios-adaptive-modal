import { ViewProps } from 'react-native';
import { RNIAdaptiveModalNativeViewBaseProps } from './RNIAdaptiveModalNativeViewTypes';


export type RNIAdaptiveModalViewBaseProps = Pick<RNIAdaptiveModalNativeViewBaseProps,
  // Props
  | 'internalCleanupMode'
  | 'modalConfig'
  | 'modalContentAnchorMode'
  | 'modalAnimationMode'
  | 'shouldEnableContinuousLayoutResizingDuringAnimation'
  | 'shouldEnableSnapping'
  | 'shouldEnableOverShooting'
  | 'shouldDismissKeyboardOnGestureSwipe'
  | 'shouldLockAxisToModalDirection'
  | 'overrideShouldSnapToUnderShootSnapPoint'
  | 'overrideShouldSnapToOvershootSnapPoint'
  | 'shouldDismissModalOnSnapToUnderShootSnapPoint'
  | 'shouldDismissModalOnSnapToOverShootSnapPoint'
  | 'isSwipeGestureEnabled'
  | 'isModalContentSwipeGestureEnabled'
  | 'allowModalToDragWhenAtMinScrollViewOffset'
  | 'allowModalToDragWhenAtMaxScrollViewOffset'
  | 'isModalDragHandleGestureEnabled'
  // Events
  | 'onModalContentInitialized'
  | 'onModalWillSnap'
  | 'onModalDidSnap'
  | 'onModalWillShow'
  | 'onModalDidShow'
  | 'onModalWillHide'
  | 'onModalDidHide'
  | 'onModalPresentCancelled'
  | 'onModalDismissCancelled'
  | 'onCurrentModalConfigDidChange'
  | 'onBackgroundTapGesture'
  | 'onModalStateWillChange'
>;

export type RNIAdaptiveModalViewProps = 
  RNIAdaptiveModalViewBaseProps & ViewProps;
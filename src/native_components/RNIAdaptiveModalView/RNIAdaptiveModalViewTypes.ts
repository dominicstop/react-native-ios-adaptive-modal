import { ViewProps } from 'react-native';
import { RNIViewCleanupModeProp } from 'react-native-ios-utilities';
import { RNIAdaptiveModalNativeViewProps } from './RNIAdaptiveModalNativeViewTypes';


export type RNIAdaptiveModalViewInheritedProps = Pick<RNIAdaptiveModalNativeViewProps,
  // Props
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
  | 'internalViewCleanupMode'
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
  & RNIViewCleanupModeProp
  & RNIAdaptiveModalViewInheritedProps 
  & ViewProps;
import { ViewProps } from "react-native";
import { RNIAdaptiveModalViewBaseProps } from "../../native_components/RNIAdaptiveModalView";

export type AdaptiveModalViewBaseProps = Partial<Pick<RNIAdaptiveModalViewBaseProps,
  // A - Optional Props from `RNIAdaptiveModalBaseProps`
  | 'internalCleanupMode'
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
  
> & Pick<RNIAdaptiveModalViewBaseProps, 
  // B - Required Props from `RNIAdaptiveModalBaseProps`
  | 'modalConfig'
  | 'modalContentAnchorMode'
> & {
}>; 

export type AdaptiveModalViewProps = 
  AdaptiveModalViewBaseProps & ViewProps;

export type AdaptiveModalViewState = {
  shouldMountModalContent: boolean;
};
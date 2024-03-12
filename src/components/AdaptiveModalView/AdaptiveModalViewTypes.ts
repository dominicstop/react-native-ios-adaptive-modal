import { ViewProps } from "react-native";
import { RNIAdaptiveModalViewProps } from "../../native_components/RNIAdaptiveModalView";


export type AdaptiveModalViewInheritedRequiredProps = Pick<RNIAdaptiveModalViewProps, 
  | 'modalConfig'
  | 'modalContentAnchorMode'
>;

export type AdaptiveModalViewInheritedOptionalProps = Partial<Pick<RNIAdaptiveModalViewProps,
  | 'internalViewCleanupMode'
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
>>;

export type AdaptiveModalViewProps = 
  & AdaptiveModalViewInheritedOptionalProps
  & AdaptiveModalViewInheritedRequiredProps 
  & ViewProps;

export type AdaptiveModalViewState = {
  shouldMountModalContent: boolean;
};
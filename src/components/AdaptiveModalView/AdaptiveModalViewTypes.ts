import { ViewProps } from "react-native";
import { RNIAdaptiveModalViewBaseProps } from "../../native_components/RNIAdaptiveModalView";

export type AdaptiveModalViewBaseProps = Partial<Pick<RNIAdaptiveModalViewBaseProps,
  // A - Optional Props from `RNIAdaptiveModalBaseProps`
  | 'internalCleanupMode'
  | 'modalAnimationMode'
  | 'shouldEnableContinuousLayoutResizingDuringAnimation'
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
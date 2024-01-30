import { ViewProps } from 'react-native';
import { RNIAdaptiveModalNativeViewBaseProps } from './RNIAdaptiveModalNativeViewTypes';


export type RNIAdaptiveModalViewBaseProps = Pick<RNIAdaptiveModalNativeViewBaseProps,
  // Props
  | 'internalCleanupMode'
  | 'modalConfig'
  | 'modalContentAnchorMode'
  | 'modalAnimationMode'
  | 'shouldEnableContinuousLayoutResizingDuringAnimation'
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
>;

export type RNIAdaptiveModalViewProps = 
  RNIAdaptiveModalViewBaseProps & ViewProps;
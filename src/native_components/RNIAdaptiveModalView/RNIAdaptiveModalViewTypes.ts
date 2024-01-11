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
  | 'onModalDidHide'
>;

export type RNIAdaptiveModalViewProps = 
  RNIAdaptiveModalViewBaseProps & ViewProps;
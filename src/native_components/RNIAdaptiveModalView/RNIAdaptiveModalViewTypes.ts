import { ViewProps } from 'react-native';
import { RNIAdaptiveModalNativeViewBaseProps } from './RNIAdaptiveModalNativeViewTypes';


export type RNIAdaptiveModalViewBaseProps = Pick<RNIAdaptiveModalNativeViewBaseProps,
  | 'internalCleanupMode'
  | 'modalConfig'
  | 'modalContentAnchorMode'
  | 'modalAnimationMode'
  | 'onModalContentInitialized'
  | 'onModalDidHide'
>;

export type RNIAdaptiveModalViewProps = 
  RNIAdaptiveModalViewBaseProps & ViewProps;
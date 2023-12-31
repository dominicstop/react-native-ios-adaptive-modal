import { ViewProps } from 'react-native';
import { RNIAdaptiveModalNativeViewBaseProps } from './RNIAdaptiveModalNativeViewTypes';


export type RNIAdaptiveModalViewBaseProps = Pick<RNIAdaptiveModalNativeViewBaseProps,
  | 'internalCleanupMode'
  | 'modalConfig'
  | 'modalContentAnchorMode'
  | 'onModalContentInitialized'
  | 'onModalDidHide'
>;

export type RNIAdaptiveModalViewProps = 
  RNIAdaptiveModalViewBaseProps & ViewProps;
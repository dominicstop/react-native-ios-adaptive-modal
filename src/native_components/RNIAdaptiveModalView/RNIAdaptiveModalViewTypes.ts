import { ViewProps } from 'react-native';
import { RNIAdaptiveModalNativeViewBaseProps } from './RNIAdaptiveModalNativeViewTypes';


export type RNIAdaptiveModalViewBaseProps = Pick<RNIAdaptiveModalNativeViewBaseProps,
  | 'internalCleanupMode'
  | 'onModalContentDetached'
  | 'onModalDidHide'
>;

export type RNIAdaptiveModalViewProps = 
  RNIAdaptiveModalViewBaseProps & ViewProps;
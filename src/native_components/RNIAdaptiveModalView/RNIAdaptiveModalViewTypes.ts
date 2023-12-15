import { ViewProps } from 'react-native';
import { RNIAdaptiveModalNativeViewBaseProps } from './RNIAdaptiveModalNativeViewTypes';


export type RNIAdaptiveModalBaseProps = Pick<RNIAdaptiveModalNativeViewBaseProps,
  | 'internalCleanupMode'
  | 'onModalContentDetached'
  | 'onModalDidHide'
>;

export type RNIAdaptiveModalProps = 
  RNIAdaptiveModalBaseProps & ViewProps;
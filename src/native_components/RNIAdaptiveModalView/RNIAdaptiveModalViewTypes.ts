import { ViewProps } from 'react-native';
import { RNIAdaptiveModalNativeViewBaseProps } from './RNIAdaptiveModalNativeViewTypes';


export type RNIAdaptiveModalBaseProps = Pick<RNIAdaptiveModalNativeViewBaseProps,
  | 'internalCleanupMode'
  | 'onModalContentDetached'
>;

export type RNIAdaptiveModalProps = 
  RNIAdaptiveModalBaseProps & ViewProps;
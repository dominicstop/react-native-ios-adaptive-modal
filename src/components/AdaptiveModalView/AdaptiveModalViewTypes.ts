import { ViewProps } from "react-native";
import { RNIAdaptiveModalViewBaseProps } from "../../native_components/RNIAdaptiveModalView";

export type AdaptiveModalViewBaseProps = Partial<Pick<RNIAdaptiveModalViewBaseProps,
  // A - Optional Props from `RNIAdaptiveModalBaseProps`
  | 'internalCleanupMode'
> & Pick<RNIAdaptiveModalViewBaseProps, 
  | 'modalConfig'
  | 'modalContentAnchorMode'
> & {
}>; 

export type AdaptiveModalViewProps = 
  AdaptiveModalViewBaseProps & ViewProps;

export type AdaptiveModalViewState = {
  shouldMountModalContent: boolean;
};
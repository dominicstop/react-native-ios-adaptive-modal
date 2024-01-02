import { ViewProps } from "react-native";
import { RNIAdaptiveModalViewBaseProps } from "../../native_components/RNIAdaptiveModalView";

export type AdaptiveModalViewBaseProps = Partial<Pick<RNIAdaptiveModalViewBaseProps,
  | 'internalCleanupMode'
> & {
}>;

export type AdaptiveModalViewProps = 
  AdaptiveModalViewBaseProps & ViewProps;

export type AdaptiveModalViewState = {
  shouldMountModalContent: boolean;
};
import type { TSEventEmitter } from "@dominicstop/ts-event-emitter";
import type { KeyMapType } from "react-native-ios-utilities";

import { OnModalContentInitializedEventObject } from "../../native_components/RNIAdaptiveModalView";

export type AdaptiveModalEventEmitter = 
  TSEventEmitter<AdaptiveModalEvents, AdaptiveModalEventEmitterMap>;

export type AdaptiveModalEvents =
 | 'onModalContentInitialized';

export type AdaptiveModalEventEmitterMap = KeyMapType<AdaptiveModalEvents, {
  onModalContentInitialized: OnModalContentInitializedEventObject['nativeEvent'];
}>
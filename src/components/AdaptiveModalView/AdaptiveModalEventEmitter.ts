import type { TSEventEmitter } from "@dominicstop/ts-event-emitter";
import type { KeyMapType } from "react-native-ios-utilities";

import { OnModalContentDetachedEventObject } from "../../native_components/RNIAdaptiveModalView";

export type AdaptiveModalEventEmitter = 
  TSEventEmitter<AdaptiveModalEvents, AdaptiveModalEventEmitterMap>;

export type AdaptiveModalEvents =
 | 'onModalContentDetached';

export type AdaptiveModalEventEmitterMap = KeyMapType<AdaptiveModalEvents, {
  onModalContentDetached: OnModalContentDetachedEventObject['nativeEvent'];
}>
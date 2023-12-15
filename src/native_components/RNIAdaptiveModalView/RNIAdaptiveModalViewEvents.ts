import type { NativeSyntheticEvent } from 'react-native';

// Event Object Types
// ------------------

export type OnModalContentDetachedEventObject = NativeSyntheticEvent<{}>;
export type OnModalDidHideEventObject = NativeSyntheticEvent<{}>;

// Event Handler Types
// -------------------

export type OnModalContentDetachedEvent = (
  event: OnModalContentDetachedEventObject
) => void;

export type OnModalDidHideEvent = (
  event: OnModalDidHideEventObject
) => void;
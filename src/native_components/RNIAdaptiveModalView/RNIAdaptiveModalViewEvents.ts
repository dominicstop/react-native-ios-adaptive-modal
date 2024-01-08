import type { NativeSyntheticEvent } from 'react-native';

// Event Object Types
// ------------------

export type OnModalContentInitializedEventObject = NativeSyntheticEvent<{}>;
export type OnModalDidHideEventObject = NativeSyntheticEvent<{}>;

// Event Handler Types
// -------------------

export type OnModalContentInitializedEvent = (
  event: OnModalContentInitializedEventObject
) => void;

export type OnModalDidHideEvent = (
  event: OnModalDidHideEventObject
) => void;
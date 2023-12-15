import type { NativeSyntheticEvent } from 'react-native';

// Event Object Types
// ------------------

export type OnModalContentDetachedEventObject = NativeSyntheticEvent<{
}>;

// Event Handler Types
// -------------------

export type OnModalContentDetachedEvent = (
  event: OnModalContentDetachedEventObject
) => void;

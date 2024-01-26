import type { NativeSyntheticEvent } from 'react-native';

export type AdaptiveModalInterpolationPointEventObject = {
  index: number;
  key?: string;
};

// Event Object Types
// ------------------

export type OnModalContentInitializedEventObject = NativeSyntheticEvent<{
}>;

export type OnModalWillSnapEventObject = NativeSyntheticEvent<{
  prevInterpolationPoint?: AdaptiveModalInterpolationPointEventObject;
  nextInterpolationPoint: AdaptiveModalInterpolationPointEventObject;
}>;

export type OnModalDidSnapEventObject = NativeSyntheticEvent<{
  currentInterpolationPoint: AdaptiveModalInterpolationPointEventObject;
  prevInterpolationPoint?: AdaptiveModalInterpolationPointEventObject;
}>;

export type OnModalWillShowEventObject = NativeSyntheticEvent<{
}>;

export type OnModalDidShowEventObject = NativeSyntheticEvent<{
}>;

export type OnModalWillHideEventObject = NativeSyntheticEvent<{
}>;

export type OnModalDidHideEventObject = NativeSyntheticEvent<{
}>;

export type OnModalPresentCancelledEventObject = NativeSyntheticEvent<{
}>;

export type OnModalDismissCancelledEventObject = NativeSyntheticEvent<{
}>;

export type OnCurrentModalConfigDidChangeEventObject = NativeSyntheticEvent<{
}>;

// Event Handler Types
// -------------------

export type OnModalContentInitializedEvent = (
  event: OnModalContentInitializedEventObject
) => void;

export type OnModalWillSnapEvent = (
  event: OnModalWillSnapEventObject
) => void;

export type OnModalDidSnapEvent = (
  event: OnModalDidSnapEventObject
) => void;

export type OnModalWillShowEvent = (
  event: OnModalWillShowEventObject
) => void;

export type OnModalDidShowEvent = (
  event: OnModalDidShowEventObject
) => void;

export type OnModalWillHideEvent = (
  event: OnModalWillHideEventObject
) => void;

export type OnModalDidHideEvent = (
  event: OnModalDidHideEventObject
) => void;

export type OnModalPresentCancelledEvent = (
  event: OnModalPresentCancelledEventObject
) => void;

export type OnModalDismissCancelledEvent = (
  event: OnModalDismissCancelledEventObject
) => void;

export type OnCurrentModalConfigDidChangeEvent = (
  event: OnCurrentModalConfigDidChangeEventObject
) => void;
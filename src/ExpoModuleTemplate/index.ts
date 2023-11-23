import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ReactNativeIosAdaptiveModal.web.ts
// and on native platforms to ReactNativeIosAdaptiveModal.ts
import ReactNativeIosAdaptiveModalModule from './ReactNativeIosAdaptiveModalModule';
import ReactNativeIosAdaptiveModalView from './ReactNativeIosAdaptiveModalView';
import { ChangeEventPayload, ReactNativeIosAdaptiveModalViewProps } from './ReactNativeIosAdaptiveModal.types';

// Get the native constant value.
export const PI = ReactNativeIosAdaptiveModalModule.PI;

export function hello(): string {
  return ReactNativeIosAdaptiveModalModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactNativeIosAdaptiveModalModule.setValueAsync(value);
}

const emitter = new EventEmitter(ReactNativeIosAdaptiveModalModule ?? NativeModulesProxy.ReactNativeIosAdaptiveModal);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ReactNativeIosAdaptiveModalView, ReactNativeIosAdaptiveModalViewProps, ChangeEventPayload };

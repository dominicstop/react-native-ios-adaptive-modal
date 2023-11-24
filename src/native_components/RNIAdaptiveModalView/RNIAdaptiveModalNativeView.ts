import { requireNativeViewManager } from 'expo-modules-core';
import type { RNIAdaptiveModalNativeViewProps } from './RNIAdaptiveModalNativeViewTypes';

export const RNIAdaptiveModalNativeView: React.ComponentType<RNIAdaptiveModalNativeViewProps> =
  requireNativeViewManager('RNIAdaptiveModalView');

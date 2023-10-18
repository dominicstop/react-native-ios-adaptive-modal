import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ReactNativeIosAdaptiveModalViewProps } from './ReactNativeIosAdaptiveModal.types';

const NativeView: React.ComponentType<ReactNativeIosAdaptiveModalViewProps> =
  requireNativeViewManager('ReactNativeIosAdaptiveModal');

export default function ReactNativeIosAdaptiveModalView(props: ReactNativeIosAdaptiveModalViewProps) {
  return <NativeView {...props} />;
}

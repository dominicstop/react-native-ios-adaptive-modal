import * as React from 'react';

import { ReactNativeIosAdaptiveModalViewProps } from './ReactNativeIosAdaptiveModal.types';

export default function ReactNativeIosAdaptiveModalView(props: ReactNativeIosAdaptiveModalViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

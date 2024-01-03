/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import { useNavigation } from '@react-navigation/native';

import type { ExampleItemProps } from './SharedExampleTypes';

import { ExampleItemCard } from '../components/ExampleItemCard';
import { CardButton } from '../components/Card/CardButton';
import { SHARED_ENV } from '../constants/SharedEnv';


export function DebugControls(props: ExampleItemProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigation = SHARED_ENV.enableReactNavigation && useNavigation();

  return (
    <ExampleItemCard
      style={props.style}
      index={props.index}
      title={'Debug Controls'}
      subtitle={'For testing and stuff'}
    >
      <CardButton
        title={'Push: Home'}
        subtitle={'Navigate to "Home" screen...'}
        onPress={() => {
          // @ts-ignore
          navigation.push('Home');
        }}
      />
      <CardButton
        title={'Push: Test 01'}
        subtitle={'Navigate to "Test" screen...'}
        onPress={() => {
          // @ts-ignore
          navigation.push('Test');
        }}
      />
    </ExampleItemCard>
  );
};
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { CGSize } from 'react-native-ios-utilities';
import { AdaptiveModalConfig, AdaptiveModalView } from 'react-native-ios-adaptive-modal';

import type { ExampleItemProps } from './SharedExampleTypes';
import { ExampleItemCard } from '../components/ExampleItemCard';
import { CardButton } from '../components/Card';
import { AdaptiveModalConfigPresets } from '../constants/AdaptiveModalConfigPresets';


export function AdaptiveModalViewTest01(props: ExampleItemProps) {
  const [modalConfigPresetCounter, setModalConfigPresetCounter] = React.useState(0);

  const modalConfigPresetIndex = 
    modalConfigPresetCounter % AdaptiveModalConfigPresets.length;
  
  const currentModalConfigPreset = 
    AdaptiveModalConfigPresets[modalConfigPresetIndex];

  const modalRef = React.createRef<AdaptiveModalView>();
  
  return (
    <ExampleItemCard
      index={props.index}
      title={'AdaptiveModalViewTest01'}
      subtitle={'TBA'}
      description={[
        `Test - TBA`,
        `Current Modal Config Index: ${modalConfigPresetIndex}`,
      ]}
    >
      <AdaptiveModalView
        ref={modalRef}
        modalConfig={currentModalConfigPreset}
      >
        <View style={styles.rootModalContainer}>
          <Text>"Adaptive Modal"</Text>
        </View>
      </AdaptiveModalView>
      <CardButton
        title={'Next Modal Config'}
        subtitle={'Cycle to next modal config preset...'}
        onPress={() => {
          setModalConfigPresetCounter(prev => prev + 1);
        }}
      />
      <CardButton
        title={'Show Modal'}
        subtitle={'Present modal using modal config preset...'}
        onPress={() => {
          modalRef?.current?.presentModal();
        }}
      />
    </ExampleItemCard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootModalContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'red',
  },
});

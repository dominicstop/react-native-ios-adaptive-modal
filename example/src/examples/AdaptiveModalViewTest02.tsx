import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { AdaptiveModalView } from 'react-native-ios-adaptive-modal';

import type { ExampleItemProps } from './SharedExampleTypes';
import { ExampleItemCard } from '../components/ExampleItemCard';
import { CardButton } from '../components/Card';
import { AdaptiveModalConfigPresets } from '../constants/AdaptiveModalConfigPresets';
import { RNIModalContentAnchorModes } from '../constants/RNIModalContentAnchorModes';
import { ExampleList } from '../screens/HomeScreen';


export function AdaptiveModalViewTest02(props: ExampleItemProps) {
  const [modalConfigPresetCounter, setModalConfigPresetCounter] = React.useState(0);

  const modalConfigPresetIndex = 
    modalConfigPresetCounter % AdaptiveModalConfigPresets.length;
  
  const currentModalConfigPreset = 
    AdaptiveModalConfigPresets[modalConfigPresetIndex];

  const modalRef = React.createRef<AdaptiveModalView>();
  
  return (
    <ExampleItemCard
      index={props.index}
      style={props.style}
      title={'AdaptiveModalViewTest02'}
      subtitle={'TBA'}
      description={[
        `Test - ScrollView`,
        (
          `Current Modal Config Index: ${modalConfigPresetIndex}\n`
        ),
      ]}
    >
      <AdaptiveModalView
        ref={modalRef}
        modalConfig={currentModalConfigPreset}
        modalContentAnchorMode={'stretch'}
      >
        <ExampleList
          style={styles.rootModalContainer}
          contentContainerStyle={styles.rootModalContentContainer}
        />
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
    paddingHorizontal: 15,
    marginTop: 25,
  },
  rootModalContentContainer: {
    paddingBottom: 200,
  },
});

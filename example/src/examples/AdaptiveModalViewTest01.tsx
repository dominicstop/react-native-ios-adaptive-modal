import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { AdaptiveModalView } from 'react-native-ios-adaptive-modal';

import type { ExampleItemProps } from './SharedExampleTypes';
import { ExampleItemCard } from '../components/ExampleItemCard';
import { CardButton } from '../components/Card';
import { AdaptiveModalConfigPresets } from '../constants/AdaptiveModalConfigPresets';
import { RNIModalContentAnchorModes } from '../constants/RNIModalContentAnchorModes';


export function AdaptiveModalViewTest01(props: ExampleItemProps) {
  const [modalConfigPresetCounter, setModalConfigPresetCounter] = React.useState(0);

  const modalConfigPresetIndex = 
    modalConfigPresetCounter % AdaptiveModalConfigPresets.length;
  
  const currentModalConfigPreset = 
    AdaptiveModalConfigPresets[modalConfigPresetIndex];

  const [modalContentAnchorModeCounter, setModalContentAnchorModeCounter] = React.useState(0);

  const modalContentAnchorModeIndex = 
    modalContentAnchorModeCounter % RNIModalContentAnchorModes.length;
  
  const currentModalContentAnchorMode = 
    RNIModalContentAnchorModes[modalContentAnchorModeIndex];

  const modalRef = React.createRef<AdaptiveModalView>();
  
  return (
    <ExampleItemCard
      index={props.index}
      style={props.style}
      title={'AdaptiveModalViewTest01'}
      subtitle={'TBA'}
      description={[
        `Test - TBA`,
        (
          `Current Modal Config Index: ${modalConfigPresetIndex}\n`
          + `modalContentAnchorMode: ${currentModalContentAnchorMode}`
        ),
      ]}
    >
      <AdaptiveModalView
        ref={modalRef}
        modalConfig={currentModalConfigPreset}
        modalContentAnchorMode={currentModalContentAnchorMode}
      >
        <View style={styles.rootModalContainer}>
          <View style={styles.modalContent}>
            <Text>"Adaptive Modal"</Text>
            <Text>"Red = inner container"</Text>
            <Text>"blue = outer/root container"</Text>
          </View>
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
        title={'Cycle modalContentAnchorMode'}
        subtitle={'Get next `RNIModalContentAnchorMode`'}
        onPress={() => {
          setModalContentAnchorModeCounter(prev => prev + 1);
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
    backgroundColor: 'blue',
  },
  modalContent: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});

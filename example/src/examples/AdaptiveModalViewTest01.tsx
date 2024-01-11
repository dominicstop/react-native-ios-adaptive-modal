import * as React from 'react';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';

import { AdaptiveModalView } from 'react-native-ios-adaptive-modal';

import type { ExampleItemProps } from './SharedExampleTypes';
import { ExampleItemCard } from '../components/ExampleItemCard';
import { CardButton } from '../components/Card';
import { AdaptiveModalConfigPresets } from '../constants/AdaptiveModalConfigPresets';
import { RNIModalContentAnchorModes } from '../constants/RNIModalContentAnchorModes';
import { AdaptiveModalAnimationModes } from '../constants/AdaptiveModalAnimationModes';


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

  const [modalAnimationModeCounter, setModalAnimationModeCounter] = React.useState(0);

  const modalAnimationModeIndex = 
    modalAnimationModeCounter % AdaptiveModalAnimationModes.length;
  
  const currentModalAnimationMode = 
    AdaptiveModalAnimationModes[modalAnimationModeIndex];

  const [shouldShowModalBgColor, setShouldShowModalBgColor] = React.useState(false);
  
  const rootModalContainerStyle: ViewStyle = {
    backgroundColor: (shouldShowModalBgColor
      ? 'blue'
      : 'clear'
    ),
  };

  const modalContentStyle: ViewStyle = {
    backgroundColor: (shouldShowModalBgColor
      ? 'red'
      : 'clear'
    ),
  };

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
          + `modalContentAnchorMode: ${currentModalContentAnchorMode}\n`
          + `modalAnimationMode: ${currentModalAnimationMode}`
        ),
      ]}
    >
      <AdaptiveModalView
        ref={modalRef}
        modalConfig={currentModalConfigPreset}
        modalContentAnchorMode={currentModalContentAnchorMode}
        modalAnimationMode={currentModalAnimationMode}
      >
        <View style={[styles.rootModalContainer, rootModalContainerStyle]}>
          <View style={[styles.modalContent, modalContentStyle]}>
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
        title={'Cycle AdaptiveModalAnimationModes'}
        subtitle={'Get next `AdaptiveModalAnimationMode`'}
        onPress={() => {
          setModalAnimationModeCounter(prev => prev + 1);
        }}
      />
      <CardButton
        title={'Toggle Modal Background Color'}
        subtitle={'Show/hide solid bg color for modal bg'}
        onPress={() => {
          setShouldShowModalBgColor(prev => !prev);
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

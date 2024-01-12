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
  const modalRef = React.createRef<AdaptiveModalView>();
  
  const [
    modalConfigPresetCounter, 
    setModalConfigPresetCounter
  ] = React.useState(0);

  const modalConfigPresetIndex = 
    modalConfigPresetCounter % AdaptiveModalConfigPresets.length;

  const currentModalConfigPreset = 
    AdaptiveModalConfigPresets[modalConfigPresetIndex];

  const [
    modalContentAnchorModeCounter, 
    setModalContentAnchorModeCounter
  ] = React.useState(0);

  const currentModalContentAnchorMode = (() => {
    const index = 
      modalContentAnchorModeCounter % RNIModalContentAnchorModes.length;

    return RNIModalContentAnchorModes[index];
  })();

  const [
    modalAnimationModeCounter, 
    setModalAnimationModeCounter
  ] = React.useState(0);

  const currentModalAnimationMode = (() => {
    const index = modalAnimationModeCounter % AdaptiveModalAnimationModes.length;
    return AdaptiveModalAnimationModes[index];
  })();

  const [
    shouldShowModalBgColor, 
    setShouldShowModalBgColor
  ] = React.useState(false);
  
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

  const [
    enableContinuousLayoutResizingDuringAnimation, 
    setEnableContinuousLayoutResizingDuringAnimation
  ] = React.useState(true);
  
  return (
    <ExampleItemCard
      index={props.index}
      style={props.style}
      title={'AdaptiveModalViewTest01'}
      subtitle={'TBA'}
      description={[
        `Test - TBA`,
      ]}
    >
      <AdaptiveModalView
        ref={modalRef}
        modalConfig={currentModalConfigPreset}
        modalContentAnchorMode={currentModalContentAnchorMode}
        modalAnimationMode={currentModalAnimationMode}
        shouldEnableContinuousLayoutResizingDuringAnimation={enableContinuousLayoutResizingDuringAnimation}
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
        subtitle={`Current preset index: ${modalConfigPresetIndex}`}
        onPress={() => {
          setModalConfigPresetCounter(prev => prev + 1);
        }}
      />
      <CardButton
        title={'Cycle modalContentAnchorMode'}
        subtitle={`Current Value: ${currentModalContentAnchorMode}`}
        onPress={() => {
          setModalContentAnchorModeCounter(prev => prev + 1);
        }}
      />
      <CardButton
        title={'Cycle modalAnimationMode'}
        subtitle={`Current Value: ${currentModalAnimationMode}`}
        onPress={() => {
          setModalAnimationModeCounter(prev => prev + 1);
        }}
      />
      <CardButton
        title={'Toggle `continuousResizingDuringAnimation`'}
        subtitle={`Current Value: ${enableContinuousLayoutResizingDuringAnimation}`}
        onPress={() => {
          setEnableContinuousLayoutResizingDuringAnimation(prev => !prev);
        }}
      />
      <CardButton
        title={'Toggle Modal Background Color'}
        subtitle={`Current Value: ${shouldShowModalBgColor}`}
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

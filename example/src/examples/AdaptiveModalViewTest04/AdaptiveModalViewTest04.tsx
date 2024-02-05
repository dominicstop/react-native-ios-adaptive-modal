import * as React from 'react';
import { StyleSheet } from 'react-native';

import { AdaptiveModalView } from 'react-native-ios-adaptive-modal';

import type { ExampleItemProps } from '../SharedExampleTypes';
import { ExampleItemCard } from '../../components/ExampleItemCard';
import { CardButton } from '../../components/Card';
import { AdaptiveModalConfigPresets, AdaptiveModalConfigPresetsWithMetadata } from '../../constants/AdaptiveModalConfigPresets';

import { createAdaptiveModalPresentCommandConfig } from './TestHelpers';
import { ObjectPropertyDisplay } from '../../components/ObjectPropertyDisplay';
import { RNIAdaptiveModalCommandConfigPresent } from 'react-native-ios-adaptive-modal/native_components/RNIAdaptiveModalView';
import { SharedTestModalContent } from '../SharedTestModalContent';
import { AnimationConfigPresets } from '../../constants/AnimationConfigPresets';


export function AdaptiveModalViewTest04(props: ExampleItemProps) {
  const [
    currentSnapPointIndex, 
    setCurrentSnapPointIndex
  ] = React.useState(0);

  const [
    modalConfigPresetCounter, 
    setModalConfigPresetCounter
  ] = React.useState(0);

  const modalConfigPresetIndex =
    modalConfigPresetCounter % AdaptiveModalConfigPresets.length;

  const currentModalConfigPresetItem =
    AdaptiveModalConfigPresetsWithMetadata[modalConfigPresetIndex];

  const modalRef = React.createRef<AdaptiveModalView>();

  const [
    animationConfigPresetCounter, 
    setAnimationConfigPresetCounter
  ] = React.useState(0);

  const animationConfigPresetIndex =
    animationConfigPresetCounter % AnimationConfigPresets.length;

  const currentAnimationConfigPreset =
    AnimationConfigPresets[animationConfigPresetIndex];

  const commandConfigPresets = 
    createAdaptiveModalPresentCommandConfig(currentModalConfigPresetItem);

  const [
    commandConfigPresetCounter, 
    setCommandConfigPresetCounter
  ] = React.useState(0);

  const commandConfigPresetIndex =
    commandConfigPresetCounter % commandConfigPresets.length;

  const commandConfigPreset =
    commandConfigPresets[commandConfigPresetIndex];

  const commandConfig: RNIAdaptiveModalCommandConfigPresent = {
    ...commandConfigPreset,
    animationConfig: currentAnimationConfigPreset,
  };
  
  return (
    <ExampleItemCard
      index={props.index}
      style={props.style}
      title={'AdaptiveModalViewTest04'}
      subtitle={'TBA'}
      description={[
        `Test - Modal Events`,
      ]}
    >
      <AdaptiveModalView
        {...currentModalConfigPresetItem.adaptiveModalProps}
        ref={modalRef}
        modalConfig={currentModalConfigPresetItem.modalConfig}
        modalContentAnchorMode={'stretch'}
        onModalWillSnap={({nativeEvent}) => {
          setCurrentSnapPointIndex(nativeEvent.nextInterpolationPoint.index);
        }}
        onModalDidSnap={({nativeEvent}) => {
          setCurrentSnapPointIndex(nativeEvent.currentInterpolationPoint.index);
        }}
      >
        <SharedTestModalContent
          currentModalConfigIndex={modalConfigPresetIndex}
          currentSnapPointIndex={currentSnapPointIndex}
          presetItem={currentModalConfigPresetItem}
        />
      </AdaptiveModalView>
      <ObjectPropertyDisplay
        object={commandConfig}
        style={{
          opacity: 0.8,
          backgroundColor: 'rgba(0,0,0,0.07)'
        }}
      />
      <CardButton
        title={'Next Modal Config'}
        subtitle={`Current preset index: ${modalConfigPresetIndex}`}
        onPress={() => {
          setModalConfigPresetCounter(prev => prev + 1);
        }}
      />
      <CardButton
        title={'Next Command Preset Config'}
        subtitle={`Current preset index: ${commandConfigPresetIndex}`}
        onPress={() => {
          setCommandConfigPresetCounter(prev => prev + 1);
        }}
      />
      <CardButton
        title={'Next Animation Preset Config'}
        subtitle={`Current preset index: ${animationConfigPresetIndex}`}
        onPress={() => {
          setAnimationConfigPresetCounter(prev => prev + 1);
        }}
      />
      <CardButton
        title={'Show Modal'}
        subtitle={'Present modal using modal config preset...'}
        onPress={() => {
          modalRef?.current?.presentModal(commandConfig);
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
  },
  rootModalContentContainer: {
    paddingBottom: 200,
  },
  modalContentText: {
    flex: 1,
    fontSize: 32,
    textAlign: 'center',
    marginTop: 25,
  },
});

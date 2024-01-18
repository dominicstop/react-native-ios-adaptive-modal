import * as React from 'react';
import { StyleSheet, View, Text, ViewStyle, TextInput } from 'react-native';

import { AdaptiveModalView } from 'react-native-ios-adaptive-modal';

import type { ExampleItemProps } from './SharedExampleTypes';
import { ExampleItemCard } from '../components/ExampleItemCard';
import { CardButton } from '../components/Card';
import { AdaptiveModalConfigPresetWithMetadataItem, AdaptiveModalConfigPresetsWithMetadata } from '../constants/AdaptiveModalConfigPresets';
import { RNIModalContentAnchorModes } from '../constants/RNIModalContentAnchorModes';
import { AdaptiveModalAnimationModes } from '../constants/AdaptiveModalAnimationModes';

function ModalContent(props: {
  shouldShowModalBgColor: boolean;
  currentModalConfigIndex: number;
  presetItem: AdaptiveModalConfigPresetWithMetadataItem,
}) {

  const rootModalContainerStyle: ViewStyle = {
    backgroundColor: (props.shouldShowModalBgColor
      ? 'blue'
      : 'clear'
    ),
  };

  const modalContentStyle: ViewStyle = {
    backgroundColor: (props.shouldShowModalBgColor
      ? 'red'
      : 'clear'
    ),
  };

  return (
    <View style={[styles.rootModalContainer, rootModalContainerStyle]}>
      <View style={[styles.modalContent, modalContentStyle]}>
        <Text style={[styles.modalContentItem, styles.modalConfigIndexText]}>
          <Text style={styles.modalConfigIndexLabel}>
            {'Config Index: '}
          </Text>
          <Text>
            {props.currentModalConfigIndex}
          </Text>
        </Text>
        {props.shouldShowModalBgColor && (
          <React.Fragment>
            <Text>"Adaptive Modal"</Text>
            <Text>"Red = inner container"</Text>
            <Text>"blue = outer/root container"</Text>
          </React.Fragment>
        )}
        {props.presetItem.shouldShowTextBox && (
          <View style={[styles.modalContentItem, styles.textInputContainer]}>
            <Text style={styles.textInputLabel}>
              {'Textbox Input:'}
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder={"Text Input..."}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export function AdaptiveModalViewTest01(props: ExampleItemProps) {
  const modalRef = React.createRef<AdaptiveModalView>();
  
  const [
    modalConfigPresetCounter, 
    setModalConfigPresetCounter
  ] = React.useState(0);

  const modalConfigPresetIndex = 
    modalConfigPresetCounter % AdaptiveModalConfigPresetsWithMetadata.length;

  const currentModalConfigPresetItem = 
    AdaptiveModalConfigPresetsWithMetadata[modalConfigPresetIndex];

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
        modalConfig={currentModalConfigPresetItem.modalConfig}
        modalContentAnchorMode={currentModalContentAnchorMode}
        modalAnimationMode={currentModalAnimationMode}
        shouldEnableContinuousLayoutResizingDuringAnimation={enableContinuousLayoutResizingDuringAnimation}
      >
        <ModalContent
          shouldShowModalBgColor={shouldShowModalBgColor}
          currentModalConfigIndex={modalConfigPresetIndex}
          presetItem={currentModalConfigPresetItem}
        />
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
  modalConfigIndexText: {
    fontSize: 16,
    backgroundColor: 'rgba(0,0,0,0.07)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    overflow: 'hidden',
  },
  modalConfigIndexLabel: {
    fontWeight: '600',
    color: 'rgba(0,0,0,0.9)',

  },
  modalContentItem: {
    marginBottom: 14,
  },
  textInputContainer: {
    minWidth: 200,
  },
  textInputLabel: {
    fontSize: 16,
    marginBottom: 6,
    marginLeft: 3,
    fontWeight: '500',
    color: 'rgba(0,0,0,0.6)',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.4)',
    borderRadius: 10,
    padding: 10,
  },
});

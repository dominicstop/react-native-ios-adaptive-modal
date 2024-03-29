import * as React from 'react';
import { } from 'react-native';

import { AdaptiveModalView } from 'react-native-ios-adaptive-modal';

import type { ExampleItemProps } from '../SharedExampleTypes';
import { ExampleItemCard } from '../../components/ExampleItemCard';
import { CardButton } from '../../components/Card';
import { AdaptiveModalConfigPresetsWithMetadata } from '../../constants/AdaptiveModalConfigPresets';
import { RNIModalContentAnchorModes } from '../../constants/RNIModalContentAnchorModes';
import { AdaptiveModalAnimationModes } from '../../constants/AdaptiveModalAnimationModes';
import { ModalContent } from './ModalContent';


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

  const [
    currentSnapPointIndex, 
    setCurrentSnapPointIndex
  ] = React.useState(0);

  const [
    shouldIncrementSnapPointIndex, 
    setShouldIncrementSnapPointIndex
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
        {...currentModalConfigPresetItem.adaptiveModalProps}
        ref={modalRef}
        modalConfig={currentModalConfigPresetItem.modalConfig}
        modalContentAnchorMode={currentModalContentAnchorMode}
        modalAnimationMode={currentModalAnimationMode}
        shouldEnableContinuousLayoutResizingDuringAnimation={enableContinuousLayoutResizingDuringAnimation}
        onModalWillSnap={({nativeEvent}) => {
          setCurrentSnapPointIndex(nativeEvent.nextInterpolationPoint.index);
        }}
        onModalDidSnap={({nativeEvent}) => {
          setCurrentSnapPointIndex(nativeEvent.currentInterpolationPoint.index);

          const prevIndex = nativeEvent.prevInterpolationPoint?.index ?? -1;
          const nextIndex = nativeEvent.currentInterpolationPoint.index;

          const lastIndex: number = (() => {
            const modalConfig = currentModalConfigPresetItem.modalConfig;
            let baseCount = modalConfig.snapPoints.length - 1;

            const hasOverShootSnapPoint =  
              modalConfig.overshootSnapPoint != null;

            if(hasOverShootSnapPoint) {
              baseCount++;
            };

            return baseCount;
          })();
          
          if(nextIndex >= lastIndex) {
            setShouldIncrementSnapPointIndex(false);
          
          } else if(nextIndex == 0) {
            setShouldIncrementSnapPointIndex(true);
          };
          console.log(
            "onModalDidSnap",
            "\n - nextIndex:", nextIndex,
            "\n - lastIndex:", lastIndex,
            "\n - shouldIncrementSnapPointIndex:", shouldIncrementSnapPointIndex,
          );
          
        }}
      >
        <ModalContent
          shouldShowModalBgColor={shouldShowModalBgColor}
          currentModalConfigIndex={modalConfigPresetIndex}
          presetItem={currentModalConfigPresetItem}
          currentSnapPointIndex={currentSnapPointIndex}
          onPressConfigIndex={() => {
            setModalConfigPresetCounter(prev => prev + 1);
          }}
          onPressSnapPointIndex={() => {
            if(shouldIncrementSnapPointIndex){
              modalRef.current?.snapToNextSnapPointIndex();
              
            } else {
              modalRef.current?.snapToPrevSnapPointIndex();
            };
          }}
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
          modalRef?.current?.presentModal({
            mode: 'standard',
          });
        }}
      />
    </ExampleItemCard>
  );
};

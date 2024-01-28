import * as React from 'react';
import { StyleSheet } from 'react-native';

import { AdaptiveModalView } from 'react-native-ios-adaptive-modal';

import type { ExampleItemProps } from '../SharedExampleTypes';
import { ExampleItemCard } from '../../components/ExampleItemCard';
import { CardButton } from '../../components/Card';
import { AdaptiveModalConfigPresets } from '../../constants/AdaptiveModalConfigPresets';
import { EventItem } from './SharedTypes';
import { ModalContent } from './ModalContent';

import * as Helpers from '../../functions/Helpers';


export function AdaptiveModalViewTest03(props: ExampleItemProps) {
  const [modalConfigPresetCounter, setModalConfigPresetCounter] = React.useState(0);

  const modalConfigPresetIndex =
    modalConfigPresetCounter % AdaptiveModalConfigPresets.length;

  const currentModalConfigPreset =
    AdaptiveModalConfigPresets[modalConfigPresetIndex];

  const modalRef = React.createRef<AdaptiveModalView>();

  const [eventItems, setEventItems] = React.useState<Array<EventItem>>([]);


  const addEvent = (eventName: string, eventPayload: object) => {
    const date = new Date();

    const h = Helpers.pad(date.getHours());
    const m = Helpers.pad(date.getMinutes());
    const s = Helpers.pad(date.getSeconds());

    const ms = Helpers.pad(date.getMilliseconds(), 3);

    setEventItems((prevValue) => ([
      {
        id: prevValue.length,
        timestamp: `${h}:${m}:${s}.${ms}`,
        eventName: eventName,
        eventPayload: eventPayload,
      },
      ...prevValue, 
    ]));
  };

  return (
    <ExampleItemCard
      index={props.index}
      style={props.style}
      title={'AdaptiveModalViewTest03'}
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
        onModalWillSnap={(event) => {
          addEvent(
            'onModalWillSnap',
            event.nativeEvent,
          );
        }}
        onModalDidSnap={(event) => {
          addEvent(
            'onModalDidSnap',
            event.nativeEvent,
          );
        }}
        onModalWillShow={(event) => {
          addEvent(
            'onModalWillShow',
            event.nativeEvent,
          );
        }}
        onModalDidShow={(event) => {
          addEvent(
            'onModalDidShow',
            event.nativeEvent,
          );
        }}
        onModalWillHide={(event) => {
          addEvent(
            'onModalWillHide',
            event.nativeEvent,
          );
        }}
        onModalDidHide={(event) => {
          addEvent(
            'onModalDidHide',
            event.nativeEvent,
          );
        }}
        onModalPresentCancelled={(event) => {
          addEvent(
            'onModalPresentCancelled',
            event.nativeEvent,
          );
        }}
        onModalDismissCancelled={(event) => {
          addEvent(
            'onModalDismissCancelled',
            event.nativeEvent,
          );
        }}
        onCurrentModalConfigDidChange={(event) => {
          addEvent(
            'onCurrentModalConfigDidChange',
            event.nativeEvent,
          );
        }}
      >
        <ModalContent
          eventItems={eventItems.slice(0, 25)}
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
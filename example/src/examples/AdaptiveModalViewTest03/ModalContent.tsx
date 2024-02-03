import * as React from 'react';
import { StyleSheet, ScrollView, ListRenderItem } from 'react-native';

import { EventItem } from './SharedTypes';
import { ModalEventListItem } from './ModalEventListItem';


export function ModalContent(props: {
  eventItems: Array<EventItem>;
}){

  return (
    <ScrollView
      style={styles.listOuter}
      contentContainerStyle={styles.listContentContainer}
      horizontal={false}
    > 
      {props.eventItems.map((item, index) => (
        <ModalEventListItem
          key={item.timestamp}
          eventItem={item}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listOuter: {
    paddingTop: 30,
  },
  listContentContainer: {
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 120
  },
});
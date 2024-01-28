import * as React from 'react';
import { StyleSheet, ScrollView, FlatList, ListRenderItem } from 'react-native';

import { EventItem } from './SharedTypes';
import { ModalEventListItem } from './ModalEventListItem';


export function ModalContent(props: {
  eventItems: Array<EventItem>;
}){

  const hasItems = (props?.eventItems?.length ?? 0) > 0;
  
  const renderItem: ListRenderItem<EventItem> = ({ item }) => (
    <ModalEventListItem
      eventItem={item}
    />
  );

  return (
    <ScrollView
      style={styles.listOuter}
      contentContainerStyle={styles.listContentContainer}
      horizontal={false}
    >
      <FlatList
        data={props.eventItems}
        style={styles.listInner}
        renderItem={renderItem}
        keyExtractor={(item) => `item-${item.id}`}
        nestedScrollEnabled={true}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listOuter: {
    paddingTop: 24,
  },
  listContentContainer: {
    paddingLeft: 14,
    paddingRight: 14,
  },
  listInner: {
    paddingBottom: 80
  },
});
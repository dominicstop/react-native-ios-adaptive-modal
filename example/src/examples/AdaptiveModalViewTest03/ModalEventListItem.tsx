import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { EventItem } from "./SharedTypes";
import { ObjectPropertyDisplay } from '../../components/ObjectPropertyDisplay';



export function ModalEventListItem(props: {
  eventItem: EventItem;
}){

  const hasEventPayload = 
       props.eventItem.eventPayload != null 
    && Object.keys(props.eventItem.eventPayload).length > 1;
  
  return(
    <View style={styles.rootContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.label}>
          <Text style={styles.labelTitle}>
            {'Index: '}
          </Text>
          <Text style={styles.labelValue}>
            {props.eventItem.id}
          </Text>
        </Text>
        <Text style={styles.timestampLabel}>
          <Text style={styles.timestampLabelTitle}>
            {'Timestamp: '}
          </Text>
          <Text style={styles.timestampLabelValue}>
            {props.eventItem.timestamp}
          </Text>
        </Text>
      </View>
      <View>
        <Text style={styles.label}>
          <Text style={styles.labelTitle}>
            {'Event Name: '}
          </Text>
          <Text style={styles.labelValue}>
            {props.eventItem.eventName}
          </Text>
        </Text>
      </View>
      {(hasEventPayload) && (
        <ObjectPropertyDisplay
          object={props.eventItem.eventPayload}
          style={styles.objectPropertyDisplay}
          propertyLabelTextStyle={styles.objectPropertyDisplayLabelTitle}
          propertyValueTextStyle={styles.objectPropertyDisplayLabelValue}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginBottom: 10,
    borderRadius: 10,
  },
  headingContainer: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  label: {
    flex: 1,
  },
  labelTitle: {
    fontWeight: '500',
  },
  labelValue: {
    fontVariant: ['tabular-nums'],
    fontWeight: '300',
    opacity: 0.6,
  },
  timestampLabel: {
  },
  timestampLabelTitle: {
    fontWeight: '500',
  },
  timestampLabelValue: {
    fontVariant: ['tabular-nums'],
    fontWeight: '300',
    opacity: 0.6,
  },
  objectPropertyDisplay: {
    backgroundColor: 'rgba(0,0,0,0.04)',
  },
  objectPropertyDisplayLabelTitle: {
    color: 'black',
    fontSize: undefined,
    fontWeight: '500',
    opacity: 0.8,

  },
  objectPropertyDisplayLabelValue: {
    color: 'black',
    opacity: 0.6,
    fontSize: undefined,
    maxWidth: '70%',
    fontWeight: '300',
  },
});
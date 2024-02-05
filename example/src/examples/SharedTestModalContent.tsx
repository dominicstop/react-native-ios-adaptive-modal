import * as React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { AdaptiveModalConfigPresetWithMetadataItem } from '../constants/AdaptiveModalConfigPresets';


export function SharedTestModalContent(props: {
  currentModalConfigIndex: number;
  currentSnapPointIndex: number;
  presetItem: AdaptiveModalConfigPresetWithMetadataItem;
}) {

  return (
    <View style={styles.rootModalContainer}>
      <View style={styles.modalContent}>
        <Text style={[
          styles.modalContentItem, 
          styles.pillContainer,
          styles.pillLabel
        ]}>
          <Text style={styles.pillLabelTitle}>
            {'Config Index: '}
          </Text>
          <Text style={styles.pillLabelValue}>
            {props.currentModalConfigIndex}
          </Text>
        </Text>
        <Text style={[
          styles.modalContentItem, 
          styles.pillContainer,
          styles.pillLabel
        ]}>
          <Text style={styles.pillLabelTitle}>
            {'Snap Point Index: '}
          </Text>
          <Text style={styles.pillLabelValue}>
            {props.currentSnapPointIndex}
          </Text>
        </Text>

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


const styles = StyleSheet.create({
  rootModalContainer: {
  },
  modalContent: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.07)',
  },
  pillLabel: {
    fontSize: 14,
  },
  pillLabelTitle: {
    fontWeight: '600',
    color: 'rgba(0,0,0,0.8)',
  },
  pillLabelValue: {
    fontWeight: '400',
    color: 'rgba(0,0,0,0.5)',
  },
  modalContentItem: {
    marginBottom: 14,
  },
  textInputContainer: {
    minWidth: 200,
  },
  textInputLabel: {
    fontSize: 14,
    marginBottom: 6,
    marginLeft: 3,
    fontWeight: '500',
    color: 'rgba(0,0,0,0.6)',
  },
  textInput: {
    height: 35,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.04)',
    paddingHorizontal: 12,
    paddingVertical: 3,
  },
});

import * as React from 'react';
import { StyleSheet, View, Text, ViewStyle, TextInput } from 'react-native';
import { AdaptiveModalConfigPresetWithMetadataItem } from '../../constants/AdaptiveModalConfigPresets';


export function ModalContent(props: {
  shouldShowModalBgColor: boolean;
  currentModalConfigIndex: number;
  presetItem: AdaptiveModalConfigPresetWithMetadataItem;
  currentSnapPointIndex: number;
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
        <Text style={[styles.modalContentItem, styles.pillLabel]}>
          <Text style={styles.pillLabelTitle}>
            {'Config Index: '}
          </Text>
          <Text style={styles.pillLabelValue}>
            {props.currentModalConfigIndex}
          </Text>
        </Text>
        <Text style={[styles.modalContentItem, styles.pillLabel]}>
          <Text style={styles.pillLabelTitle}>
            {'Snap Point Index: '}
          </Text>
          <Text style={styles.pillLabelValue}>
            {props.currentSnapPointIndex}
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


const styles = StyleSheet.create({
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
  pillLabel: {
    fontSize: 14,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.07)',
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

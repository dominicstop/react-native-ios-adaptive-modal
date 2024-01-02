import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import { AdaptiveModalConfig, AdaptiveModalView } from 'react-native-ios-adaptive-modal';


const modalConfig: AdaptiveModalConfig = {
  snapPoints: [{
    // Snap Point 1
    mode: 'standard',
    layoutConfig: {
      horizontalAlignment: 'center',
      verticalAlignment: 'bottom',
      width: {
        mode: {
          mode: 'percent',
          percentValue: 0.8,
        },
      },
      height: {
        mode: {
          mode: 'stretch'
        },
      }
    },
  }],
  snapDirection: 'bottomToTop',
};

export default function App() {
  const modalRef = React.createRef<AdaptiveModalView>();

  return (
    <View style={styles.container}>
      <AdaptiveModalView
        ref={modalRef}
        modalConfig={modalConfig}
      >
        <View style={styles.rootModalContainer}>
          <Text>"Adaptive Modal"</Text>
        </View>
      </AdaptiveModalView>
      <TouchableOpacity
        onPress={() => {
          modalRef?.current?.presentModal();
        }}
      >
        <Text>
          {'Show Modal'}
        </Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootModalContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'red',
  },
});

import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import { AdaptiveModalView } from 'react-native-ios-adaptive-modal';

export default function App() {
  const modalRef = React.createRef<AdaptiveModalView>();

  return (
    <View style={styles.container}>
      <AdaptiveModalView
        ref={modalRef}
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

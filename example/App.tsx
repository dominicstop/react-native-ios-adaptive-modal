import { StyleSheet, Text, View } from 'react-native';

import * as ReactNativeIosAdaptiveModal from 'react-native-ios-adaptive-modal';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactNativeIosAdaptiveModal.hello()}</Text>
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
});

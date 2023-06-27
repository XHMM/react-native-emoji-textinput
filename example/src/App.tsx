import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { EmojiTextinputView } from 'react-native-emoji-textinput';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput placeholder={'normal input'} />
      <EmojiTextinputView
        placeholder={'tap to input emoji'}
        keyboardType={'url'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

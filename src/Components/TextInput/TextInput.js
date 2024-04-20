import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './TextInput.style';

const Input = ({placeholder, value, onType}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onType}
      />
    </View>
  );
};

export default Input;
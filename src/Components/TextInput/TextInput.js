import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './TextInput.style';

const Input = ({placeholder, value, onType, onSubmitEditing}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onType}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

export default Input;

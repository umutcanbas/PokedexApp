import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './Button.style';

const Button = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>More</Text>
    </TouchableOpacity>
  );
};

export default Button;

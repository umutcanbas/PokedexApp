import {View, Text, Image} from 'react-native';
import React from 'react';

import styles from './Header.style';
import TextInput from '../TextInput/TextInput';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/png/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <TextInput placeholder={'Search Pokémon'} />
    </View>
  );
};

export default Header;
 
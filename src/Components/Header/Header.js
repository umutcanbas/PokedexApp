import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';

import styles from './Header.style';
import TextInput from '../TextInput/TextInput';

const Header = ({visible }) => {
  const navigation = useNavigation();

  const handleFormSubmit = async value => {
    if (!value.pokemon) {
      alert('Please enter a Pokémon name');
      return;
    }
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${value.pokemon}`,
      );
      const data = await response.json();
      console.log(response.name);
      navigation.navigate('DetailPage', data);
      value.pokemon = '';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/png/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.innerContainer}>
        {visible && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}>
            <Text>{'<'}</Text>
          </TouchableOpacity>
        )}
        {/* Düzgün çalısmıyır */}
        <Formik initialValues={{pokemon: ''}} onSubmit={handleFormSubmit}>
          {({values, handleChange, handleSubmit}) => (
            <TextInput
              placeholder="Search Pokémon"
              value={values.pokemon}
              onType={handleChange('pokemon')}
              onSubmitEditing={handleSubmit}
            />
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Header;

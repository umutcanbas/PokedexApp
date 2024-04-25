import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';

import styles from './Header.style';
import TextInput from '../TextInput/TextInput';

const Header = ({visible}) => {
  const navigation = useNavigation();
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const handleFormSubmit = async value => {
    if (!value.pokemon) {
      alert('Please enter a Pokémon name');
      return;
    }
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${value.pokemon}`,
      );
      const pokemon = await response.json();
      navigation.navigate('DetailPage', {pokemon});
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = async value => {
    if (!value.pokemon) {
      setFilteredPokemon([]);
      return;
    }
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000`,
      );
      const data = await response.json();
      const filtered = data.results.filter(pokemon =>
        pokemon.name.startsWith(value.pokemon.toLowerCase()),
      );
      setFilteredPokemon(filtered);
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
        <Formik initialValues={{pokemon: ''}} onSubmit={handleFormSubmit}>
          {({values, handleChange, handleSubmit}) => (
            <View>
              <TextInput
                placeholder="Search Pokémon"
                value={values.pokemon}
                onType={value => {
                  handleChange('pokemon')(value);
                  handleFilter({pokemon: value});
                }}
                onSubmitEditing={handleSubmit}
              />
              {filteredPokemon.map(pokemon => (
                <TouchableOpacity
                  key={pokemon.name}
                  onPress={() => handleFormSubmit({pokemon: pokemon.name})}>
                  <Text style={styles.filteredPokemon}>{pokemon.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Header;

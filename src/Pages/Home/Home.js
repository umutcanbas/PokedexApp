import {SafeAreaView} from 'react-native';
import React from 'react';
import styles from './Home.style';
import PokemonList from '../PokemonList/PokemonList';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonList navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;

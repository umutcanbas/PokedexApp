import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './PokemonCard.style';

const PokemonCard = ({pokemon}) => {
  const navigation = useNavigation();

  const goDetail=()=>{
navigation.navigate('DetailPage',{pokemon})
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.innerContainer} onPress={goDetail}>
        <Image
          source={{uri: pokemon.sprites.front_default}}
          style={styles.image}
          resizeMode='contain'
        />

        <View style={styles.textContainer}>
          <Text style={styles.id}>#{pokemon.id}</Text>
          <Text style={styles.name}>{pokemon.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PokemonCard;

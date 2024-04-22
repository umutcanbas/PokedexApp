import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';

import styles from './Detail.style';

const Detail = ({route}) => {
  const {pokemon} = route.params;
  /* tek type pokemonlar icin gncelleme */
  return (
    <SafeAreaView>
      <Text>{pokemon.name}</Text>
      <Text>{pokemon.height}</Text>
      <Text>{pokemon.weight}</Text>
      <Text>{pokemon.id}</Text>
      <Text>{pokemon.types[0].type.name}</Text>
      <Text>{pokemon.types[1].type.name}</Text>
      <Text>{pokemon.abilities[0].ability.name}</Text>
      <Text>{pokemon.abilities[1].ability.name}</Text>

      <Image
        style={styles.image}
        width={400}
        height={400}
        source={{
          uri: pokemon.sprites.front_default,
        }}
      />

      <View style={styles.stats}>
        <Text style={styles.statsHeader}>Stats</Text>
        {pokemon.stats.map(c => (
          <Text style={styles.stat} key={c.stat.name}>
            {c.stat.name.replace('-', ' ')}: {c.base_stat}
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Detail;

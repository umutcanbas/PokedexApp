import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';

import styles from './Detail.style';
import Header from '../../Components/Header/Header';

const Detail = ({route}) => {
  const {pokemon} = route.params;

  let typeText = '';
  if (pokemon.types.length === 1) {
    const type = pokemon.types[0].type.name;
    typeText = <Text style={[styles.typeText, styles[type]]}>{type}</Text>;
  } else if (pokemon.types.length > 1) {
    typeText = pokemon.types.map(t => (
      <Text key={t.type.name} style={[styles.typeText, styles[t.type.name]]}>
        {t.type.name}
      </Text>
    ));
  }
  // ability control
  /* let abilityText = '';
  if (pokemon.abilities.length === 1) {
    abilityText = pokemon.abilities[0].ability.name;
  } else if (pokemon.abilities.length > 1) {
    abilityText = `${pokemon.abilities[0].ability.name}, ${pokemon.abilities[1].ability.name}`;
  } */

  return (
    <SafeAreaView style={styles.container}>
      <Header visible={true} />
      <View style={styles.nameContainer}>
        <Text style={styles.id}># {pokemon.id}</Text>
        <Text style={styles.name}>{pokemon.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: pokemon.sprites.front_default,
          }}
        />
        <View style={styles.statContainer}>
          <Text style={styles.statsHeader}>Stats</Text>
          {pokemon.stats.map(c => (
            <Text style={styles.stat} key={c.stat.name}>
              <Text style={{fontWeight: 'bold'}}>
                {c.stat.name.replace('-', ' ')}
              </Text>
              : {c.base_stat}
            </Text>
          ))}
          <Text style={styles.statHeight}>
            Height: <Text style={{fontWeight: '400'}}>{pokemon.height} </Text>
          </Text>
          <Text style={styles.statHeight}>
            Weight:<Text style={{fontWeight: '400'}}>{pokemon.weight} </Text>
            <Text style={{fontWeight: '400', textTransform: 'lowercase'}}>
              lbs
            </Text>
          </Text>
        </View>
      </View>

      <View style={styles.typeTextContainer}>{typeText}</View>

      <Image
        source={require('../../assets/png/Pokeball-11.png')}
        style={styles.imagePoke}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

export default Detail;

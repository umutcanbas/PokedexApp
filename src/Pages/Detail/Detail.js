import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

const Detail = ({route}) => {
  const {pokemon} = route.params;
  return (
    <SafeAreaView>
      <Text>{pokemon.name}</Text>
    </SafeAreaView>
  );
};

export default Detail;

import React from 'react';
import {Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import useFetch from '../../Hooks/useFetch';

import TextInput from '../../Components/TextInput/TextInput';

const App = ({navigation}) => {
  const api = 'https://pokeapi.co/api/v2/pokemon/150/';
  const {data, loading, error} = useFetch(api);

  const goDetail = () => {
    navigation.navigate('DetailPage');
  };

  if (loading) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView>
        <Text>Error: {error.message}</Text>
      </SafeAreaView>
    );
  }

  if (!data || !data.forms) {
    return (
      <SafeAreaView>
        <Text>No data available</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <TextInput />
      <Text>Height: {data.name}</Text>
      <Image
        style={{width: 200, height: 300}}
        source={{
          uri: data.sprites.other.home.front_default,
        }}
      />
      <TouchableOpacity style={{backgroundColor: 'red'}} onPress={goDetail}>
        <Text>Go to Detail Page</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;

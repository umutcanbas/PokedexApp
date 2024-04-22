import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './PokemonList.style';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import useFetch from '../../Hooks/useFetch';
import Header from '../../Components/Header/Header';

const page = 0;
const charLimit = 20;

const PokemonList = ({navigation}) => {
  const api = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';
 //const {data, error} = useFetch(api);
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=${
      page * charLimit
    }&limit=${charLimit}
    }`,
  );

  const getAllPokemons = async () => {
    setLoading(true);
    const res = await fetch(loadMore);
    const data = await res.json();

    function createPokemonObject(results) {
      results.map(async pokemon => {
        const res = await fetch(pokemon.url);
        const data = await res.json();

        setAllPokemons(currentList => [...currentList, data]);
        allPokemons.sort((a, b) => a.id - b.id);
      });
    }

    createPokemonObject(data.results);
   /*  page += 1; */
    setLoading(false);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const render = ({item}) => <PokemonCard pokemon={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={allPokemons}
        renderItem={render}
        showsVerticalScrollIndicator={false}
       /*  onEndReached={getAllPokemons} */
        numColumns={2}
        ListHeaderComponent={<Header />}
      />
    </View>
  );
};

export default PokemonList;

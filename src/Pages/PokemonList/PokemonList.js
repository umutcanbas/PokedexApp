import {View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './PokemonList.style';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';

const charLimit = 20;
page = 0;

const PokemonList = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [loadMore, setLoadMore] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=${
      page * charLimit
    }&limit=${charLimit}`,
  );

  const getAllPokemons = async () => {
    setLoading(true);
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);
    const pokemonData = await Promise.all(
      data.results.map(async pokemon => {
        const res = await fetch(pokemon.url);
        return await res.json();
      }),
    );
    setAllPokemons(currentList => [...currentList, ...pokemonData]);
    setPage(page + 1);
    setLoading(false);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const render = ({item}) => <PokemonCard pokemon={item} />;

  const handleLoadMore = () => {
    if (loadMore) {
      getAllPokemons();
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={allPokemons}
        renderItem={render}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={<Header />}
        ListFooterComponent={
          loadMore ? <Button onPress={handleLoadMore} /> : null
        }
      />
    </View>
  );
};

export default PokemonList;

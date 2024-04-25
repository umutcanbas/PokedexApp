import {StyleSheet} from 'react-native';

const colors = {
  normal: 'gray',
  fire: 'red',
  water: 'blue',
  electric: 'yellow',
  grass: 'green',
  ice: 'lightblue',
  fighting: 'brown',
  poison: 'purple',
  ground: 'sandybrown',
  flying: 'skyblue',
  psychic: 'pink',
  bug: 'green',
  rock: 'sienna',
  ghost: 'darkviolet',
  dragon: 'darkorange',
  dark: 'black',
  steel: 'slategray',
  fairy: 'pink',
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  statContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  image: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 5,
  },
  statsHeader: {
    fontSize: 23,
    color: '#cd853f',
    fontWeight: 'bold',
  },
  stat: {
    fontSize: 17,
    textTransform: 'capitalize',
  },
  name: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
  },
  id: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'blue',
  },
  typeTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  typeText: {
    borderRadius: 10,
    overflow: 'hidden',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    padding: 5,
    margin: 10,
    marginBottom: 30,
    textTransform: 'capitalize',
  },
  imagePoke: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 45,
  },

  normal: {
    backgroundColor: colors.normal,
  },
  fire: {
    backgroundColor: colors.fire,
  },
  water: {
    backgroundColor: colors.water,
  },
  electric: {
    backgroundColor: colors.electric,
  },
  grass: {
    backgroundColor: colors.grass,
  },
  ice: {
    backgroundColor: colors.ice,
  },
  fighting: {
    backgroundColor: colors.fighting,
  },
  poison: {
    backgroundColor: colors.poison,
  },
  ground: {
    backgroundColor: colors.ground,
  },
  flying: {
    backgroundColor: colors.flying,
  },
  psychic: {
    backgroundColor: colors.psychic,
  },
  bug: {
    backgroundColor: colors.bug,
  },
  rock: {
    backgroundColor: colors.rock,
  },
  ghost: {
    backgroundColor: colors.ghost,
  },
  dragon: {
    backgroundColor: colors.dragon,
  },
  dark: {
    backgroundColor: colors.dark,
  },
  steel: {
    backgroundColor: colors.steel,
  },
  fairy: {
    backgroundColor: colors.fairy,
  },
});

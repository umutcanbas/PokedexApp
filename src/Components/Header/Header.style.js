import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  logo: {
    width: 300,
    height: 300,
    marginHorizontal: 30,
    marginVertical: -80,
    padding: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginLeft: -30,
    width: 30,
    height: 30,
    justifyContent: 'center',
  },

  filteredPokemon: {
    textTransform: 'capitalize',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#cd853f',
    margin: 3,
  },
});

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  innerContainer: {
    borderRadius: 45,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: 'tomato',
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'capitalize',
  },
  id: {
    fontWeight: 'bold',
    fontSize: 17,
    marginRight: 5,
    color: 'white',
  },
});

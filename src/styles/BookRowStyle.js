// Dependencies
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 50,
  },
  bookContainer: {
    flex: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleBook: {
    flex: 8,
    flexDirection: 'column',
  },
  title: {
    color: '#000',
  },
  author: {
    color: 'grey',
  },
  button: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  image: {
    width: 60,
    height: 80,
  },
  even: {
    backgroundColor: '#fff',
  },
  odd: {
    backgroundColor: '#f3f3f7',
  },
});

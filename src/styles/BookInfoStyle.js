// Dependencies
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 20,
  },
  title: {
    fontSize: 16,
  },
  author: {
    fontSize: 10,
    color: 'grey',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: '#ccc',
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon: {
    marginRight: 5,
  },
  addReviewText: {
    fontWeight: 'bold',
  },
});

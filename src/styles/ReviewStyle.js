// Dependencies
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  subcontainer: {
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  description: {
    color: '#000',
  },
  date: {
    fontStyle: 'italic',
    marginTop: 5,
    color: '#000',
  },
  even: {
    backgroundColor: '#fff',
  },
  odd: {
    backgroundColor: '#f3f3f7',
  },
});

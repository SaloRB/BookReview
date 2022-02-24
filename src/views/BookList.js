// Dependencies
import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

// Components
import Header from 'components/Header.android';
import BookRow from 'components/BookRow';
import Loading from 'components/Loading';

// Constants
import { API_URL } from '../constants';

// Styles
import { styles } from 'styles/BookListStyle';

const BookList = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}Books`)
      .then(({ data }) => setBooks(data))
      .catch(err => console.log('My error', err));
    setLoading(false);
  }, [isFocused]);

  return (
    <Loading loading={loading}>
      <View style={styles.container}>
        <Header />

        <TextInput
          style={styles.txtInput}
          placeholder="Search"
          onChangeText={text => setSearchText(text)}
        />

        <FlatList
          data={books.filter(book => {
            return (
              book.title
                .toLocaleLowerCase()
                .indexOf(searchText.toLocaleLowerCase()) > -1
            );
          })}
          renderItem={({ item, index }) => (
            <BookRow book={item} index={index} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </Loading>
  );
};

export default BookList;

// Dependencies
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// Constants
import { IMG_URL } from '../constants';

// Components
import Star from './Star';

// Styles
import { styles } from 'styles/BookRowStyle';

const BookRow = ({ book, index, navigation }) => {
  const { id, title, author, image, rating } = book;

  return (
    <View
      key={index}
      style={[styles.row, index % 2 === 0 ? styles.even : styles.odd]}>
      <View style={styles.edges}>
        <Image source={{ uri: `${IMG_URL}${image}` }} style={styles.image} />
      </View>
      <View style={styles.bookContainer}>
        <View style={styles.titleBook}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{`de ${author}`}</Text>
        </View>
        <Star rating={rating} />
      </View>
      <View style={styles.edges}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Info', {
              book: { id, title, author, image },
            });
          }}>
          <Text>Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookRow;

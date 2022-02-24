// Dependencies
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// Constants
import { IMG_URL } from '../constants';

// Components
import Star from 'components/Star';

// Styles
import { styles } from 'styles/BookInfoStyle';

const BookInfo = ({ route, navigation }) => {
  const { title, author, image, rating, id } = route.params.book;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: `${IMG_URL}${image}`,
          }}
          style={styles.image}
        />

        <View style={styles.titleBook}>
          <Text>{title}</Text>
          <Text style={styles.author}>{author}</Text>
          <Star rating={rating} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('reviews', { id });
            }}>
            <Text>Book Review</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BookInfo;

// Dependencies
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

// Constants
import { IMG_URL, API_URL } from '../constants';

// Components
import Star from 'components/Star';
import Loading from 'components/Loading';
import Review from 'components/Review';

// Styles
import { styles } from 'styles/BookInfoStyle';

const BookInfo = ({ route, navigation }) => {
  const { title, author, image, id } = route.params.book;
  const [newRating, setNewRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}Books/${id}/reviews`)
      .then(response => setReviews(response.data.sort((a, b) => b.id - a.id)))
      .catch(err => console.log('My error', err));

    axios
      .get(`${API_URL}Books/${id}`)
      .then(response => setNewRating(response.data.rating))
      .catch(err => console.log('My error', err));
    setLoading(false);
  }, [id, isFocused]);

  return (
    <Loading loading={loading}>
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
            <Star rating={newRating} />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('reviews', { id });
              }}>
              <Icon name="plus" style={styles.plusIcon} />
              <Text style={styles.addReviewText}>Add Review</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={reviews}
          renderItem={({ item, index }) => (
            <Review review={item} index={index} />
          )}
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            setLoading(true);
            axios
              .get(`${API_URL}Books/${id}/reviews`)
              .then(response =>
                setReviews(response.data.sort((a, b) => b.id - a.id)),
              )
              .catch(err => console.log('My error', err));

            axios
              .get(`${API_URL}Books/${id}`)
              .then(response => setNewRating(response.data.rating))
              .catch(err => console.log('My error', err));
            setLoading(false);
            setRefreshing(false);
          }}
          keyExtractor={review => review.id}
        />
      </View>
    </Loading>
  );
};

export default BookInfo;

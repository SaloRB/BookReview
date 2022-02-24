// Dependencies
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

// Components
import Loading from 'components/Loading';

// Styles
import { styles } from 'styles/AddReviewStyle';

// Constants
import { API_URL } from '../constants';

const AddReview = ({ route, navigation }) => {
  const [name, setName] = useState(null);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);

  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  async function submitReview() {
    if (!review) {
      Alert.alert('Review', 'Please add a Review', [{ text: 'Ok' }]);
      return;
    }

    setLoading(true);

    const data = {
      userName: name,
      rating: rating,
      date: new Date().toISOString(),
      description: review,
      bookId: route.params.id,
    };

    try {
      await axios.post(`${API_URL}Reviews`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      navigation.navigate('List', { reload: true });
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }

  return (
    <Loading loading={loading}>
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.root}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}>
            <Icon name="close" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.addReview}>Book Review</Text>
          <TextInput
            style={styles.input}
            placeholder={'Name (optional)'}
            value={name}
            onChangeText={value => setName(value)}
          />
          <Text style={styles.rating}>Your rating:</Text>
          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => {
              return (
                <TouchableOpacity
                  style={styles.starButton}
                  key={i}
                  onPress={() => setRating(i)}>
                  <Icon
                    name="star"
                    size={50}
                    color={rating >= i ? '#ffd64c' : '#ccc'}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <TextInput
            style={[styles.input, styles.height]}
            placeholder="Review"
            onChangeText={value => setReview(value)}
            multiline={true}
            numberOfLines={5}
          />
          <TouchableOpacity style={styles.submitButton} onPress={submitReview}>
            <Text style={styles.submitButtonText}>Submit Review</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </Loading>
  );
};

export default AddReview;

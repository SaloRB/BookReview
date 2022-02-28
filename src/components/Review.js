// Dependencies
import React from 'react';
import { View, Text } from 'react-native';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

TimeAgo.addDefaultLocale(en);

// Components
import Star from 'components/Star';

// Styles
import { styles } from 'styles/ReviewStyle';

function Review({ review, index }) {
  const { userName, rating, description, date } = review;

  return (
    <View
      style={[styles.container, index % 2 === 0 ? styles.even : styles.odd]}>
      <View style={styles.subcontainer}>
        <View style={styles.header}>
          <Text style={styles.userName}>{userName || 'Anonymous'}</Text>
          <Star rating={rating} />
        </View>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.date}>
          {new TimeAgo('en-US').format(new Date(date))}
        </Text>
      </View>
    </View>
  );
}

export default Review;

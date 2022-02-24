// Dependencies
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Styles
import { styles } from 'styles/StarStyle';

const Star = ({ rating }) => {
  const TOTAL_STARS = [0, 1, 2, 3, 4];

  return (
    <View style={styles.stars}>
      {TOTAL_STARS.map((star, i) => {
        const color = rating > star ? '#FFD64C' : 'grey';
        return <Icon name="star" color={color} key={i} />;
      })}
    </View>
  );
};

export default Star;

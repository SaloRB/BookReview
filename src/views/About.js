// Dependencies
import React from 'react';
import { ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Styles
import { styles } from 'styles/AboutStyle';

const About = () => {
  return (
    <ScrollView style={styles.view}>
      <Text style={styles.header}>About Book Review</Text>

      <Icon name="book-open" color="black" size={100} style={styles.icon} />

      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi
        aliquam quo est officiis nostrum nam eaque veniam nulla molestias.
      </Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
        assumenda veniam? Alias sit eveniet numquam et qui nesciunt dolores
        culpa!
      </Text>
    </ScrollView>
  );
};

export default About;

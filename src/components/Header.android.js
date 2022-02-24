// Dependencies
import React from 'react';
import {View, Text, Image} from 'react-native';

// Styles
import HeaderStyle from 'styles/HeaderStyle';

// Assets
import bookImage from 'assets/book.png';

export default () => (
  <View style={HeaderStyle.view}>
    <Image style={HeaderStyle.image} source={bookImage} />
    <Text style={HeaderStyle.header}>Book Review</Text>
  </View>
);

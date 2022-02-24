// Dependencies
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

// Styles
import { styles } from 'styles/LoadingStyle';

function Loading({ loading, children }) {
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return children;
}

export default Loading;

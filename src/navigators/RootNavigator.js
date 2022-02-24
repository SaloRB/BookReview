// Dependencies
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Views
import AddReview from 'views/AddReview';

// Navigators
import TabNavigator from 'navigators/TabNavigator';

const RootNavigator = createNativeStackNavigator();

function Root() {
  return (
    <NavigationContainer>
      <RootNavigator.Navigator mode="modal" headerMode="none">
        <RootNavigator.Screen
          name="root"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <RootNavigator.Screen
          name="reviews"
          component={AddReview}
          options={{ headerShown: false }}
        />
      </RootNavigator.Navigator>
    </NavigationContainer>
  );
}

export default Root;

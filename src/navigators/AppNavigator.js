// Dependencies
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Views
import BookInfo from 'views/BookInfo';
import BookList from 'views/BookList';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: 'Book Info',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        headerTitleColor: {
          color: 'white',
        },
      }}>
      <Stack.Screen
        name="List"
        component={BookList}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Info" component={BookInfo} />
    </Stack.Navigator>
  );
}

export default AppNavigator;

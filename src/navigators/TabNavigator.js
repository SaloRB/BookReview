// Dependencies
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Views
import About from 'views/About';

// Navigators
import AppNavigator from 'navigators/AppNavigator';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'About') {
            iconName = 'info-circle';
          }

          return <Icon name={iconName} size={23} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'lightgray',
        tabBarActiveBackgroundColor: 'lightgray',
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={AppNavigator} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}

export default TabNavigator;

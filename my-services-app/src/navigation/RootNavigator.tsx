import React from 'react';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ServiceDetailScreen from '../screens/ServiceDetailScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';

export type ServicesStackParamList = {
  Services: undefined;
  ServiceDetail: { serviceId: string };
};

export type RootTabParamList = {
  Home: undefined;
  ServicesStack: undefined;
  About: undefined;
  Contact: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();
const ServicesStack = createNativeStackNavigator<ServicesStackParamList>();

function ServicesStackNavigator() {
  return (
    <ServicesStack.Navigator>
      <ServicesStack.Screen name="Services" component={ServicesScreen} options={{ title: 'Services' }} />
      <ServicesStack.Screen name="ServiceDetail" component={ServiceDetailScreen} options={{ title: 'Details' }} />
    </ServicesStack.Navigator>
  );
}

export default function RootNavigator() {
  const paperTheme = useTheme();

  const navTheme = {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      primary: paperTheme.colors.primary,
      background: paperTheme.colors.background,
      card: paperTheme.colors.elevation.level2,
      text: paperTheme.colors.onSurface,
      border: paperTheme.colors.outline,
      notification: paperTheme.colors.secondary,
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            const iconName =
              route.name === 'Home'
                ? 'home-variant'
                : route.name === 'ServicesStack'
                ? 'briefcase-outline'
                : route.name === 'About'
                ? 'information-outline'
                : 'email-outline';
            return <MaterialCommunityIcons name={iconName as any} color={color} size={size} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Tab.Screen name="ServicesStack" component={ServicesStackNavigator} options={{ title: 'Services' }} />
        <Tab.Screen name="About" component={AboutScreen} options={{ title: 'About' }} />
        <Tab.Screen name="Contact" component={ContactScreen} options={{ title: 'Contact' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
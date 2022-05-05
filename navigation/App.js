import React from 'react';
import {
  NavigationContainer,
  createStackNavigator
} from '@react-navigation/native'
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen
            component={MainNavigator}
            name="Main"
            navigationKey="main"
          />

          <Stack.Screen
            component={AuthNavigator}
            name="Auth"
            navigationKey="auth"
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
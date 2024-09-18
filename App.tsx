import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './auth/AuthContext';
import AppNavigator from './components/Navigation';

export default function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}

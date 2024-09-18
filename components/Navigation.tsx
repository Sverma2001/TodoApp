import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useAuth} from '../auth/AuthContext';
import Home from './Home';
import Login from '../screens/Login';
import Signup from '../screens/SignUp';
import AddTasks from '../screens/AddTasks';
import CustomDrawerContent from './CustomDrawerContent';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerContent = (props: any) => <CustomDrawerContent {...props} />;

function AppNavigator(): React.JSX.Element {
  const {isAuthenticated} = useAuth();

  if (!isAuthenticated) {
    return (
      <Drawer.Navigator
        initialRouteName="SignUp"
        drawerContent={DrawerContent}
        screenOptions={{
          headerStyle: {backgroundColor: 'purple'},
          headerTintColor: 'white',
          drawerStyle: {backgroundColor: 'white'},
          drawerActiveTintColor: 'purple',
          drawerInactiveTintColor: 'grey',
        }}>
        <Drawer.Screen name="SignUp" component={Signup} />
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
    );
  }

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={DrawerContent}
      screenOptions={{
        headerStyle: {backgroundColor: 'purple'},
        headerTintColor: 'white',
        drawerStyle: {backgroundColor: 'white'},
        drawerActiveTintColor: 'purple',
        drawerInactiveTintColor: 'grey',
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="AddTasks" component={AddTasks} />
    </Drawer.Navigator>
  );
}

export default AppNavigator;

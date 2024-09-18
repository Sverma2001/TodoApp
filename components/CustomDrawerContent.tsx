import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useAuth} from '../auth/AuthContext';

function CustomDrawerContent(props: any) {
  const {isAuthenticated, username, logout} = useAuth();

  const handleLogout = async () => {
    await logout();
    props.navigation.navigate('SignUp');
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image
          source={require('../assets/images/hacker.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>
          Welcome {isAuthenticated ? username : 'Guest'}
        </Text>
      </View>

      <DrawerItemList {...props} />

      {isAuthenticated ? (
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      ) : null}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    height: 180,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    marginTop: -24,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.4,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    zIndex: 1,
  },
  logoutButton: {
    margin: 20,
    backgroundColor: 'red',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomDrawerContent;

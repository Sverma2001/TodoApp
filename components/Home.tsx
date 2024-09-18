/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import Tasks from './Tasks';
function Home(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, width: '100%'}}>
        <Tasks />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeMessage: {
    color: 'green',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    fontSize: 25,
    margin: 15,
  },
  text: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
  },
});

export default Home;

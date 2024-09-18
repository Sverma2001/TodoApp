import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

function Signup(props: any): React.JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useFocusEffect(
    useCallback(() => {
      setUsername('');
      setPassword('');
      setError('');
    }, [])
  );

  const handleSignUp = async () => {
    if (username && password) {
      try {
        await AsyncStorage.setItem(
          'userCredentials',
          JSON.stringify({ username, password })
        );
        props.navigation.navigate('Login');
      } catch (e) {
        setError('Error saving user data.');
        console.error('Error saving user data', e);
      }
    } else {
      setError('Please enter both username and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sign Up</Text>

      <TextInput
        style={styles.textInput}
        value={username}
        textContentType="username"
        placeholder="Enter Your Username..."
        onChangeText={value => setUsername(value)}
        placeholderTextColor="black"
      />

      <TextInput
        style={styles.textInput}
        value={password}
        textContentType="password"
        secureTextEntry={true}
        placeholder="Enter Your Password..."
        onChangeText={value => setPassword(value)}
        placeholderTextColor="black"
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity onPress={handleSignUp} style={styles.signUpButton}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('Login')}
        style={styles.loginLink}
      >
        <Text style={styles.loginText}>Already a user? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },

  headerText: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 30,
  },

  textInput: {
    width: '100%',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'purple',
    backgroundColor: 'white',
  },

  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 15,
  },

  signUpButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  loginLink: {
    marginTop: 20,
  },

  loginText: {
    color: '#6200EE',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default Signup;

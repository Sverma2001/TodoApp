import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {useAuth} from '../auth/AuthContext';
import {useFocusEffect} from '@react-navigation/native';

function Login(props: any): React.JSX.Element {
  const {login} = useAuth();
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

  const handleLogin = async () => {
    try {
      const storedCredentials = await AsyncStorage.getItem('userCredentials');
      if (storedCredentials) {
        const {username: storedUsername, password: storedPassword} =
          JSON.parse(storedCredentials);
        if (username === storedUsername && password === storedPassword) {
          await login(username, password);
          props.navigation.navigate('Home', {username});
        } else {
          setError('Invalid username or password');
        }
      } else {
        setError('No account found. Please sign up first.');
      }
    } catch (e) {
      console.error('Error loading user data', e);
      setError('Error logging in');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>User Login</Text>

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

      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('SignUp')}
        style={styles.signupLink}
      >
        <Text style={styles.signupText}>Not a user? Sign Up</Text>
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
    color: 'black',
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

  loginButton: {
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

  signupLink: {
    marginTop: 20,
  },

  signupText: {
    color: '#6200EE',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default Login;

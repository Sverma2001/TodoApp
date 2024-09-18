/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Login from './components/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Alert,
  Image,
  Button,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableNativeFeedback,
  Platform,
  ActivityIndicator,
  Modal,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import WebView from 'react-native-webview';
import Signup from './components/SignUp';

// Sign Up Form

// function App(): React.JSX.Element {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showDetails, setShowDetails] = useState(false);

//   const printDetails = () => {
//     setName(name);
//     setEmail(email);
//     setPassword(password);
//     setShowDetails(true);
//   };

//   const clearData = () => {
//     setShowDetails(false);
//     setName('');
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <View>
//       <Text style={styles.heading}>Sign Up Form</Text>
//       <TextInput
//         style={styles.textBox}
//         value={name}
//         onChangeText={value => setName(value)}
//         placeholder="Enter Your Name"
//       />
//       <TextInput
//         style={styles.textBox}
//         value={email}
//         onChangeText={value => setEmail(value)}
//         placeholder="Enter Your Email Id"
//       />
//       <TextInput
//         style={styles.textBox}
//         value={password}
//         secureTextEntry={true}
//         onChangeText={value => setPassword(value)}
//         placeholder="Enter Your Password"
//       />
//       <View style={[styles.buttons, {marginBottom: 0}]}>
//         <Button
//           title="Print Details"
//           color="green"
//           onPress={() => printDetails()}
//         />
//       </View>
//       <View style={styles.buttons}>
//         <Button title="Clear Details" onPress={() => clearData()} />
//       </View>
//       <View>
//         {showDetails ? (
//           <View>
//             <Text style={styles.inputDetails}>Form Input Details</Text>
//             <Text style={styles.data}>Name: {name}</Text>
//             <Text style={styles.data}>Email: {email}</Text>
//             <Text style={styles.data}>Password: {password}</Text>
//           </View>
//         ) : null}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   textBox: {
//     padding: 10,
//     fontSize: 20,
//     margin: 15,
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   heading: {
//     marginTop: 20,
//     marginBottom: 20,
//     fontSize: 35,
//     color: 'red',
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   buttons: {
//     margin: 15,
//   },
//   data: {
//     marginRight: 5,
//     fontSize: 20,
//     color: 'goldenrod',
//     textAlign: 'center',
//   },
//   inputDetails: {
//     margin: 10,
//     fontSize: 25,
//     textAlign: 'center',
//     color: 'blue',
//     fontWeight: 'bold',
//   },
// });

// UnMounting

// function App(): React.JSX.Element {
//   const [showModal, setModal] = useState(false);
//   const [count, setCount] = useState(0);
//   return (
//     <View>
//       <Text style={{fontSize: 25}}>
//         This is Test Component for unmounting {count}
//       </Text>
//       <Button title="Toggle" onPress={() => setModal(!showModal)} />
//       <Button
//         title="Increase Count"
//         onPress={() => setCount(() => count + 1)}
//       />

//       {showModal ? <User modal={{showModal, count}} /> : null}
//     </View>
//   );
// }

// function User({ modal }: { modal: { showModal: boolean; count: number } }): React.JSX.Element {
//   useEffect(() => {
//     console.warn('Mounted');
//     return () => {
//       console.warn('Unmounted');
//     };
//   }, [modal.count]);

//   return (
//     <View>
//       <Text>This is Test Component for unmounting</Text>
//     </View>
//   );
// }

// Flex

// function App(): React.JSX.Element {
//   return (
//     <View style={{
//       flex: 1,
//     }}>
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: 'red',
//         }}
//       />
//       <View
//         style={{
//           flex: 2,
//           flexDirection: 'row',
//         }}
//       >
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: 'green',
//           }}
//         />
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: 'blue',
//           }}
//         />
//       </View>
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: 'yellow',
//         }}
//       />
//     </View>
//   );
// }

// Touchable Highlight

// function App(): React.JSX.Element {
//   return (
//     <View>
//       <TouchableHighlight>
//         <Text style={[styles.button, styles.primary]} >Primary</Text>
//       </TouchableHighlight>
//       <TouchableHighlight>
//         <Text style={[styles.button, styles.success]}>Success</Text>
//       </TouchableHighlight>
//       <TouchableHighlight>
//         <Text style={[styles.button, styles.warning]}>Warning</Text>
//       </TouchableHighlight>
//       <TouchableHighlight>
//         <Text style={[styles.button, styles.danger]}>Danger</Text>
//       </TouchableHighlight>
//       <TouchableHighlight>
//         <Text style={[styles.button,styles.secondary]}>Secondary</Text>
//       </TouchableHighlight>
//       <TouchableHighlight>
//         <Text style={[styles.button]}>Info</Text>
//       </TouchableHighlight>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: 'grey',
//     padding: 15,
//     margin: 15,
//     borderRadius: 10,
//     shadowColor: 'black',
//     elevation: 5,
//     fontSize: 25,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: 'white',
//   },

//   success: {
//     backgroundColor: 'green',
//   },
//   warning: {
//     color: 'black',
//     backgroundColor: 'gold',
//   },
//   primary: {
//     backgroundColor: 'blue',
//   },
//   danger: {
//     backgroundColor: 'red',
//   },
//   secondary: {
//     color: 'black',
//     backgroundColor: 'skyblue',
//   },
// });

// Touchable Methods

// function App(): React.JSX.Element {
//   return (
//     <View style={styles.container}>
//       <TouchableHighlight
//         style={styles.button}
//         underlayColor="red"
//         activeOpacity={0.6}
//         onPress={() => console.log('Pressed Primary Button')}>
//         <Text style={styles.text}>Primary</Text>
//       </TouchableHighlight>

//       <TouchableOpacity
//         style={[styles.button, styles.success]}
//         activeOpacity={0.6}
//         onPress={() => console.log('Pressed Success Button')}>
//         <Text style={styles.text}>Success</Text>
//       </TouchableOpacity>

//       {Platform.OS === 'android' && (
//         <TouchableNativeFeedback
//           background={TouchableNativeFeedback.Ripple('blue', true)}
//           onPress={() => console.log('Pressed Danger Button')}>
//           <View style={[styles.button, styles.danger]}>
//             <Text style={styles.text}>Danger</Text>
//           </View>
//         </TouchableNativeFeedback>
//       )}

//       <TouchableWithoutFeedback
//         onPress={() => {
//           console.log('Touched without feedback');
//           Keyboard.dismiss();
//         }}>
//         <View style={[styles.button, styles.info]}>
//           <Text style={styles.text}>Info</Text>
//         </View>
//       </TouchableWithoutFeedback>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     padding: 15,
//     margin: 15,
//     borderRadius: 10,
//     width: 200,
//     alignItems: 'center',
//     backgroundColor: 'blue',
//   },
//   text: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   success: {
//     backgroundColor: 'green',
//   },
//   danger: {
//     backgroundColor: 'red',
//   },
//   info: {
//     backgroundColor: 'gray',
//   },
// });

//Radio Button

// function App(): React.JSX.Element {
//   const [selectedRadio, setSelectedRadio] = useState(1);
//   return (
//     <View style={styles.main}>
//       <TouchableHighlight
//         onPress={() => setSelectedRadio(1)}
//         underlayColor={'white'}>
//         <View style={styles.radioWrapper}>
//           <View style={styles.radio}>
//             {selectedRadio === 1 ? <View style={styles.radioBg} /> : null}
//           </View>
//           <Text style={styles.radioText}>Radio 1</Text>
//         </View>
//       </TouchableHighlight>

//       <TouchableHighlight
//         onPress={() => setSelectedRadio(2)}
//         underlayColor={'white'}>
//         <View style={styles.radioWrapper}>
//           <View style={styles.radio}>
//             {selectedRadio === 2 ? <View style={styles.radioBg} /> : null}
//           </View>
//           <Text style={styles.radioText}>Radio 2</Text>
//         </View>
//       </TouchableHighlight>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   radio: {
//     width: 40,
//     height: 40,
//     borderColor: 'skyblue',
//     borderWidth: 2,
//     borderRadius: 20,
//     margin: 10,
//   },

//   radioText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },

//   radioBg: {
//     backgroundColor: 'skyblue',
//     height: 28,
//     width: 28,
//     margin: 4,
//     borderRadius: 20,
//   },

//   radioWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
// });

// Activity Indicator

// function App(): React.JSX.Element {
//   const [showIndicator, setShowIndicator] = useState(false);

//   setTimeout(() => {
//     setShowIndicator(false);
//   }, 2000);

//   return (
//     <View style={styles.main}>
//       <ActivityIndicator
//         animating={showIndicator}
//         size={100}
//         style={{margin: 25}}
//         color={'red'}
//       />
//       <View>
//         <Button title="Show Loader" onPress={() => setShowIndicator(true)} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// Modal

// function App(): React.JSX.Element {
//   const [showModal, setShowModal] = useState(true);

//   return (
//     <View style={styles.main}>
//       <StatusBar backgroundColor={'orange'} barStyle="light-content"/>
//       <Modal transparent={true} visible={showModal} animationType="fade">
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>This is React Native Modal</Text>
//             <Button title="Close Modal" onPress={() => setShowModal(false)} />
//           </View>
//         </View>
//       </Modal>
//       <View>
//         <Button title="Open Modal" onPress={() => setShowModal(true)} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//   },

//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   modalView: {
//     backgroundColor: '#fff',
//     padding: 25,
//     borderRadius: 10,
//     shadowColor: 'black',
//     elevation: 5,
//   },

//   modalText: {
//     fontSize: 25,
//     margin: 10,
//   },
// });

// Webview

// function App(): React.JSX.Element {
//   return (
//     <WebView source={{uri: 'https://reactnative.dev/'}} />
//   );
// }

// Stack Navigator

// const Stack = createNativeStackNavigator();
// function App(): React.JSX.Element {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: {backgroundColor: 'orange'},
//           headerTintColor: 'black',
//           headerTitleStyle: {fontWeight: 'bold'},
//         }}>
//         <Stack.Screen
//           name="Login"
//           component={Login}
//           options={{
//             headerRight: () => <SearchBar />,
//             headerTitle: 'Login Page',
//             headerStyle: {backgroundColor: 'orange'},
//             headerTintColor: 'black',
//             headerTitleStyle: {fontWeight: 'bold'},
//           }}
//         />
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{
//             headerRight: () => <RightButton />,
//             title: 'Home Page',
//             headerStyle: {backgroundColor: 'gold'},
//             headerTintColor: 'black',
//             headerTitleStyle: {fontWeight: 'bold'},
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// function RightButton(): React.JSX.Element {
//   return (
//     <Button
//       title="Right"
//       onPress={() => console.warn('Right Button Pressed')}
//     />
//   );
// }

// function SearchBar(): React.JSX.Element {
//   return (
//     <TextInput
//       style={styles.textInput}
//       placeholder="Search..."
//       onChangeText={value => console.warn(value)}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   textInput: {fontSize: 18, marginRight: 15},
// });

// Tab Navigator

// const Tab = createMaterialTopTabNavigator();
// const Tab = createBottomTabNavigator();
// function App(): React.JSX.Element {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           headerStyle: {backgroundColor: 'orange'},
//           headerTintColor: 'black',
//           headerTitleStyle: {fontWeight: 'bold'},
//         }}>
//         <Tab.Screen
//           name="Login"
//           component={Login}
//           options={{
//             headerTitle: 'Login Page',
//             headerStyle: {backgroundColor: 'orange'},
//             headerTintColor: 'black',
//             headerTitleStyle: {fontWeight: 'bold'},
//           }}
//         />
//         <Tab.Screen
//           name="Sign Up"
//           component={Signup}
//           options={{
//             headerStyle: {backgroundColor: 'orange'},
//             headerTintColor: 'black',
//             headerTitleStyle: {fontWeight: 'bold'},
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// Flatlist with API data

// function App(): React.JSX.Element {
//   const [data, setData] = useState<any[]>([]);

//   const APIdata = async () => {
//     const url = 'https://fakestoreapi.com/products';
//     let result = await fetch(url);
//     let jsonResult = await result.json();
//     setData(jsonResult);
//   };

//   useEffect(() => {
//     APIdata();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {data.length ? (
//         <FlatList
//           ListHeaderComponent={
//             <Text style={styles.header}>Flatlist with API data</Text>
//           }
//           data={data}
//           renderItem={({item}) => (
//             <View style={styles.items}>
//               <Text style={styles.id}>{item.id}</Text>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.category}>Category: {item.category}</Text>
//               <Text style={styles.price}>Price: ${item.price}</Text>
//               <Image
//                 style={{width: 100, height: 100, marginBottom: 10}}
//                 source={{uri: item.image}}
//               />
//               <Button title="Add to Cart" color="blue" onPress={() => Alert.alert('Success', `${item.title} added to cart`)}/>
//             </View>
//           )}
//           keyExtractor={item => item.id.toString()}
//         />
//       ) : null}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   items: {
//     padding: 10,
//     margin: 10,
//     borderColor: 'black',
//     borderWidth: 1,
//   },
//   id: {
//     backgroundColor: 'orange',
//     fontSize: 18,
//     padding: 5,
//     fontWeight: 'bold',
//     fontStyle: 'italic',
//   },
//   title: {
//     color: 'black',
//     fontSize: 20,
//     padding: 5,
//     fontWeight: 'bold',
//   },
//   price: {
//     fontSize: 20,
//     marginBottom: 10,
//     fontWeight: 'bold',
//     color: 'green',
//   },
//   header: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: 'red',
//     margin: 10,
//     textAlign: 'center',
//   },
//   category: {
//     color: 'black',
//     fontSize: 18,
//     padding: 5,
//     marginBottom: 10,
//     fontStyle: 'italic',
//     backgroundColor: 'pink',
//   },
// });

// CRUD

// function App(): React.JSX.Element {
//   const [data, setData] = useState<any[]>([]);
//   const [selectedUser, setSelectedUser] = useState<any>(null);
//   const [showModal, setShowModal] = useState(false);
//   const [transparency, setTransparency] = useState(false);

//   const ApiData = async () => {
//     const url = 'http://10.0.2.2:3000/users';
//     const users = await fetch(url);
//     const result = await users.json();
//     result && setData(result);
//   };

//   const deleteUser = async (id: string) => {
//     const url = `http://10.0.2.2:3000/users/${id}`;
//     await fetch(url, {
//       method: 'DELETE',
//     });
//     ApiData();
//   };

//   const updateUser = (user: any) => {
//     setShowModal(true);
//     setSelectedUser(user);
//     setTransparency(false);
//   };

//   const searchUser = async (value: string) => {
//     const url = `http://10.0.2.2:3000/users?name_${value}`;
//     const response = await fetch(url);
//     const result = await response.json();
//     setData(result);
//   };

//   useEffect(() => {
//     ApiData();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>User List</Text>
//       <TextInput
//         placeholder="Search"
//         style={styles.searchBar}
//         onChangeText={value => searchUser(value)}
//       />
//       <View style={styles.heading}>
//         <View style={styles.text}>
//           <Text style={styles.title}>Name</Text>
//         </View>
//         <View style={styles.text}>
//           <Text style={styles.title}>Age</Text>
//         </View>
//         <View style={{flex: 2, alignItems: 'center'}}>
//           <Text style={styles.title}>Actions</Text>
//         </View>
//       </View>
//       {data.length
//         ? data.map((item, id) => (
//             <View style={styles.dataWrapper} key={id}>
//               <View style={styles.text}>
//                 <Text style={styles.itemText}>{item.name}</Text>
//               </View>
//               <View style={styles.text}>
//                 <Text style={styles.itemText}>{item.age}</Text>
//               </View>
//               <View style={{flex: 1, margin: 5}}>
//                 <Button title="Delete" onPress={() => deleteUser(item.id)} />
//               </View>
//               <View style={{flex: 1, margin: 5}}>
//                 <Button title="Update" onPress={() => updateUser(item)} />
//               </View>
//             </View>
//           ))
//         : null}
//       <Modal
//         visible={showModal}
//         transparent={transparency}
//         animationType="fade">
//         <UserModal
//           setShowModal={setShowModal}
//           selectedUser={selectedUser}
//           ApiData={ApiData}
//         />
//       </Modal>
//     </View>
//   );
// }

// const UserModal = ({selectedUser, setShowModal, ApiData}: any) => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     if (selectedUser) {
//       setName(selectedUser.name);
//       setAge(selectedUser.age.toString());
//       setEmail(selectedUser.email);
//     }
//   }, [selectedUser]);

//   const updateUser = async () => {
//     const url = `http://10.0.2.2:3000/users/${selectedUser.id}`;
//     const response = await fetch(url, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({name, age, email}),
//     });
//     const result = await response.json();
//     if (result) {
//       Alert.alert('Success', 'User updated successfully');
//       ApiData();
//     }
//     setShowModal(false);
//   };

//   return (
//     <View style={styles.centeredView}>
//       <View style={styles.modalView}>
//         <Text style={styles.header}>Update User</Text>
//         <TextInput
//           value={name}
//           onChangeText={value => setName(value)}
//           style={styles.textInput}
//           placeholder="Enter Name..."
//         />
//         <TextInput
//           value={age}
//           onChangeText={value => setAge(value)}
//           style={styles.textInput}
//           placeholder="Enter Age..."
//         />
//         <TextInput
//           value={email}
//           onChangeText={value => setEmail(value)}
//           style={styles.textInput}
//           placeholder="Enter Email..."
//         />
//         <View style={{marginBottom: 8}}>
//           <Button title="Update" onPress={updateUser} />
//         </View>
//         <Button title="Close" onPress={() => setShowModal(false)} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   modalView: {
//     padding: 20,
//     justifyContent: 'center',
//     borderRadius: 10,
//     backgroundColor: 'lightgreen',
//   },

//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },

//   header: {
//     color: 'red',
//     textAlign: 'center',
//     fontSize: 30,
//     fontWeight: 'bold',
//     margin: 10,
//   },

//   dataWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: 'gold',
//     padding: 2,
//     marginTop: 0,
//     margin: 5,
//   },

//   text: {
//     flex: 1,
//     alignItems: 'center',
//   },

//   searchBar: {
//     fontSize: 18,
//     margin: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 10,
//   },

//   heading: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: 'black',
//     padding: 10,
//     margin: 5,
//   },

//   textInput: {
//     margin: 12,
//     width: 300,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'black',
//   },

//   itemText: {
//     fontSize: 18,
//     marginTop: 10,
//     color: 'black',
//     textAlign: 'center',
//   },

//   title: {
//     fontSize: 19,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//   },
// });

// Async Storage

// function App(): React.JSX.Element {
//   const [user, setUser] = useState('');
//   const setData = async (username: string) => {
//     await AsyncStorage.setItem('name', username);
//     setUser(username);
//     Alert.alert(`${username}'s Data set successfully`);
//   };

//   const getData = async () => {
//     const name = await AsyncStorage.getItem('name');
//     name
//       ? Alert.alert('User Data fetched', name)
//       : Alert.alert('No Data Found');
//   };

//   const removeItem = async () => {
//     await AsyncStorage.removeItem('name');
//     setUser('');
//   };

//   return (
//     <View>
//       <Text style={{textAlign: 'center', fontSize: 25, margin: 25}}>
//         React Native Tutorial | {user}
//       </Text>
//       <View
//         style={{
//           justifyContent: 'center',
//         }}>
//         <Button
//           title="Set Data"
//           onPress={() => setData('Sachin')}
//           color={'black'}
//         />
//         <Button title="Get Data" onPress={getData} color="red" />
//         <Button title="Remove Data" onPress={removeItem} color="green" />
//       </View>
//     </View>
//   );
// }

// import React from 'react';
// // import TabNavigator from './navigation/TabNavigator';
// import HomeScreen from './components/HomeScreen';
// // import DrawerAboutScreen from './screens/DrawerAboutScreen';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';
// const Drawer = createDrawerNavigator();

// function App(): React.JSX.Element {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Settings">
//         <Drawer.Screen name="Settings" component={HomeScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

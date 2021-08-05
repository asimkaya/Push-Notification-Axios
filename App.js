import React, {Component, useState, useEffect} from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';
import OneSignal from 'react-native-onesignal';
import Detail from './Detail';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function Home({navigation}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const api = async () => {
      const result = await axios.get(
        'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations'
      );
      setMovies(result.data.civilizations)
    }
    api();
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('bc1fa09c-3c90-4c45-b289-20a3cc1892ad');
  }, [])
console.log(movies)
  return (
    <View>
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Detail', {
                name: item.name,
                type: item.army_type
              });
            }}>
            <Text style={styles.text}>{item.name} </Text>
            <Text style={styles.text}>{item.expansion}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
// class Home extends Component {
//   constructor() {
//     super();
//     this.state = {
//       movies: [],
//     };
//   }

//   componentDidMount() {
//     this.getData();
//     OneSignal.setLogLevel(6, 0);
//     OneSignal.setAppId('bc1fa09c-3c90-4c45-b289-20a3cc1892ad');
//   }

//   async getData() {
//     let api = await axios.get(
//       'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations',
//     );
//     this.setState({movies: api.data.civilizations});
//     console.log(this.state.movies);
//   }

//   render() {
//     return (
//       <View>
//         <FlatList
//           data={this.state.movies}
//           renderItem={({item}) => (
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => {
//                 this.props.navigation.navigate('Detail', {
//                   name: item.name
//                 });
//               }} >
//               <Text style={styles.text}>{item.name} </Text>
//               <Text style={styles.text}>{item.expansion}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//     );
//   }
// }

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Kingdoms" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'green',
    margin: 5,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    height: 40,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#001636',
    margin: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

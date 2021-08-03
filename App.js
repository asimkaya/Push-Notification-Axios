import React, {Component, useState} from 'react';
import {Text, StyleSheet, View, FlatList, Pressable} from 'react-native';
import axios from 'axios';
import OneSignal from 'react-native-onesignal';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.getData();
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('bc1fa09c-3c90-4c45-b289-20a3cc1892ad');
  }

  async getData() {
    let api = await axios.get(
      'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations',
    );
    this.setState({movies: api.data.civilizations});
    console.log(this.state.movies);
  }

  render() {
    return (
      <NavigationContainer>
        <View>
          <FlatList
            data={this.state.movies}
            renderItem={({item}) => (
              <View style={styles.button}>
                <Text style={styles.text}>{item.name} </Text>
                <Text style={styles.text}>{item.expansion}</Text>
              </View>
            )}
          />
        </View>
      </NavigationContainer>
    );
  }
}

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

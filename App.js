import React, {Component, useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    this.getData();
  }
  async getData() {
    let api = await axios.get('https://reactnative.dev/movies.json');
    this.setState({movies: api.data.movies})
    console.log(this.state.movies)
  }
  render() {
    return (
      <View>
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this.setState({name: 'osman'})}
          title="Press Me"></Button>
        <Text> emre </Text>
      </View>
    );
  }
}

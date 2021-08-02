import React, {Component, useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
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
    this.setState({movies: api.data.movies});
    console.log(this.state.movies);
  }
  render() {
    return (
      <View>
        <FlatList 
          data={this.state.movies}
          renderItem={({item}) => <Text>{item.title} {item.releaseYear}</Text>} />
      </View>
    );
  }
}

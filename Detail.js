import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Detail extends Component {
  constructor() {
    super();
    this.state = {
      name: 'emre',
    };
  }
  
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

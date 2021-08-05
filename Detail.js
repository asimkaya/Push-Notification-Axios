import React from 'react';
import {Text, View} from 'react-native';

function Detail({route, navigation}) {
  const {name} = route.params;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}
export default Detail;

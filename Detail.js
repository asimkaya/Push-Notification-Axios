import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

function Detail({route, navigation}) {
  const {name, type} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.header}>{name}</Text>
        <Image 
          source={require('./assets/img/sword.png')} style={styles.sword} />
      </View>
      <Text style={styles.type}>Army Type</Text>
      <Text style={styles.army}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CECEFF'
  },
  square: {
    width: 300,
    height: 400,
    backgroundColor: '#001636',
    borderRadius: 30
  },
  header: {
    color: '#CFCFCF',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'monospace'
  },
  sword: {
    width: 100,
    height: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20
  },
  type: {
    position: 'absolute',
    color: 'white',
    fontFamily: 'monospace',
    fontSize: 15
  },
  army: {
    position: 'absolute',
    color: 'red',
    fontFamily: 'monospace',
    fontSize: 25,
    paddingTop: 100
  }
})
export default Detail;

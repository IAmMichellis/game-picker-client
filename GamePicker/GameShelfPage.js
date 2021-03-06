'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';

type Props = {};
export default class GameShelfPage extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Game Shelf Page!
        </Text>
      </View>
    );
  }
}
GameShelfPage.options = {
  topBar: {
    title: {
      text: 'Game Shelf'
    }
  },
  bottomTab: {
    text: 'Shelf'
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
},
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
});


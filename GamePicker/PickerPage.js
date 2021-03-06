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
export default class PickerPage extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Picker Page!
        </Text>
      </View>
    );
  }
}

PickerPage.options = {
  topBar: {
    title: {
      text: 'Chooooose'
    }
  },
  bottomTab: {
    text: 'Choose'
  }
};

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


import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class DriveDisplay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Awesome, weve got everything we need to make sure you leave on time!</Text>
        <Text>We will be in touch!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

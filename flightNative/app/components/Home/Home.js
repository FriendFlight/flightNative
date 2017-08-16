import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import FlightInput from './components/FlightInput/FlightInput';
import NotificationPref from './components/NotificationPref/NotificationPref';
import DriveDisplay from './components/DriveDisplay/DriveDisplay';

export default class Home extends Component
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Login"
          color="lightblue"/>
        <Text>Future logo</Text>
        <FlightInput />
        <NotificationPref />
        <DriveDisplay />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

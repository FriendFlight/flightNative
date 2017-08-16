import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login/Login';
import FlightInput from './components/FlightInput/FlightInput';
import NotificationPref from './components/NotificationPref/NotificationPref';
import DriveDisplay from './components/DriveDisplay/DriveDisplay';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>RideMindur</Text>
        <Login />
        <FlightInput />
        <NotificationPref />
        <DriveDisplay />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login/Login';
import FlightInput from './components/FlightInput/FlightInput';
import NotificationPref from './components/NotificationPref/NotificationPref';
import DriveDisplay from './components/DriveDisplay/DriveDisplay';

export default class App extends Component {
  constructor()
  {
    super();
    this.state={
      user:'Austin',
      notification:'yes',
      drive:'yes',
      display:'none'
    }
  }

  render() {
    const flightInput=(<FlightInput />)
    const notificationPref=(<NotificationPref />)
    const driveDisplay=(<DriveDisplay />)
    return (
      <View style={styles.container}>
        <Text>RideMindur</Text>
        <Login />
        {this.state.user?flightInput:null}
        {this.state.notification?notificationPref:null}
        {this.state.drive?driveDisplay:null}
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

import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
      movies:[]
    }
    this.gmovies=this.gmovies.bind(this);
  }
  gmovies()
  {
    fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.movies[0].title);
      })
    .catch((error) => {
        console.log(error);
    });
  }

  render() {
    const flightInput=(<FlightInput />)
    const notificationPref=(<NotificationPref />)
    const driveDisplay=(<DriveDisplay />)
    return (
      <View style={styles.container}>
        <Text>RideMindur</Text>
        <Login />
        <Button
          onPress={this.gmovies}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>{this.state.movies}</Text>
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

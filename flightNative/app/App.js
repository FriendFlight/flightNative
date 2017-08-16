import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import config from './config.js';

import Login from './components/Login/Login';
import FlightInput from './components/FlightInput/FlightInput';
import DriveDisplay from './components/DriveDisplay/DriveDisplay';

export default class App extends Component {
  constructor()
  {
    super();
    this.state={
      user:'Austin',
      notification:'yes',
      drive:'yes',
      index:0
    }
    this.getFlight=this.getFlight.bind(this);
  }
  getFlight(flightLet, flightNum, year, month, day, location)
  {
    fetch(`http://192.168.3.74:3001/api/flightAPI/${flightLet}/${flightNum}/${year}/${month}/${day}/${location}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({flight:responseJson})
        if((responseJson.directions.routes[0].legs[0].distance.value / 1760) > 100)
        {
          this.setState({index:1})
          fetch(`/api/new-location/${location}/${res.data.info[0].appendix.airports[1].name}`)
          .then((res) => res.json())
          .then((resJson) =>
          {
            if(resJson.directions.length===0)
              return
            let newFlight = Object.assign({}, responseJson, resJson)
            this.setState({flight:newFlight})
          })
      }})
      .catch((error) => {
        console.error("flightb", error);
      });
  }

  render() {
    const flightInput=(<FlightInput flight={this.getFlight}/>)
    const driveDisplay=(<DriveDisplay flight={this.state.flight} index={this.state.index}/>)
    return (
      <View style={styles.container}>
        <Text>RooMinder</Text>
        <Login />
        <Text>{this.state.movies}</Text>
        {this.state.user?flightInput:null}
        {this.state.flight?driveDisplay:null}
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

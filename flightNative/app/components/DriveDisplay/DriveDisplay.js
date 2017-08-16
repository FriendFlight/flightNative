import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class DriveDisplay extends Component {
  render() {
    console.log("flight", this.props.flight);
    return (
      <View style={styles.container}>
        <Text>Awesome, weve got everything we need to make sure you leave on time!</Text>
        <Text>We will be in touch!</Text>
        <Text>It looks like your drive will take about {this.props.flight.directions.routes[0].legs[0].duration.text} and be about {this.props.flight.directions.routes[0].legs[0].distance.text}</Text>
        <Text>Here is the fastest route to {this.props.flight.info[0].appendix.airports[this.props.index].name} from your location. </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

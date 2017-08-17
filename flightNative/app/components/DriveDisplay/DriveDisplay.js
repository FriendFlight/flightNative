import React, {Component} from 'react';
import { StyleSheet, Text, View, Linking, Button, WebView} from 'react-native';
export default class DriveDisplay extends Component {
  render() {
    const map=(<WebView style={{width:400, height:500, marginBottom:20}}
                        source={{uri:`https://www.google.com/maps/dir/Current+Location/${this.props.flight.directions.routes[0].legs[0].end_location.lat},${this.props.flight.directions.routes[0].legs[0].end_location.lng}`}}
                  />);
    return (
      <View style={styles.container}>
        <Text>Awesome, weve got everything we need to make sure you leave on time!</Text>
        <Text>We will be in touch!</Text>
        <Text>It looks like your drive will take about {this.props.flight.directions.routes[0].legs[0].duration.text} and be about {this.props.flight.directions.routes[0].legs[0].distance.text}</Text>
        <Text>Here is the fastest route to {this.props.flight.info[0].appendix.airports[this.props.index].name} from your location. </Text>
        {this.props.flight?map:null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
  },
});

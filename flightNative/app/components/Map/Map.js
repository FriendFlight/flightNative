import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
export default class Map extends Component {

/*        {this.state.markers.map(marker => (
          <MapView.Marker
          coordinate={this.props.flight.directions.routes[0].legs[0].end_location.lat, this.props.flight.directions.routes[0].legs[0].end_location.lng}
          title={this.props.flight.info[0].appendix.airports[this.props.index].name}
          />
        ))}*/

  render() {
    const marker={lat: this.props.flight.directions.routes[0].legs[0].end_location.lat,
                  lng: this.props.flight.directions.routes[0].legs[0].end_location.lng}
    const mark=(<MapView.Marker
                coordinate={marker}
                title="airport"
              />)
    console.log(marker, this.props.flight.directions.routes[0].legs[0].end_location.lat, this.props.flight.directions.routes[0].legs[0].end_location.lng);
    return (
      <View style={styles.container}>
        <MapView style ={styles.map}
          initialRegion={{
            latitude: this.props.flight.directions.routes[0].legs[0].end_location.lat,
            longitude: this.props.flight.directions.routes[0].legs[0].end_location.lng,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
        />
        {marker?mark:null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  map:{
    width: 350,
    height:300
  }
});

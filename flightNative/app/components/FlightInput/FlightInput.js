import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import DatePicker from 'react-native-datepicker';


export default class FlightInput extends Component {
  constructor()
  {
    super();
    this.state =
    {
      flight: '',
      date:'',
      location: 'hi'
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Enter the final flight number for the person that you are picking up</Text>
        <TextInput
          style={{height: 40, width: 120, padding: 10, borderColor: 'gray', borderWidth: 2}}
          onChangeText={(flight) => this.setState({flight})}
          placeholder ="Flight Number"/>
          <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="MM/DD/YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: 0,
              top: 4,
              marginRight: 0
            },
            dateInput: {
              marginRight: 36
            }
          }}
          onDateChange={
            (date) => {this.setState({date: date})
          }}
          />
        <Text>Your location</Text>
        <Text>Manually enter Address</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

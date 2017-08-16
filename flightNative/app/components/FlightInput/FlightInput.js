import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import DatePicker from 'react-native-datepicker';


export default class FlightInput extends Component {
  constructor()
  {
    super();
    this.state =
    {
      flight: '',
      date:'',
    };
    this.handleDateChange=this.handleDateChange.bind(this);
    this.handleNumChange=this.handleNumChange.bind(this)
  }

  handleNumChange(value) {
  this.setState({
    flightLet: value.substring(0, 2),
    flightNum: value.substring(2),
  })}


  handleDateChange(value) {
    let dateArray = value.split('/')
    this.setState({
      date: value,
      month: dateArray[0],
      day: dateArray[1],
      year: dateArray[2]
    })}

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter the final flight number for the person that you are picking up</Text>
        <TextInput
          style={{height: 40, width: 200, padding: 10, borderColor: 'gray', borderWidth: 2}}
          onChangeText={(flight) => this.handleNumChange(flight)}
          placeholder ="Flight Number"/>
        <DatePicker
          style={{width: 250}}
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
          onDateChange={(date) => {this.handleDateChange(date)}}
          />
        <Text>Your Location</Text>
        <Text>Manually enter Address</Text>
        <TextInput
          style={{height: 40, width: 200, padding: 10, borderColor: 'gray', borderWidth: 2}}
          onChangeText={(location) => this.setState({location})}
          placeholder ="Address"/>
        <Button
          onPress={() => {this.props.flight(this.state.flightLet, this.state.flightNum, this.state.year, this.state.month, this.state.day, this.state.location)}}
          title="Submit"
          color="#841584"
        />
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

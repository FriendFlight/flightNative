import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default class NotificationPref extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Text</Text>
        <TextInput
          style={{height: 40, width: 120, padding: 10, borderColor: 'gray', borderWidth: 2}}
          onChangeText={(phone) => this.setState({phone})}
          placeholder ="888-888-8888"/>
        <Text>Email Address</Text>
        <TextInput
          style={{height: 40, width: 120, padding: 10, borderColor: 'gray', borderWidth: 2}}
          onChangeText={(email) => this.setState({email})}
          placeholder ="email@example.com"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

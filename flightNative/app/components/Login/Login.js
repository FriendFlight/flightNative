import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Login extends Component {
  constructor()
  {
    super();
    this.state={
      user:''
    }
  }
  render() {
    const login=(<Text>Login</Text>);
    const logout=(<Text>Logout</Text>);
    return (
      <View style={styles.container}>
        {this.state.user?logout:login}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

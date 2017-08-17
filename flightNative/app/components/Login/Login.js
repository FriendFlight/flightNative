import React, {Component} from 'react';
import { StyleSheet, Text, View , WebView, Button} from 'react-native';
import Auth0 from 'react-native-auth0';
import config from '../../config';
export default class Login extends Component {
auth0Login()
{
  const auth0 = new Auth0({
    domain: config.auth0.domain,
    clientId: config.auth0.clientID,
    response_type:'token'
  });
  auth0
    .webAuth
    .authorize({scope: 'openid email',
                audience: `https://${config.auth0.domain}/userinfo`,
                redirect_uri:`https://${config.auth0.domain}/callback&`})
    .then(credentials =>
      console.log("bug", credentials)
      // Successfully authenticated
      // Store the accessToken
    )
    .catch(error => console.log(error));
}

componentDidMount()
{
  this.auth0Login();
}

  render() {
    const logout=(<Text>Logout</Text>);
    return (
      <View>
        <WebView style={{width:400, height:600, margin:0}} source={{uri:`https://${config.auth0.domain}/authorize`}} />
      </View>
      // https://${config.auth0.domain}/authorize
      //http://192.168.3.74:3001/auth
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

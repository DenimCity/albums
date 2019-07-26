import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import {
  Card, CardSection, Button, Input, Spinner,
} from '../common';


const LoginForm = ({ firebase }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
  });

  const loginSuccess = () => {
    setState({
      email: '', password: '', loading: false, error: '',
    });
  };

  const onLoginFail = () => {
    setState({ ...state, loading: false, error: 'Authentication Failed' });
  };

  const onButtonPress = async () => {
    const { email, password } = state;
    setState({ ...state, loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(loginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(loginSuccess)
          .catch(onLoginFail);
      });
  };
  return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          onChangeText={email => setState({ ...state, email })}
          value={state.email}
          placeholder="Enter Email"
        />
      </CardSection>
      <CardSection>
        <Input
          label="Password"
          onChangeText={password => setState({ ...state, password })}
          value={state.password}
          secureTextEntry
          password
        />
      </CardSection>
      <Text style={styles.errorTextStyle}>
        {state.error.length > 1 }
      </Text>
      <CardSection>
        {
          state.loading ? (
            <Button onPress={onButtonPress}>
                  Login
            </Button>
          ) : <Spinner size="small" />
        }
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  errorTextStyle: {
    fontFamily: '20',
    alignSelf: 'center',
    color: 'red',
  },
});

export default LoginForm;

/* eslint-disable no-shadow */
/* eslint-disable react/no-unused-state */
import React, { useState } from 'react';
import {
  Card, CardSection, Button, Input,
} from '../common';


const LoginForm = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });


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
      <CardSection>
        <Button onPress={() => {
          console.log('email', state.email);
          console.log('password', state.password);
        }}
        >
                  Login
        </Button>
      </CardSection>
    </Card>
  );
};

export default LoginForm;

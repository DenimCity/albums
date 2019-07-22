/* eslint-disable no-shadow */
/* eslint-disable react/no-unused-state */
import React, { useState } from 'react';
import {
  Card, CardSection, Button, Input,
} from '../common';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder="Enter Email"
        />
      </CardSection>
      <CardSection>
        <Input
          label="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
          password
          placeholder="Enter Password"
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => {
          console.log('email', email);
          console.log('password', password);
        }}
        >
                  Login
        </Button>
      </CardSection>
    </Card>
  );
};

export default LoginForm;

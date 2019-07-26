import React, { Fragment } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm/LoginForm';

const App = () => (
  <Fragment>
    <View style={{ flex: 1 }}>
      <Header name="Authentication" />
      <LoginForm firebase={firebase} />
    </View>
  </Fragment>
);


export default App;

import React, { Fragment, useEffect } from 'react';
import { View } from 'react-native';
import { firebase } from 'firebase';

import { Header } from './components/common';
import { firebaseConfig } from './config';
import LoginForm from './components/LoginForm/LoginForm';

const App = () => {
  useEffect(() => () => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
    <Fragment>
      <View style={{ flex: 1 }}>
        <Header name="Authentication" />
        <LoginForm />
      </View>
    </Fragment>
  );
};


export default App;

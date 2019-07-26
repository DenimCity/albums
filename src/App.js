import React, { Fragment, useEffect, useState } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm/LoginForm';
import { firebaseConfig } from './config';

const App = () => {
  const [loggedIn, setLogin] = useState(null);
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    });
  }, []);


  const logOut = () => {
    firebase.auth().signOut();
  };


  function renderContent() {
    switch (loggedIn) {
      case true:
        return <Button onPress={logOut}>Log out</Button>;
      case false:
        return <LoginForm firebase={firebase} />;
      default:
        // wrap a view tag to show in the middle of the page
        return <Spinner />;
    }
  }

  return (
    <Fragment>
      <View style={{ flex: 1 }}>
        <Header name="Authentication" />
        {
          renderContent()
        }
      </View>
    </Fragment>
  );
};


export default App;

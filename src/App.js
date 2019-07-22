import React, { Fragment, useEffect } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import AlbumList from './components/views/AlbumList';

const firebaseConfig = {
  apiKey: 'AIzaSyCpSn19HZKBaNk5hU8E2mXk3vrTlJhBdSU',
  authDomain: 'auth-5fe11.firebaseapp.com',
  databaseURL: 'https://auth-5fe11.firebaseio.com',
  projectId: 'auth-5fe11',
  storageBucket: '',
  messagingSenderId: '66320919952',
  appId: '1:66320919952:web:4468c4a1067857d1',
};


const App = () => {
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  });

  return (
    <Fragment>
      <View style={{ flex: 1 }}>
        <Header name="Albums" />
        <AlbumList />
      </View>
    </Fragment>
  );
};


export default App;

import React, { Fragment, useEffect } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import AlbumList from './components/views/AlbumList';


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

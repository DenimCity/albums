import React, { Fragment } from 'react';
import { View } from 'react-native';

import { Header } from './components/common';
import AlbumList from './components/views/AlbumList';


const App = () => (
  <Fragment>
    <View style={{ flex: 1 }}>
      <Header name="Albums" />
      <AlbumList />
    </View>
  </Fragment>
);


export default App;

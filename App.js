import React, { Fragment } from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


const App = () => (
  <Fragment>
    <View style={{ flex: 1 }}>
      <Header name="Albums" />
      <AlbumList />
    </View>
  </Fragment>
);


export default App;

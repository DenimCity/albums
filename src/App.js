import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { Header } from './components/common';
import LibraryList from './components/LibraryList/LibraryList';
import store from './redux/store';


const App = () => (
  <Fragment>
    <Provider store={store}>
      <Header headerText="Tech Stack" />
      <View style={{ flex: 1 }}>
        <LibraryList />
      </View>
    </Provider>
  </Fragment>
);


export default App;

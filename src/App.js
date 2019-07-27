import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
// import store from './redux/store';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList/LibraryList';


const App = () => (
  <Fragment>
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  </Fragment>
);


export default App;

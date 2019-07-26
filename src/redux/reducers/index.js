import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';

import libraryReducer from './libraryReducer';

export default combineReducers({
  libraries: libraryReducer,
});

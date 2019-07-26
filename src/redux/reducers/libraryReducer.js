import libraryList from './librarylist';

const INITIAL_STATE = {
  libraries: libraryList,
};


export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_LAUNCHES': {
      return {
      //   ...state,
      //   launches: action.payload,
      };
    }
    default:
      return state;
  }
}

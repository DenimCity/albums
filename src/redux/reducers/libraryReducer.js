import libraryList from './librarylist.json';

const INITIAL_STATE = {
  libraries: libraryList,
};


export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_LIBRARIES': {
      return {
        ...state,
        libraries: state.libraries,
      };
    }
    default:
      return state;
  }
}

import { SELECT_LIBRARY } from '../types';

const INITIAL_STATE = {
  selectedId: null,
};


export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SELECT_LIBRARY:
      return {
        ...state,
        selectedId: payload,
      };
    default:
      return state;
  }
}

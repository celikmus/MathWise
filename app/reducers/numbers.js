import { STORE_DRAWN_NUMBERS } from '../actions/numbers';

const initialState = {
  result: null,
  options: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_DRAWN_NUMBERS:
      return { ...state, result: action.result, options: action.options };
    default:
      return state;
  }
};

export default reducer;

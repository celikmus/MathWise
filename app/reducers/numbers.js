import { drawNumbers, STORE_DRAWN_NUMBERS } from '../actions/numbers';
import { RESTART_GAME } from '../actions/interactions';

const { result, options } = drawNumbers();
const initialState = {
  result,
  options,
  score: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTART_GAME:
    case STORE_DRAWN_NUMBERS:
      return { ...state, result: action.result, options: action.options };
    default:
      return state;
  }
};

export default reducer;

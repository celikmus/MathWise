import {
  DECREMENT_SCORE,
  drawNumbers,
  INCREMENT_SCORE,
  STORE_DRAWN_NUMBERS
} from '../actions/numbers';
import { RESTART_GAME } from '../actions/interactions';

const { result, options } = drawNumbers();
const initialState = {
  result,
  options,
  score: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT_SCORE:
      const score = state.score - 1;
      return { ...state, score: score < 0 ? 0 : score };
    case INCREMENT_SCORE:
      return { ...state, score: state.score + 5 };
    case RESTART_GAME:
    case STORE_DRAWN_NUMBERS:
      return { ...state, result: action.result, options: action.options };
    default:
      return state;
  }
};

export default reducer;

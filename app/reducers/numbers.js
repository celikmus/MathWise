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
  scores: { division: 0, multiply: 0, sum: 0, subtract: 0 }
};

const reducer = (state = initialState, action) => {
  const newScores = { ...state.scores };
  const score = newScores[action.selectedOperator];
  switch (action.type) {
    case DECREMENT_SCORE:
      newScores[action.selectedOperator] = score > 0 ? score - 1 : 0;
      return { ...state, scores: newScores };
    case INCREMENT_SCORE:
      newScores[action.selectedOperator] = score + 5;
      return { ...state, scores: newScores };
    case RESTART_GAME:
    case STORE_DRAWN_NUMBERS:
      return { ...state, result: action.result, options: action.options };
    default:
      return state;
  }
};

export default reducer;

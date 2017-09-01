import {
  DECREMENT_SCORE,
  drawNumbers,
  INCREMENT_SCORE,
  RESET_COUNTERS,
  TICK_PASS_COUNT
} from '../actions/numbers';
import { RESET_GAME, SWITCH_OPERATOR } from '../actions/interactions';

const { result, options } = drawNumbers('sum');
const initialState = {
  result: { sum: result },
  passCount: { division: 0, multiply: 0, sum: 0, subtract: 0 },
  options: { division: [], multiply: [], sum: options, subtract: [] },
  scores: { division: 0, multiply: 0, sum: 0, subtract: 0 }
};

const reducer = (state = initialState, action) => {
  const newScores = { ...state.scores };
  const score = newScores[action.selectedOperator];
  switch (action.type) {
    case DECREMENT_SCORE:
      newScores[action.selectedOperator] = score > 3 ? score - 3 : 0;
      return { ...state, scores: newScores };
    case INCREMENT_SCORE:
      newScores[action.selectedOperator] = score + 5;
      return { ...state, scores: newScores };
    case RESET_COUNTERS:
      return {
        ...state,
        scores: initialState.scores,
        passCount: initialState.passCount
      };
    case RESET_GAME:
      return {
        ...state,
        result: { ...state.result, [action.selectedOperator]: action.result },
        options: { ...state.options, [action.selectedOperator]: action.options }
      };
    case SWITCH_OPERATOR:
      let { result, options } = drawNumbers(action.selectedOperator);
      if (state.result[action.selectedOperator]) {
        result = state.result[action.selectedOperator];
        options = state.options[action.selectedOperator];
      }
      return {
        ...state,
        result: { ...state.result, [action.selectedOperator]: result },
        options: { ...state.options, [action.selectedOperator]: options }
      };
    case TICK_PASS_COUNT:
      const newPassCount = state.passCount[action.selectedOperator] + 1;
      return {
        ...state,
        passCount: {
          ...state.passCount,
          [action.selectedOperator]: newPassCount
        }
      };
    default:
      return state;
  }
};

export default reducer;

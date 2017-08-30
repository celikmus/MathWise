export const ADD_DROP_ZONE = 'ADD_DROP_ZONE';
export const ADD_OPERAND = 'ADD_OPERAND';
export const END_RESTART = 'END_RESTART';
export const RESET_GAME = 'RESET_GAME';
export const REMOVE_OPERAND = 'REMOVE_OPERAND';
export const SWITCH_OPERATOR = 'SWITCH_OPERATOR';
import { drawNumbers } from './numbers';

export const addDropZone = (zoneId, layout) => ({
  type: ADD_DROP_ZONE,
  zoneId,
  layout
});

export const addOperand = (zoneId, boxId, value) => ({
  type: ADD_OPERAND,
  zoneId,
  boxId,
  value
});

export const endRestart = () => ({
  type: END_RESTART
});

export const resetGame = selectedOperator => {
  const { result, options } = drawNumbers(selectedOperator);
  return {
    type: RESET_GAME,
    selectedOperator,
    result,
    options
  };
};

export const removeOperand = zoneId => ({
  type: REMOVE_OPERAND,
  zoneId
});

export const switchOperator = selectedOperator => ({
  type: SWITCH_OPERATOR,
  selectedOperator
});

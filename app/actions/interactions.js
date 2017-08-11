export const ADD_DROP_ZONE = 'ADD_DROP_ZONE';
export const ADD_OPERAND = 'ADD_OPERAND';
export const CHANGE_OPERATOR = 'CHANGE_OPERATOR';
export const END_RESTART = 'END_RESTART';
export const RESTART_GAME = 'RESTART_GAME';
export const REMOVE_OPERAND = 'REMOVE_OPERAND';
export const SET_VACATING_ZONE = 'SET_VACATING_ZONE';
import { drawNumbers } from './numbers';

export const addDropZone = (zoneId, layout) => ({
  type: ADD_DROP_ZONE,
  zoneId,
  layout
});

export const addOperand = (zoneId, value) => ({
  type: ADD_OPERAND,
  zoneId,
  value
});

export const changeOperator = selectedOperator => ({
  type: CHANGE_OPERATOR,
  selectedOperator
});

export const endRestart = () => ({
  type: END_RESTART
});

export const restartGame = selectedOperator => {
  const { result, options } = drawNumbers(selectedOperator);
  return {
    type: RESTART_GAME,
    selectedOperator,
    result,
    options
  };
};

export const removeOperand = zoneId => ({
  type: REMOVE_OPERAND,
  zoneId
});

export const setVacatingZone = zoneId => ({
  type: SET_VACATING_ZONE,
  zoneId
});

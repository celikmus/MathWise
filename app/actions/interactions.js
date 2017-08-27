export const ADD_DROP_ZONE = 'ADD_DROP_ZONE';
export const ADD_OPERAND = 'ADD_OPERAND';
export const END_RESTART = 'END_RESTART';
export const RESTART_GAME = 'RESTART_GAME';
export const REMOVE_OPERAND = 'REMOVE_OPERAND';
export const SWITCH_OPERATOR = 'SWITCH_OPERATOR';
export const TICK_PASS_COUNT = 'TICK_PASS_COUNT';
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

export const switchOperator = selectedOperator => ({
  type: SWITCH_OPERATOR,
  selectedOperator
});

export const tickPassCount = () => ({
  type: TICK_PASS_COUNT
});

export const ADD_DROP_ZONE = 'ADD_DROP_ZONE';
export const ADD_OPERAND = 'ADD_OPERAND';
export const REMOVE_OPERAND = 'REMOVE_OPERAND';
export const SET_VACATING_ZONE = 'SET_VACATING_ZONE';

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

export const removeOperand = zoneId => ({
  type: REMOVE_OPERAND,
  zoneId
});

export const setVacatingZone = zoneId => ({
  type: SET_VACATING_ZONE,
  zoneId
});

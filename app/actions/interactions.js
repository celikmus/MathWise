export const ADD_DROP_ZONE = 'ADD_DROP_ZONE';
export const ADD_OPERAND = 'ADD_OPERAND';

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

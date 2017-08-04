export const ADD_DROP_ZONE = 'ADD_DROP_ZONE';

export const addDropZone = (zoneId, layout) => ({
  type: ADD_DROP_ZONE,
  zoneId,
  layout
});

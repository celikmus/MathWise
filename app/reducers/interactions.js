import { ADD_DROP_ZONE, ADD_OPERAND } from '../actions/interactions';

const initialState = {
  selectedOperator: 'sum',
  dropZones: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DROP_ZONE:
      const { dropZones } = state;
      const { zoneId, layout } = action;
      return {
        ...state,
        dropZones: [...dropZones, { zoneId, layout, isEmpty: true }]
      };
    case ADD_OPERAND:
      const zones = state.dropZones.map(zone => {
        let newZone = { ...zone };
        if (zone.zoneId === action.zoneId) {
          newZone.value = action.value;
          newZone.isEmpty = false;
        }
        return newZone;
      });
      return {
        ...state,
        dropZones: zones
      };
    default:
      return state;
  }
};

export default reducer;

import {
  ADD_DROP_ZONE,
  ADD_OPERAND,
  CHANGE_OPERATOR,
  REMOVE_OPERAND,
  SET_VACATING_ZONE
} from '../actions/interactions';

const initialState = {
  selectedOperator: 'sum',
  dropZones: [],
  vacatingZoneId: '',
  dropCount: 0
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
        dropZones: zones,
        dropCount: state.dropCount + 1
      };
    case CHANGE_OPERATOR:
      const { selectedOperator } = action;
      return { ...state, selectedOperator, dropCount: 0 };
    case REMOVE_OPERAND:
      const rZones = state.dropZones.map(zone => {
        let newZone = { ...zone };
        if (zone.zoneId === action.zoneId) {
          delete newZone.value;
          newZone.isEmpty = true;
        }
        return newZone;
      });
      return {
        ...state,
        vacatingZoneId: '',
        dropZones: rZones,
        dropCount: state.dropCount - 1
      };
    case SET_VACATING_ZONE:
      return {
        ...state,
        vacatingZoneId: action.zoneId
      };
    default:
      return state;
  }
};

export default reducer;

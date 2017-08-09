import {
  ADD_DROP_ZONE,
  ADD_OPERAND,
  CHANGE_OPERATOR,
  RELOAD_GAME,
  REMOVE_OPERAND,
  SET_VACATING_ZONE
} from '../actions/interactions';

import { STORE_DRAWN_NUMBERS } from '../actions/numbers';

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
    case RELOAD_GAME:
      const dZones = state.dropZones.map(zone => {
        return { ...zone, isEmpty: true, value: null };
      });
      return { ...initialState, resetting: true, dropZones: dZones };
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
    case STORE_DRAWN_NUMBERS:
      return { ...state, resetting: false };
    default:
      return state;
  }
};

export default reducer;

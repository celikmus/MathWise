import {
  ADD_DROP_ZONE,
  ADD_OPERAND,
  CHANGE_OPERATOR,
  END_RESTART,
  RESTART_GAME,
  REMOVE_OPERAND,
  SWITCH_OPERATOR,
  TICK_PASS_COUNT
} from '../actions/interactions';

import { getBoxCoordinates } from '../config/screen';

const initialState = {
  selectedOperator: 'sum',
  passCount: 0,
  initCoords: getBoxCoordinates(),
  dropZones: [],
  restarting: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DROP_ZONE:
      const { zoneId, layout } = action;
      let aZones = [...state.dropZones, { zoneId, layout, isEmpty: true }];
      if (state.dropZones.some(z => z.zoneId === action.zoneId)) {
        aZones = state.dropZones.map(z => {
          if (z.zoneId === action.zoneId) {
            return { ...z, layout: action.layout };
          }
          return { ...z };
        });
      }
      return {
        ...state,
        dropZones: aZones
      };
    case ADD_OPERAND:
      const zones = state.dropZones.map(zone => {
        let newZone = { ...zone };
        if (zone.zoneId === action.zoneId) {
          newZone.value = action.value;
          newZone.boxId = action.boxId;
          newZone.isEmpty = false;
        }
        return newZone;
      });
      return {
        ...state,
        dropZones: zones
      };
    case CHANGE_OPERATOR:
      const { selectedOperator } = action;
      return { ...state, selectedOperator };
    case END_RESTART:
      return { ...state, restarting: false };
    case RESTART_GAME:
    case SWITCH_OPERATOR:
      const dZones = state.dropZones.map(zone => {
        return { ...zone, isEmpty: true, boxId: null, value: null };
      });
      return {
        ...initialState,
        selectedOperator: action.selectedOperator,
        passCount: state.passCount,
        restarting: true,
        dropZones: dZones
      };
    case REMOVE_OPERAND:
      const rZones = state.dropZones.map(zone => {
        let newZone = { ...zone };
        if (zone.zoneId === action.zoneId) {
          newZone.value = null;
          newZone.boxId = null;
          newZone.isEmpty = true;
        }
        return newZone;
      });
      return {
        ...state,
        dropZones: rZones
      };
    case TICK_PASS_COUNT:
      return {
        ...state,
        passCount: state.passCount + 1
      };
    default:
      return state;
  }
};

export default reducer;

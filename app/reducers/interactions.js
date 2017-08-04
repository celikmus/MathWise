import { ADD_DROP_ZONE } from '../actions/interactions';

const initialState = {
  dropZones: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DROP_ZONE:
      const { dropZones } = state;
      const { zoneId, layout } = action;
      return { ...state, dropZones: [...dropZones, { zoneId, layout }] };
    default:
      return state;
  }
};

export default reducer;

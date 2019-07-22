import {LOCATION_ACTION} from "constants/actionTypes";

const initialState = {
  LocationList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_ACTION.LOCATION_LIST_SUCCESS:
      return {
        ...state,
        LocationList: [...action.LocationList]
      };
    case LOCATION_ACTION.ADD_LOCATION_SUCCESS:
      return {
        ...state,
        LocationList: [...state.LocationList, action.location]
      };

    case LOCATION_ACTION.DELETE_LOCATION_SUCCESS:
      return {
        ...state,
        LocationList: state.LocationList.filter(item => {
          return item.locationID !== action.locationId;
        })
      };
    default:
      return state;
  }
};

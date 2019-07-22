const initialState = {
  LocationList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOCATION_LIST":
      return {
        ...state,
        LocationList: [...action.LocationList]
      };
    default:
      return state;
  }
};

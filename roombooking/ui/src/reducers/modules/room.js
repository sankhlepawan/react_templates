import {ROOM_ACTION} from "constants/actionTypes";

const initialState = {
  RoomList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ROOM_ACTION.ROOM_LIST_SUCCESS:
      return {
        ...state,
        RoomList: [...action.RoomList]
      };
    case ROOM_ACTION.ADD_ROOM_SUCCESS: {
      return {
        ...state,
        RoomList: [...state.RoomList, action.room]
      };
    }
    default:
      return state;
  }
};

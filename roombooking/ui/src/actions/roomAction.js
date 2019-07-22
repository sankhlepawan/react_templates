import API_URL from "constants/apiUrl";
import { ROOM_ACTION } from "constants/actionTypes";


const ROOM_URL = {
  FETCH_ROOM_URL: API_URL + "/room/rooms",
  ADD_ROOM_URL: API_URL + "/room/createroom",
  UPDATE_ROOM_URL: API_URL + "/room/rooms/",
  DELETE_ROOM_URL: API_URL + "/room/deleteRooms/"
};


const addRoomSuccess = room => {
  return {
    type: ROOM_ACTION.ADD_ROOM_SUCCESS,
    room
  };
};
const fetchRoomListSuccess = RoomList => {
  return {
    type: ROOM_ACTION.ROOM_LIST_SUCCESS,
    RoomList
  };
};

const updateRoomSuccess = room => {
  return {
    type: ROOM_ACTION.UPDATE_ROOM_SUCCESS,
    room
  };
};

const deleteRoomSuccess = room => {
  return {
    type: ROOM_ACTION.DELETE_ROOM_SUCCESS,
    room
  };
};

const fetchRoomAction = () => {
  return dispatch => {
    return fetch(ROOM_URL.FETCH_ROOM_URL, {
      method: "GET"
    })
      .then(response => Promise.all([response, response.json()]))
      .then(([response, json]) => {
        if (response.status === 200) {
          dispatch(fetchRoomListSuccess(json));
        }
      });
  };
};

const addRoomAction = data => {
  return dispatch => {
    return fetch(ROOM_URL.ADD_ROOM_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
      .then(response => Promise.all([response, response.json()]))
      .then(([response, json]) => {
        if (response.status === 200) {
          dispatch(addRoomSuccess(json));
        }
      });
  };
};

const updateRoomAction = data => {
  return dispatch => {
    return fetch(ROOM_URL.UPDATE_ROOM_URL + data.roomId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => Promise.all([response, response.json()]))
      .then(([response, json]) => {
        if (response.status === 200) {
          dispatch(updateRoomSuccess(json));
        }
      });
  };
};

const deleteRoomAction = data => {
  return dispatch => {
    return fetch(ROOM_URL.DELETE_ROOM_URL + data, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    })
      .then(response => Promise.all([response, response.json()]))
      .then(([response, json]) => {
        if (response.status === 200) {
          dispatch(deleteRoomSuccess(json));
        }
      });
  };
};

export {fetchRoomAction, addRoomAction, updateRoomAction, deleteRoomAction};

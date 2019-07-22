import { USER_ACTION } from "constants/actionTypes";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? {loggedIn: true, user} : {};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case USER_ACTION.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case USER_ACTION.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case USER_ACTION.LOGIN_FAILURE:
      return {};
    case USER_ACTION.LOGOUT:
      return {};
    default:
      return state;
  }
}

import {USER_ACTION} from "constants/actionTypes";

export const registration = (state = {}, action) => {
  switch (action.type) {
    case USER_ACTION.REGISTER_REQUEST:
      return {registering: true};
    case USER_ACTION.REGISTER_SUCCESS:
      return {};
    case USER_ACTION.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
};

export default registration;

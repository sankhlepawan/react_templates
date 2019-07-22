import { USER_ACTION } from "constants/actionTypes";

import API_URL from 'constants/apiUrl';

import { HttpCore } from 'services' ;

const registration = user => {
  
  const success = (user) => {
    return {type: USER_ACTION.REGISTER_SUCCESS, user};
  };
  
  const failure = (error) => {
    return {type: USER_ACTION.REGISTER_FAILURE, error};
  };

  let url = API_URL + "/user/signup";
  const params = {
    body: JSON.stringify(user),
    method: "POST",
    onSuccess: success,
    onFailure:failure
  }
  
  return (dispatch) => {
    params.dispatch = dispatch;
    new HttpCore(url,params);
  }

};
export default registration;

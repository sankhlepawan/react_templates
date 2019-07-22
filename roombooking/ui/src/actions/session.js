import { USER_ACTION } from "constants/actionTypes";
import { HttpCore, tokenService } from 'services' ;
import API_URL from 'constants/apiUrl'
import{ history } from 'store/history';


const login = loginDetails => {

  let url = API_URL+"/auth/generate-token";

  const success = ([json, dispatch]) => {
    tokenService.saveToken(json.entity.token);
    let roles = tokenService.getRoles();
    if(roles !=null && roles != undefined && roles.indexOf("SUPER_ADMIN") !== -1){
      history.push('/admin-dashboard');
    }
    
   
  };

  const failure = error => {
    return {type: USER_ACTION.LOGIN_FAILURE, error};
  };



  
  let params = {
    body: JSON.stringify(loginDetails),
    method: "POST",
    onSuccess: success,
    onFailure: failure
  }
  

  return (dispatch) => {
    params.dispatch = dispatch;
    return new HttpCore(url, params);
  }
};

const logout = () => {
  tokenService.signOut()
  return {type: USER_ACTION.LOGOUT};
};

export {login, logout};

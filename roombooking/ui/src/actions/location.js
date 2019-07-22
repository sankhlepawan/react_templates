import { LOCATION_ACTION } from "constants/actionTypes";
import API_URL from "constants/apiUrl";
import { HttpCore } from 'services';

const LOCATION_URL = {
  FETCH_LOCATION_URL: API_URL + "/location/",
  ADD_LOCATION_URL: API_URL + "/location/add",
  EDIT_LOCATION_URL: API_URL + "/location/update",
  DELETE_LOCATION_URL: API_URL + "/location/delete/"
};

const addLocationSuccess = location => {
  return {
    type: LOCATION_ACTION.ADD_LOCATION_SUCCESS,
    location
  };
};

const fetchLocationListSuccess = (LocationList) => {
  
  return {
    type: LOCATION_ACTION.LOCATION_LIST_SUCCESS,
    LocationList
  };
  
};



const editLocationSuccess = location => {
  return {
    type: LOCATION_ACTION.EDITL_LOCATION_SUCCESS,
    location
  };
};

const deleteLocationSuccess = locationId => {
  return {
    type: LOCATION_ACTION.DELETE_LOCATION_SUCCESS,
    locationId
  };
};

const fetchLocationAction = () => {

  let url = LOCATION_URL.FETCH_LOCATION_URL;
  const params = {
    method: "GET",
    action: fetchLocationListSuccess,
  }
  return (dispatch) => {
    params.dispatch = dispatch;
    new HttpCore(url,params);
  }
};

const addLocationAction = data => {
  
  let url = LOCATION_URL.ADD_LOCATION_URL;
  const params = {
    body:  JSON.stringify(data),
    method: "POST",
    action: addLocationSuccess,
  }
  
  return (dispatch) => {
    params.dispatch = dispatch;
    new HttpCore(url,params);
  }
};

const editLocationAction = data => {

  let url = LOCATION_URL.EDIT_LOCATION_URL;
  const params = {
    body:  data,
    method: "PUT",
    onSuccess: editLocationSuccess,
  }
  return (dispatch) => {
    params.dispatch = dispatch;
    new HttpCore(url,params);
  }
};

const deleteLocationAction = id => {
  
  let url = LOCATION_URL.DELETE_LOCATION_URL + id;
  const params = {
    body:  '',
    method: "DELETE",
    onSuccess: deleteLocationSuccess,
  }
  return (dispatch) => {
    params.dispatch = dispatch;
    new HttpCore(url,params);
  }
};

const locationAction =  {
  fetchLocationAction,
  addLocationAction,
  editLocationAction,
  deleteLocationAction
};

export default locationAction;

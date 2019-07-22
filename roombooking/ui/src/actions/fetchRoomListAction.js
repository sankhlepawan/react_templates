import {
  SET_DATE_FILTER
} from '../constants/actionTypes';

const setCalendarDate = filter => ({
  type: SET_DATE_FILTER,
  filter
})

const fetchDRListSuccess = (DRList) => {
  return {
    type: "DRLISTSUCCESS",
    DRList
  }
}

const fetchDRList = () => {
  return (dispatch) => {
    return fetch("http://10.26.9.46:8080/api/room/fetchAllRooms", {
        method: 'GET'
      })
      .then(response => Promise.all([response, response.json()]))
      .then(([response, json]) => {
        if (response.status === 200) {
          dispatch(fetchDRListSuccess(json))
        }
      })
  }
}

export {
  fetchDRList,
  setCalendarDate
}
import cloneDeep from 'lodash/cloneDeep'

import {
  columns
} from '../constants/column'


var colObj = {}
var tempArr = []

const fetchRoomBookingListSuccess = (RoomList) => {
  return {
    type: "ROOMLISTSUCCESS",
    RoomList,
    colObj
  }
}

const fetchRoomBookingList = () => {
  return (dispatch) => {
    return fetch("http://10.26.9.46:8080/api/booking/fetchBookingByDate/25-01-2019", {
        method: 'GET'
      })
      .then(response => Promise.all([response, response.json()]))
      .then(([response, json]) => {
        if (response.status === 200) {
          Object.keys(json).map((labelOfRoom, index) => {
            json[labelOfRoom].map((timeRange, ind) => {
              recColumnFetch(labelOfRoom, timeRange);
            })
          })
          dispatch(fetchRoomBookingListSuccess(json))
        }
      })
  }
}

const recColumnFetch = (labelOfRoom, timeRange) => {
  var startIndex = columns.findIndex(x => x.label === timeRange.startTime)
  var endIndex = columns.findIndex(x => x.label === timeRange.endTime)
  tempArr = columns.slice(startIndex, endIndex)
  if (Object.keys(colObj).includes(labelOfRoom))
    colObj[labelOfRoom] = [...colObj[labelOfRoom], ...tempArr]
  else
    colObj[labelOfRoom] = cloneDeep(tempArr)
}

export {
  fetchRoomBookingList,
}
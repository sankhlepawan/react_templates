const fetchAdminSuccess = (LocationList) => {
  return {
    type: 'LOCATION_LIST',
    LocationList
  }
}

const fetchAdminAction = () => {
  return (dispatch) => {
    return fetch('http://localhost:8080/api/location/', {
        method: 'GET'
    })
    .then(response => Promise.all([response, response.json()]))
    .then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchAdminSuccess(json))
      } 
    })
  }
}
export  { fetchAdminAction }
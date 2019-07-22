import { combineReducers } from 'redux'
import calendarFilter from './modules/calendarFilter' 
import booking  from './modules/bookingsReducer' 
import location from './modules/location'
import { reducer as formReducer } from 'redux-form';
import  authenticationReducer  from './modules/authenticationReducer';
import  registrationReducer  from './modules/registerationReducer';
import room from './modules/room'
import admin from './modules/admin'

export default combineReducers ({
    form: formReducer,
    authenticationReducer,
    registrationReducer,
    calendarFilter,
    booking,
    location,
    room,
	admin,
})

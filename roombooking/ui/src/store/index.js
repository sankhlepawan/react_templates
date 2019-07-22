import {createStore, applyMiddleware} from "redux";
import combineReducers from "./../reducers/index";
import ReduxThunk from "redux-thunk";

const initialState = {};
const store = createStore(
  combineReducers,
  initialState,
  applyMiddleware(ReduxThunk)
);

export {store};

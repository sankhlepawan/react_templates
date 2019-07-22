import {columns} from "constants/column";

import cloneDeep from "lodash/cloneDeep";

const initialState = {
  DRList: "",
  RoomList: "",
  rooms: {}
};
var obj = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "DRLISTSUCCESS": {
      action.DRList.map((ele, ind) => {
        obj[ele.roomName] = columns;
      });

      return {
        ...state,
        DRList: action.DRList,
        rooms: obj
      };
    }

    case "ROOMLISTSUCCESS": {
      var tempcol = cloneDeep(action.colObj);
      Object.keys(tempcol).map((roomLabel, index) => {
        tempcol[roomLabel].map((time, ind) => {
          time.type = true;
        });
      });

      Object.keys(tempcol).map((roomLabel, index) => {
        var tempColumns = cloneDeep(columns);
        var copyOfCols = tempColumns.map(item => {
          let item2 = tempcol[roomLabel].find(i2 => i2.label === item.label);
          return item2 ? {...item, ...item2} : item;
        });
        obj[roomLabel] = copyOfCols;
      });

      return {
        ...state,
        RoomList: action.RoomList,
        rooms: obj
      };
    }
    default:
      return state;
  }
};

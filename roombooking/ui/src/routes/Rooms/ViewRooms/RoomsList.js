import React, {Component} from "react";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
  fetchRoomAction,
  deleteRoomAction,
  updateRoomAction
} from "actions/roomAction";

class RoomList extends Component {
  componentDidMount() {
    this.props.fetchRoomAction();
  }

  selectRowProp = {
    mode: "radio",
    onSelect: this.props.deleteRoomAction
  };

  // deleteRoom = (roomData) => {
  //     console.log("In the delete room action, deleting the room with the data :", roomData);
  //     this.props.deleteRoom(roomData.roomId);
  //     this.props.history.push('/rooms');
  // }

  onRowSelect(row, isSelected, e) {
    this.deleteRoomAction(row);
  }

  onAfterSaveCell = (row, cellName, cellValue) => {
    let rowStr = {};
    for (const prop in row) {
      console.log("row", row);
      // if (prop === "roomId" || prop === "roomName") {
      rowStr[prop] = row[prop];
      // }
    }
    console.log("update Json", row);
    this.props.updateRoomAction(row);
    // this.reloadPage()
  };

  reloadPage = () => {
    this.props.history.push("/rooms");
  };

  onBeforeSaveCell(row, cellName, cellValue) {
    return true;
  }
  options = {
    afterDeleteRow: this.onAfterDeleteRow // A hook for after droping rows.
  };

  cellEditProp = {
    mode: "click",
    blurToSave: true,
    beforeSaveCell: this.onBeforeSaveCell, // a hook for before saving cell
    afterSaveCell: this.onAfterSaveCell // a hook for after saving cell
  };

  onRoomDelete = (cell, row, rowIndex) => {
    console.log(row);
    this.props.deleteRoomAction(row.roomID);
  };

  deleteButtonFormatter = (cell, row, enumObject, rowIndex) => {
    return (
      <button
        className="btn btn-danger btn-sm"
        type="button"
        onClick={() => this.onRoomDelete(cell, row, rowIndex)}
      >
        Delete
      </button>
    );
  };

  render() {
    return (
      <BootstrapTable
        data={this.props.RoomList}
        cellEdit={this.cellEditProp}
        striped
        hover
        options={this.options}
        selectRow={this.selectRowProp}
      >
        <TableHeaderColumn isKey dataField="roomId" editable={false}>
          Room ID
        </TableHeaderColumn>
        <TableHeaderColumn dataField="roomName">Room Name</TableHeaderColumn>
        <TableHeaderColumn dataField="roomStatus">Status</TableHeaderColumn>
        <TableHeaderColumn dataField="seats">Seats</TableHeaderColumn>
        <TableHeaderColumn
          dataField="button"
          editable={false}
          dataFormat={this.deleteButtonFormatter}
        />
      </BootstrapTable>
    );
  }
}

const mapStateToProps = state => {
  return {
    RoomList: state.room.RoomList,
    roomId: state.room.roomId
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchRoomAction,
      updateRoomAction,
      deleteRoomAction: roomId => deleteRoomAction(roomId)
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomList);

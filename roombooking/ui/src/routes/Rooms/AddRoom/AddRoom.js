import React from "react";
import {addRoomAction} from "actions/roomAction";
import {connect} from "react-redux";
import RoomForm from "./RoomForm";
import {bindActionCreators} from "redux";

class AddRoom extends React.Component {
  submit = values => {
    var jsonToSend = JSON.parse(JSON.stringify(values));
    jsonToSend.location = {id: 1};
    jsonToSend.seats = Number.parseInt(values.seats);
    jsonToSend.roomStatus = values.roomStatus === "true" ? true : false;
    this.props.addRoomAction(jsonToSend);
    this.props.history.push("/rooms");
  };

  render() {
    return <RoomForm onSubmit={this.submit} />;
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addRoomAction
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(AddRoom);

import {connect} from "react-redux";
import { locationAction } from "actions";

const mapStateToProps = state => {
  return {
    LocationList: state.location.LocationList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addLocationAction: location => dispatch(locationAction.addLocationAction(location)),
    fetchLocationAction: () => dispatch(locationAction.fetchLocationAction()),
    editLocationAction: (location) => dispatch(locationAction.editLocationAction(location)),
    deleteLocationAction: (locationId) => dispatch(locationAction.deleteLocationAction(locationId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

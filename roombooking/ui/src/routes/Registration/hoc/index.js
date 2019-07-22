import {connect} from "react-redux";
import registration from "actions/registration";

const mapStateToProps = state => {
  return {
    registering: state.registering
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: user => dispatch(registration(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

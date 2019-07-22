import { connect } from "react-redux";
import { login } from "actions/session";

const mapStateToProps = state => {
  return {
    logIn: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

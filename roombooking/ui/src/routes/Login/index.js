import React, {Component} from "react";
import { Row, Col } from "reactstrap";
import classnames from "classnames/bind";
import {Link} from "react-router-dom";
import {reduxForm} from "redux-form";
import FormFieldGroup from "components/FormFieldGroup";
import {required, email} from "utils/validations";
import styles from "./Login.scss";
import hoc from "./hoc";

const loginStyles = classnames.bind(styles);

class Login extends Component {
  submit = values => {
    this.props.login(values);
  };

  render() {
    const { error, handleSubmit, submitting } = this.props;
    return (
      <Row
        className={loginStyles(
          "mainLogin d-flex justify-content-center align-items-center"
        )}
      >
        <Col md={6} mdOffset={3}>
          <h2>Login</h2>
          <form
            className={loginStyles("sky-form text-left")}
            onSubmit={handleSubmit(this.submit)}
          >
            <FormFieldGroup
              name="email"
              label="Email"
              type="email"
              validate={[required, email]}
            />
            <FormFieldGroup
              name="password"
              label="Password"
              type="password"
              validate={[required]}
            />
            {error && <strong>{error}</strong>}
            <div className="form-group">
              <button type="submit" disabled={submitting} className="button">
                Login
              </button>
              <Link to="/register" className="button button-secondary">
                Register
              </Link>
            </div>
          </form>
        </Col>
      </Row>
    );
  }
}

export default hoc(
  reduxForm({
    form: "loginForm"
  })(Login)
);


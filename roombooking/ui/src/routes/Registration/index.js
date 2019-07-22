import React from "react";
import classnames from "classnames/bind";
import {Link} from "react-router-dom";
import {reduxForm} from "redux-form";
import {Row, Col} from "reactstrap";
import {
  required,
  numeric,
  email,
  maxLength15,
  phoneNumber,
  password
} from "utils/validations";
import FormFieldGroup from "components/FormFieldGroup";
import styles from "./Registration.scss";
import hoc from "./hoc";
import { toastService } from '../../services';

const registerPage = classnames.bind(styles);

class Registration extends React.Component {


  submit = values => {
     console.log(values);
     if(values.password === values.confirmPassword){
        this.props.register(values);
     }else{
      toastService.error("Both password must be same.");
     }
     
  };
  
  render() {
    const { handleSubmit, submitting, reset, pristine } = this.props;
    
    return (
      <Row
        className={registerPage(
          "mainLogin d-flex justify-content-center align-items-center"
        )}
      >
        <Col md={{size: 6, offset: 3}}>
          <h2>Register</h2>
          <form
            className={registerPage("sky-form form-inline text-left")}
            name="form"
            onSubmit={handleSubmit(this.submit)}
          >
            <Col sm={6} className={registerPage("form-group mt-15")}>
              <FormFieldGroup
                label={[
                  <span key="label">Employee Code</span>,
                  <span key="validation" className={registerPage("redColor")}>
                    *
                  </span>
                ]}
                labelClass={registerPage("customlabel")}
                name="employeeCode"
                validate={[required, numeric]}
              />
            </Col>

            <Col sm={6} className={registerPage("form-group mt-15")}>
              <FormFieldGroup
                name="UserDetails.firstName"
                label={[
                  <span key={2}>First Name</span>,
                  <span key={3} className={registerPage("redColor")}>*</span>
                ]}
                labelClass={registerPage("customlabel")}
              />
            </Col>

            <Col sm={6} className={registerPage("form-group mt-15")}>
              <FormFieldGroup
                name="UserDetails.lastName"
                validate={[maxLength15]}
                label="Last Name"
                labelClass={registerPage("customlabel")}
              />
            </Col>

            <Col sm={6} className={registerPage("form-group mt-15")}>
              <FormFieldGroup
                name="email"
                validate={[required, email]}
                label={[
                  <span key="label">Email</span>,
                  <span key="validation" className={registerPage("redColor")}>
                    *
                  </span>
                ]}
                labelClass={registerPage("customlabel")}
              />
            </Col>
            <Col sm={6} className={registerPage("form-group mt-15")}>
              <FormFieldGroup
                name="UserDetails.baseLocation"
                label="Base Location"
                labelClass={registerPage("customlabel")}
              />
            </Col>
            <Col sm={6} className={registerPage("form-group mt-15")}>
              <FormFieldGroup
                name="UserDetails.contactNo"
                validate={[phoneNumber]}
                label={[
                  <span key="label">Contact Number</span>,
                  <span key="validation" className={registerPage("redColor")}>
                    *
                  </span>
                ]}
                labelClass={registerPage("customlabel")}
              />
            </Col>

            <Col sm={6} className={registerPage("form-group mt-15")}>
              <FormFieldGroup
                name="password"
                type="password"
                validate={[required, password]}
                label={[
                  <span key="label">Password</span>,
                  <span key="validation" className={registerPage("redColor")}>
                    *
                  </span>
                ]}
                labelClass={registerPage("customlabel")}
              />
            </Col>
            <Col sm={6} className={registerPage("form-group mt-15")}>
              <FormFieldGroup
                name="confirmPassword"
                type="password"
                validate={[required, password]}
                label={[
                  <span key="label">Confrim Password</span>,
                  <span key="validation" className={registerPage("redColor")}>
                    *
                  </span>
                ]}
                labelClass={registerPage("customlabel")}
              />
            </Col>

            <Col
              sm={12}
              className={registerPage("form-group mt-20 inline-block")}
            >
              <button disabled={ submitting || pristine } className={registerPage("button")} >Register</button>
              
              <Link
                to="/login"
                className={registerPage("button button-secondary")}
              >
                Login
              </Link>
            </Col>
          </form>
        </Col>
      </Row>
    );
  }
}

export default reduxForm({
  form: "registerForm"
})(hoc(Registration));

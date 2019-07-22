import React, {Component} from "react";
import {Button, Row } from "reactstrap";
import {required} from "utils/validations";
import classnames from "classnames/bind";
import {reduxForm} from "redux-form";
import FormFieldGroup from "components/FormFieldGroup";
import styles from "./Location.css";
import hoc from "./hoc";

const locationCss = classnames.bind(styles);

class AddLocation extends Component {
 
  submit = values => {
    this.props.addLocationAction(values);
  };
  
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <Row>
        <form
          name="addLocationForm"
          className="col-sm-12 row"
          onSubmit={handleSubmit(this.submit)}>
          
          <FormFieldGroup
              name="locationName"
              type="text"
              label=""
              validate={[required]}
              placeholder="Location Name"
            />
          <div className={locationCss("location")}>
            <Button disbaled={submitting} color="primary" type="submit">
              Add
            </Button>
          </div>
        </form>
      </Row>
    );
  }
}

export default hoc(
  reduxForm({
    form: "addLocationForm"
  })(AddLocation)
);
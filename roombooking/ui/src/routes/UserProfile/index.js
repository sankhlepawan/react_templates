import React from "react";
import classnames from "classnames/bind";
import {Button, Form, Input} from "reactstrap";
import {reduxForm} from "redux-form";
import styles from "./UserProfile.scss";
import FormFieldGroup from "components/FormFieldGroup";
let userprofileform = classnames.bind(styles);
//@reduxForm({ form: 'UserProfile' })

class UserProfile extends React.Component {
  render() {
    return (
      <Form className={userprofileform("mt10 text-left")}>
        <FormFieldGroup
          label={
            <span>
              Full Name <span className="red">*</span>
            </span>
          }
          name="Name"
          labelClass="text-left"
          placeholder="Full Name"
          component={Input}
        />
        <FormFieldGroup
          label="Email"
          name="Email"
          placeholder="Email"
          component={Input}
        />
        <FormFieldGroup
          label="Phone Number"
          name="PhoneNumber"
          placeholder="Phone Number"
          component={Input}
        />
        <FormFieldGroup
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          component={Input}
        />
        <FormFieldGroup
          label="BG Group"
          type="select"
          name="BG"
          placeholder="BG Group"
          component={Input}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </FormFieldGroup>
        <FormFieldGroup
          label="Location"
          type="select"
          name="Location"
          placeholder="Location"
          component={Input}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </FormFieldGroup>
        <FormFieldGroup
          label="Desciption"
          type="textarea"
          name="Desciption"
          placeholder="Desciption"
          component={Input}
        />
        <FormFieldGroup
          label="Upload Photo"
          type="file"
          name="phpto"
          placeholder="Upload Photo"
          component={Input}
        />
        <Button className={userprofileform("mt10")}>Submit</Button>
      </Form>
    );
  }
}
UserProfile = reduxForm({
  form: "editForm"
})(UserProfile);

export default UserProfile;

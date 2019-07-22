import React from "react";
import {Field, reduxForm} from "redux-form";
import {renderField} from "utils/formFields";
import {validations} from "utils/validations";
import {renderDropDown} from "utils/formFields";

const roomStatus = [
  {
    key: "Active",
    value: true
  },
  {
    key: "InActive",
    value: false
  }
];

const roomLocation = [
  {
    key: "Indore",
    value: "Indore"
  },
  {
    key: "Hydrabad",
    value: "Hydrabad"
  },
  {
    key: "Pune",
    value: "Pune"
  }
];

const RoomForm = ({handleSubmit, pristine, reset, submitting}) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="roomName"
      type="text"
      component={renderField}
      label="Room Name"
      validate={[validations.requiredValidation]}
    />

    <Field
      name="seats"
      type="number"
      component={renderField}
      label="Seats"
      validate={[validations.requiredValidation, validations.numericValidation]}
    />
    <Field
      name="roomStatus"
      label="Status"
      optionsdata={roomStatus}
      component={renderDropDown}
    />
    <Field
      name="location"
      label="location"
      optionsdata={roomLocation}
      component={renderDropDown}
    />

    <div>
      <button type="submit" disabled={submitting}>
        Submit
      </button>
      <button type="button" disabled={pristine || submitting} onClick={reset}>
        Clear Values
      </button>
    </div>
  </form>
);
export default reduxForm({
  form: "RoomForm",
  initialValues: {
    location: "Hydrabad",
    roomStatus: false
  }
})(RoomForm);

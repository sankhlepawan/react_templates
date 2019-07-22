import React from "react";
import PropTypes from "prop-types";
import {FormGroup, Label, Input} from "reactstrap";
import {Field} from "redux-form";

const propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  name: PropTypes.string.isRequired,
  labelClass: PropTypes.string,
  wrapperClass: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "textarea",
    "file",
    "email",
    "select",
    "password",
    "number",
    "checkbox",
    "radio",
    "date"
  ])
};
const renderField = ({
  input: {name, ...rest},
  type,
  disabled,
  label,
  placeholder,
  meta: {touched, error, warning},
  wrapperClass,
  labelClass
}) => (
  <FormGroup className={wrapperClass}>
    <Label for={name} className={labelClass}>
      {label}
    </Label>
    <Input
      name={name}
      disabled={disabled}
      {...rest}
      placeholder={placeholder}
      type={type}
    />
    {touched &&
      ((error && <span className="text-danger">{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </FormGroup>
);

const FormFieldGroup = props => <Field  component={renderField} {...props} />;

FormFieldGroup.propTypes = propTypes;
FormFieldGroup.defaultPropTypes = {
  type: "text"
};

export default FormFieldGroup;

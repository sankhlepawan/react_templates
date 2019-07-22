import React from 'react';
import {Label, Input } from 'reactstrap';

const renderField = ({ input, disabled, label, type, meta: { touched, error, warning } }) => (
  <div>
    <Label className="control-label">{label}</Label>
    <div>
      <Input {...input} placeholder={label} type={type} className="form-control" disabled={false} />
      {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)
const renderDropDown = ({ input, disabled,optionsdata, label, type, meta: { touched, error, warning } }) => (
  <div>
    <Label className="control-label">{label}</Label>
    <div>
      <select>
        {optionsdata.map((data) => <option key={data.key} value={data.value}>{data.key}</option>)}
      </select>
    </div>
  </div>
)

export { renderField, renderDropDown }    

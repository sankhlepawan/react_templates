import React, { Component } from 'react';
import FormFieldGroup from "components/FormFieldGroup";
import {reduxForm} from "redux-form";
import hoc from "./hoc";

class LocationFilter extends Component {
    
    render() { 
        return ( 
            <div>
                <FormFieldGroup placeholder="Search..."></FormFieldGroup>
            </div>
         );
    }
}
 

export default hoc(
    reduxForm({
      form: "searchLocationFilterForm"
    })(LocationFilter)
  );

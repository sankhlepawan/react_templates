import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";
// import {fetchLocationAction} from "actions";
import {connect} from "react-redux";

let AdminForm = ({locationList, handleSubmit, successMsg}) => (
  <form className="col-sm-6 row form" onSubmit={handleSubmit}>
    <div className="field">
      <div className="control">
        <label className="label">Email</label>
        <Field
          className="input"
          name="email"
          component="input"
          type="email"
          placeholder="Email Address"
        />
      </div>
    </div>

    <div className="field">
      <div className="control">
        <div className="select">
          <label className="label">Proficiency</label>
          <Field className="input" name="location" component="select">
            {locationList.map((loc, i) => (
              <option key={i} value={loc.locationName}>
                {loc.locationName}
              </option>
            ))}
          </Field>
        </div>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <button className="button is-link">Submit</button>
      </div>
    </div>
  </form>
);

AdminForm = reduxForm({
  form: "addAdmin"
})(AdminForm);

class AdminFormApp extends Component {
  componentDidMount() {
    this.props.fetchLocation();
  }

  handleAddAdmin = values => {
    var payload = {
      email: values.email,
      location: {locationName: values.location}
    };

    fetch("http://localhost:8080/api/user/addLocationAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <p className="App-intro">Add Admin Form</p>
          <AdminForm
            onSubmit={this.handleAddAdmin}
            locationList={this.props.LocationList}
          />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     LocationList: state.location.LocationList
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchLocation: () => dispatch(fetchLocationAction())
//   };
// };

export default connect(
  null,
  null
)(AdminFormApp);

import React  from "react";
import NavBar from "components/NavBar";
import {Row, Col} from "reactstrap";
import {ToastContainer} from "react-toastify";

import {AdminFormApp} from "routes/Admin";
import UserProfile from "routes/UserProfile";
import ViewAvailability from "routes/ViewAvailability";
import Bookings from "routes/Bookings";
import Rooms from "routes/Rooms/ViewRooms";
import AddRoom from "routes/Rooms/AddRoom/AddRoom";
import {Route, Switch,Router} from "react-router-dom";
import Registration from "routes/Registration";
import Login from "routes/Login";
import {Location} from "routes/Location";
import { SuperAdminDashboard } from 'components/Dashboard';
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import{ history } from 'store/history';

const App = () => (
  <div className="App">
    <ToastContainer />
    <NavBar />

    <div className="container-fluid">
      <Router history={history}>
      <Row>
        <Col sm="12">
          <Switch>
      
            <Route path="/login" exact component={Login} />
            <Route path="/register" component={Registration} />
            <Route
              path="/view-availability"
              exact
              component={ViewAvailability}
            />

            <Route path="/bookings" exact  component={Bookings} />
   
            <Route path="/rooms" exact component={Rooms} />
            <Route path="/add-room" exact component={AddRoom} />
            <Route path="/user-profile" exact component={UserProfile} />
            <Route path="/location" exact component={Location} />
            <Route path="/" exact component={Login} />
            <Route path="/admin" exact component={AdminFormApp} />
            <Route path="/admin-dashboard" exact component={SuperAdminDashboard}></Route>
          </Switch>
        </Col>
      </Row>
      </Router>
    </div>
    
  </div>
);

export default App;

import React from 'react';
import { Container,Col,Row, Jumbotron } from "reactstrap";
import { Location, LocationFilter } from 'routes/Location';

const SuperAdminDashboard = (props) => {
   return (
    <Container>
      <Jumbotron>
        <Row>
        <Col className="col-sm-3 border border-secondary">
          <LocationFilter />
        </Col>
        <Col className="col-sm-9"><Location /></Col>
          
        </Row>
        <Row className="border-top" style={{"margin-top": "10px"}}>
          <h1>user here</h1>
        </Row>
      </Jumbotron>
        
    </Container>
   )
}
 
export default SuperAdminDashboard;


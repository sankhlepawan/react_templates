import React from "react";
import { 
  Container, 
  Col, 
  Jumbotron 
} from "reactstrap";
import LocationList from "./LocationList";
import AddLocation from "./AddLocation";

function Location() {
  return (
    <Container>
        <Col>
          <AddLocation />
          <LocationList />
        </Col>
      
    </Container>
  );
}

export default Location;

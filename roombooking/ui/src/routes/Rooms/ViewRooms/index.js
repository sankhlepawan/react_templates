import React from "react";
import {Container, Col, Jumbotron} from "reactstrap";
import RoomsList from "./RoomsList";

const Rooms = () => (
  <Container>
    <Jumbotron>
      <Col>
        <RoomsList />
      </Col>
    </Jumbotron>
  </Container>
);

export default Rooms;

import React from 'react';
import LeftBar from './components/LeftBar';
import ViewBooking from './components/ViewBooking';
import {Row, Col } from 'reactstrap';

class ViewAvailability extends React.Component {
    render(){
        return(
            <Row>
               <Col sm="3">
                    <LeftBar />
               </Col>
               <Col sm="9">
                    <ViewBooking />
               </Col>
            </Row>
        )
    }
}

export default ViewAvailability;
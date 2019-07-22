import React from 'react'; 
import classnames from 'classnames/bind';
import {Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import styles from './Filters.scss'

let filersstyle = classnames.bind(styles);

class Filters extends React.Component {
    render(){
        return(
        <div className={filersstyle('mt10')}>             
            <h6 className="text-left">Filter By</h6>
            <Form className="text-left">
                <FormGroup>
                    <Label for="selectLocation">Location</Label>
                    <Input type="select" name="select" id="selectLocation">
                        <option>Indore</option>
                        <option>Pune</option> 
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="selectCapacity">Capacity</Label>
                    <Input type="select" name="select" id="selectCapacity">
                        <option>6 Seats</option>
                        <option>12 Seats</option> 
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="selectCapacity">Room Name</Label>
                    <Input type="select" name="select" id="selectCapacity">
                        <option>Mandu - (6 Seats)</option>
                        <option>Khajuraho - (12 Seats)</option> 
                    </Input>
                </FormGroup> 
                <FormGroup>
                    <Label>Availabilty</Label>
                </FormGroup>
                <FormGroup>
                    <Label for="toTime" className="col-sm-2 col-form-label">To</Label>
                    <Col sm="10" className={filersstyle('display-inline-block')}>
                    <Input type="time" name="time" readonly class="form-control-plaintext" id="toTime"/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="fromTime" className="col-sm-2 col-form-label">From</Label>
                    <Col sm="10" className={filersstyle('display-inline-block')}>
                    <Input type="time" name="time" readonly class="form-control-plaintext" id="fromTime"/>
                    </Col>
                </FormGroup>  
                <Button>Submit</Button>
            </Form>
        </div>         
             
        )
    }
}

export default Filters
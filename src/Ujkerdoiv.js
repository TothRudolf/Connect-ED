import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Ujkerdoiv = (props) => {
  return (
    <Form>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Kérdőív neve</Label>
        <Col sm={10}>
          <Input type="text" name="text" id="exampleEmail" placeholder="Nevezze el kérdőívét?" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Kérdések</Label>
        <Col sm={10}>
          <Input type="text" name="tex2" id="examplePassword" placeholder="Ide jönnek a kérések?" />
        </Col>
      </FormGroup>
    
    
     
      <FormGroup row>
        <Label for="checkbox2" sm={2}>Checkbox</Label>
        <Col sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Anonim mode
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2}}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}


export default Ujkerdoiv;
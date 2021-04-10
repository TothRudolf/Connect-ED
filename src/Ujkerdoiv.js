import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText,ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';

const Ujkerdoiv = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);
  function Random(props) {
    var maxNumber = 100000;
    var randomNumber = Math.floor((Math.random() * maxNumber) + 100000);
    return <h2>{randomNumber}</h2>;
  }
  
  const toggle = () => setModal(!modal);
  return (
    <Form>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Kérdőív neve</Label>
        <Col sm={10}>
          <Input type="text" name="text" id="exampleEmail" placeholder="Nevezze el kérdőívét." />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Kérdések</Label>
        <Col sm={10}>
          <Input type="text" name="text2" id="example" placeholder="Ide jön a kérdése." />
        </Col>
      </FormGroup>
    
    
     
      <FormGroup row>
       
        <Col sm={{ size: 10 }}>
          <FormGroup check>
            
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2}}>
          <Button  onClick={toggle}>{buttonLabel}Submit</Button>
          <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Kérdőív sikeresen létrehozva </ModalHeader>
        <ModalBody>
          <h4>Kérdése:</h4>
          <text2/>
          <br></br>
          
      <h2>Kérdőív kódja: </h2>
    
        <Random />
        </ModalBody>
        
        <ModalFooter>
          
          <Button color="danger" onClick={toggle}>Visszatér</Button>
        </ModalFooter>
      </Modal>
        </Col>
      </FormGroup>
    </Form>
    
  );
}


export default Ujkerdoiv;
import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText,ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Ujkerdoiv = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);

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
          <Input type="text" name="tex2" id="examplePassword" placeholder="Ide jön a kérdése." />
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
          <h4>Kérdése: Milyen hatékony volt a pénteki óra?</h4>
          <br></br>
          
      <h2>Kérdőív kódja: 832812</h2>
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
import { RadioButton, Slider } from 'material-ui';
import React, { useState } from 'react';
import { MDBRangeInput } from "mdbreact";
import firebase from './firebase'

import { Col, Button, Form, FormGroup, Label, Input, FormText,ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';

const Valasz = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);
  const savevalasz = () => {
    toggle();
    console.log('hello')

    const todoRef = firebase.database().ref('valaszok');
    const todo = {
      id: "kod",
      title: "neve",
      complete: "ertek"
    };  

    todoRef.push(todo);
  }
  
  
  const toggle = () => setModal(!modal);
  return (
    <Form>
      
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Kérdőív kódja </Label>
        <Col sm={10}>
          <Input type="text" name="text2" id="example" placeholder="Irja be a kódot." />
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
        <ModalHeader toggle={toggle}>Válaszoljon a kérdésre</ModalHeader>
        <ModalBody>
          <h4>Kérdés: Mennyire volt hatékony a pénteki matekóra?</h4>
        
          <div className="my-5">
      <label htmlFor="customRange1">Example range</label>
      
      <input type="range" className="custom-range" id="customRange1" />
    </div>
      
    

        </ModalBody>
        
        <ModalFooter>
        <Label check>
              <Input color="warning" type="checkbox"  name="radio2" />{' '}
              Annonim mód
            </Label>
          <Button color="success" onClick={savevalasz}>Küldje el válaszát</Button>
        </ModalFooter>
      </Modal>
        </Col>
      </FormGroup>
    </Form>
    
  );
}


export default Valasz;
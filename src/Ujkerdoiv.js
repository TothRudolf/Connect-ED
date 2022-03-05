import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import firebase from './firebase.js';
import Valasz from './Valasz.js';


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

  const savekerdoiv = () => {
    toggle();
    console.log('asdadsadsas')

    const todoRef = firebase.database().ref('kerdoivek');
    const todo = {
      title: "Kerdoiv neve",
      complete: "kerdes"
    };

    todoRef.push(todo);
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
        <Col sm={{ size: 10, offset: 2 }}>
          <Button onClick={savekerdoiv}>{buttonLabel}Submit</Button>
          <Modal onClick={toggle} isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Kérdőív sikeresen létrehozva </ModalHeader>
            <ModalBody>
              <h4>Kérdése:</h4>
              <kerdes></kerdes>
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
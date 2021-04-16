import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Ujkerdoiv = (props) => {
  constructor(props){

    this.setState({
      usersCollection: db.collection("users")
    });
  }

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
    collection.add(document).then(function (doc) {
      console.log("Document successfully created!");

    })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

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
          <Button onClick={toggle}>{buttonLabel}Submit</Button>
          <Modal onclick={addButton} isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Kérdőív sikeresen létrehozva </ModalHeader>
            <ModalBody>
              <h4>Kérdése: Mennyire volt hatékony a pénteki matekóra?</h4>
              <text2 />
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
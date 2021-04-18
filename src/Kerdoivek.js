
import { ListGroup, ListGroupItem,Button, Modal, ModalHeader, ModalBody, ModalFooter, Progress, UncontrolledAlert , Alert} from 'reactstrap';
import React, { useState } from 'react';
import firebase from 'firebase';

 
const popup = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  const [visible, setVisible] = useState(true);
  const torles = () => {
    toggle();
    console.log('eiajdas')

    const todoRef = firebase.database().ref('deletetodo').child(deletetodo.id);
   

    todoRef.push(deletetodo);
    const onDismiss = () => setVisible(false)
    const deletetodo = () => {
      
      todoRef.remove();
    };
    todoRef.push(deletetodo);
  }

  
  return (
    <div>
     
     
    
      <h3>Kérdőívek </h3>
      <ListGroup>
        <UncontrolledAlert color="primary" onClick={toggle}>{buttonLabel} Mennyire volt hatékony a pénteki matekóra?</UncontrolledAlert >

        <UncontrolledAlert color="info" onClick={toggle}>{buttonLabel}Mennyire értetted meg az integrálást?</UncontrolledAlert>
        <UncontrolledAlert color="success" onClick={toggle}>{buttonLabel}Mennyire sikerült elsajátítani Románia földrajzát?</UncontrolledAlert>
        <UncontrolledAlert color="warning" onClick={toggle}>{buttonLabel}Milyen mértékben értetted meg a hétfői fizika leckét?</UncontrolledAlert>
        
      </ListGroup>
      
     
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Kérdőív eredmenyei </ModalHeader>
        <ModalBody>
        <div className="text-center">75%</div>
      <Progress value={75} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={torles}>Kerdoiv törlése</Button>{' '}
          <Button color="secondary" onClick={toggle}>Visszatér</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
    
  
}


export default popup;
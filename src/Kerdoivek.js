
import { ListGroup, ListGroupItem,Button, Modal, ModalHeader, ModalBody, ModalFooter, Progress } from 'reactstrap';
import React, { useState } from 'react';

const popup = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
     
     
    
      <h3>Kérdőívek </h3>
      <ListGroup>
        <ListGroupItem color="primary" onClick={toggle}>{buttonLabel} Milyen hatékony volt a pénteki óra?</ListGroupItem>

        <ListGroupItem color="info" onClick={toggle}>{buttonLabel}Mit értetél meg az integrálásból?</ListGroupItem>
        <ListGroupItem color="success" onClick={toggle}>{buttonLabel}Románia földrajza megy-e?</ListGroupItem>
        <ListGroupItem color="warning" onClick={toggle}>{buttonLabel}Várod a vakációt?</ListGroupItem>
        
      </ListGroup>
      
     
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Kérdőív eredmenyei </ModalHeader>
        <ModalBody>
        <div className="text-center">75%</div>
      <Progress value={75} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Részletek megtekintése</Button>{' '}
          <Button color="secondary" onClick={toggle}>Visszatér</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
    
  
}


export default popup;
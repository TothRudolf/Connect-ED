
import { ListGroup, ListGroupItem,Button, Modal, ModalHeader, ModalBody, ModalFooter, Progress, UncontrolledAlert , Alert} from 'reactstrap';
import React, { useState } from 'react';

const popup = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false)

  return (
    <div>
     
     
    
      <h3>Kérdőívek </h3>
      <ListGroup>
        <UncontrolledAlert color="primary"  onClick={toggle}>{buttonLabel} Milyen hatékony volt a pénteki óra?</UncontrolledAlert >

        <UncontrolledAlert color="info" onClick={toggle}>{buttonLabel}Mennyire értetted meg az integrálást?</UncontrolledAlert>
        <UncontrolledAlert color="success" onClick={toggle}>{buttonLabel}Románia földrajza megy-e?</UncontrolledAlert>
        <UncontrolledAlert color="warning" onClick={toggle}>{buttonLabel}Várod a vakációt?</UncontrolledAlert>
        
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
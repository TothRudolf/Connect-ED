import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
     
     
    
      <h3>Kérdőívek </h3>
      <ListGroup>
        <ListGroupItem tag="button" action>Milyen hatékony volt a pénteki óra?</ListGroupItem>
        <ListGroupItem tag="button" action>Mit értetél meg az integrálásból?</ListGroupItem>
        <ListGroupItem tag="button" action>Románia földrajza megy-e?</ListGroupItem>
        <ListGroupItem tag="button" action>Várod a vakációt?</ListGroupItem>
        
      </ListGroup>
    </div>
  );
}

export default Example;
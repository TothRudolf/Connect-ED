import React from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import classnames from 'classnames';
import Container from 'reactstrap/lib/Container';
import ImageForm from './ImageForm';
import TextForm from './TextForm';
import NameForm from './NameForm';
import TestArea from './TestArea';
import ThreadForm from './ThreadForm';
import Slider from './Slider';
import Ujkerdoiv from './Ujkerdoiv';
import Kerdoivek from './Kerdoivek';
///import DiakForm from './DiakForm';
import List from "reactstrap";

class DiakMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: '1',
            message: '',
            name: '',
            threadName: 'default',
            image: null
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

   

    render() {
        return (
            <Container className="wide">
                <Nav tabs>
                   
                    
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Válaszolj
                         </NavLink>
                    </NavItem>
                  
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <br />
                       
                    </TabPane>
                   
                </TabContent>
            </Container>
        )
    }
}

export default DiakMenu;
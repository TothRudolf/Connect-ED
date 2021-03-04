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
<<<<<<< HEAD
import Kerdoivek from './Kerdoivek';
=======
import DiakForm from './DiakForm';
>>>>>>> 84f83010ac133ea8e4b39463dc53f58caad81182

class Fomenu extends React.Component {
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

    messageUpdate = (message) => {
        this.setState({
            message: message
        })
    }

    threadNameUpdate = (threadName) => {
        this.setState({
            threadName: threadName
        })
    }

    nameUpdate = (name) => {
        this.setState({
            name: name
        })
    }

    imageUpdate = (image) => {
        this.setState({
            image: image
        })
    }

    assembleAndSendMessage = () => {
        let messageToSend = {
            text: this.state.message,
            image: this.state.image
        };
        this.props.send(messageToSend);
    }

    saveUsername = () => {
        this.props.saveUsername(this.state.name);
    }

    loadImageByHash = (imageHash) => {
        this.props.getImageByHash(imageHash)
    }

    sendSetThreadNameMessage = () => {
        this.props.setThread(this.state.threadName);
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
                            Kérdőív létrehozása
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Kérdőív listája
                         </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Diak Form
                         </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.toggle('4'); }}
                        >
                            Test area
                         </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '5' })}
                            onClick={() => { this.toggle('5'); }}
                        >
                            Thread
                         </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <br />
                        <Ujkerdoiv/>
                    </TabPane>
                    <TabPane tabId="2">
                        <br />
                        
                    </TabPane>
                    <TabPane tabId="3">
                        <br />
<<<<<<< HEAD
                        
=======
                        <DiakForm/>
>>>>>>> 84f83010ac133ea8e4b39463dc53f58caad81182
                    </TabPane>
                    <TabPane tabId="4">
                        <br />
                        <TestArea send={this.loadImageByHash} />
                    </TabPane>
                    <TabPane tabId="5">
                        <br />
                        <ThreadForm setThread={this.sendSetThreadNameMessage} threadNameUpdate={this.threadNameUpdate} threadName={this.props.threadName}/>
                    </TabPane>
                </TabContent>
            </Container>
        )
    }
}

export default Fomenu;
import React from 'react';
import { List, ListGroup, ListGroupItem } from 'reactstrap';
import { Button, Spinner, Container, Row, Col, Jumbotron } from 'reactstrap';
import { NavbarToggler, Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


import DiakMenu from './DiakMenu.js';


class DiakFelulet extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            showNavbar: false,
            appStarted: false,
            workerInitialized: false,
            show: false,
            isNameAvailable: false,
            name: undefined,
            threadName: 'default'
        }

        this.broadcastChannel = new BroadcastChannel('broadcastChannel');
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar(e) {
        this.broadcastChannel.postMessage({ command: 'initialSync' });
        e.preventDefault();
        this.setState({
            showNavbar: !this.state.showNavbar
        });
    }

    componentDidMount() {
        this.broadcastChannel.addEventListener('message', this.receiveMessageFromWorker);
        
    }

   

    render() {
        return (
            <div>
                <p></p>
                <Container tag="section" className="text-center mb-4">
                    <img src="logo.png" alt="" width="135px" />
                </Container>
                <Container>
                    <Row className="justify-content-sm-center">
                        <Col >
                            <main>

                                <DiakMenu send={this.sendMessageToWorker}
                                    saveUsername={this.saveUsername}
                                    name={this.state.name}
                                    threadName={this.state.threadName}
                                    setThread={this.setThread}
                                    isNameAvailable={this.state.isNameAvailable}
                                    getImageByHash={this.addImageWithHashToList} />
                            </main>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default DiakFelulet;
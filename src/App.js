import React from 'react'
import DiakFelulet from './DiakFelulet.js'
import TanariFelulet from './TanariFelulet.js'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Button, Spinner, Container, Row, Col, Jumbotron } from 'reactstrap';
import { NavbarToggler, Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import registerServiceWorker from './registerServiceWorker';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';
///ez a 2 vart adtam hozza 
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://connected-5c042.firebaseio.com"
});

class App extends React.Component {

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

    renderLoadedState = () => {
        const { messages } = this.state;
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={DiakFelulet} exact />
                        <Route path="/tanar" component={TanariFelulet} exact />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }


    toggleNavbar(e) {
        this.broadcastChannel.postMessage({ command: 'initialSync' });
        e.preventDefault();
        this.setState({
            
            showNavbar: !this.state.showNavbar
        });
    }

  
    render() {
        return (
            <div>
                <Navbar className="header" color="faded" light expand="md">
                    <Container>
                        <NavbarBrand className="mr-auto" to="/">ConnectED</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} />
                        <Collapse navbar isOpen={this.state.showNavbar}>
                            <Nav navbar className="ml-sm-auto">
                                <NavItem>
                                    <NavLink href="https://apaczai.ro/">Iskola weboldala</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="">Teams</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                {this.renderLoadedState() }
            </div>
        );
    }
}

export default App;


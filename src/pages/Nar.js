import React, { Component } from 'react';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Nar extends Component{

  constructor(){
    super()


  }

  clickedEvent(){
    console.log("it is click")
  }
    render(){
      return(
        <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">SM Slack</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/events">
            Events
          </NavItem>
          <NavItem eventKey={2} href="/announcement">
            Announcement
          </NavItem>
          <NavItem eventKey={3} href="/group-message">
            Group Message
          </NavItem>
          <NavItem eventKey={4} href="/personal-message">
            Personal Message
          </NavItem>
        </Nav>
      </Navbar>
      );
    }
}
export default Nar;

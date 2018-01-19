import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Glyphicon } from "react-bootstrap";
import Routes from "./Routes";
import RouteNavItem from "./components/RouteNavItem";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/"><Glyphicon glyph="home" /></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <RouteNavItem href="/signup"><Glyphicon glyph="pencil" /></RouteNavItem>
              <RouteNavItem href="/login"><Glyphicon glyph="user" /></RouteNavItem>
              <RouteNavItem href="/autre"><Glyphicon glyph="star" /></RouteNavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <Routes />
    </div>
    );
  }
}

export default App;

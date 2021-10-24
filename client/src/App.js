import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthContext } from "./utils/AuthContext";
import axios from "axios";

import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import { Nav, Navbar, Button } from "react-bootstrap";
import styled from "styled-components";

const NavStyle = styled.div`
  .navbar {
    background-color: #333;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: white;
    &:hover {
      color: #ff7664;
    }
  }
`;

function App() {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState(false);
        } else {
          setAuthState(true);
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState(false);
  };

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <>
        <NavStyle>
          <Navbar bg="primary" expand="lg">
            <Navbar.Brand href="/">Fit-Forward</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item>
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
                {!authState ? (
                  <>
                    <Nav.Item>
                      <Nav.Link href="/login">
                        <Button variant="light">Login</Button>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/register">
                        <Button variant="light">Register</Button>
                      </Nav.Link>
                    </Nav.Item>
                  </>
                ) : (
                  <>
                    <Nav.Item>
                      <Nav.Link href="/dashboard">DashBoard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/">
                        <Button variant="secondary" onClick={logout}>
                          Log Out
                        </Button>
                      </Nav.Link>
                    </Nav.Item>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </NavStyle>

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Registration} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </>
    </AuthContext.Provider>
  );
}

export default App;

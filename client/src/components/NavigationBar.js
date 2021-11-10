import React, { useEffect, useContext } from "react";
import axios from "axios";

import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../utils/AuthContext";

import { Nav, Navbar, Button } from "react-bootstrap";
import { Layout } from "../UI/Layout";
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
  .nav-items {
    float: right;
  }
`;

const NavigationBar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("accessToken");
    history.push("/");
    setIsAuth({ username: "", id: 0, status: false });
  };

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <NavStyle>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Layout>
            <LinkContainer to="/">
              <Navbar.Brand>Fit-Forward</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="mr-auto"
                className="justify-content-end"
                style={{ width: "100%" }}
              >
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
                {!isAuth.status ? (
                  <>
                    <LinkContainer to="/login">
                      <Nav.Link>
                        <Button size="sm" variant="light">
                          Login
                        </Button>
                      </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/register">
                      <Nav.Link>
                        <Button size="sm" variant="light">
                          Register
                        </Button>
                      </Nav.Link>
                    </LinkContainer>
                  </>
                ) : (
                  <>
                    <LinkContainer to="/dashboard">
                      <Nav.Link>DashBoard</Nav.Link>
                    </LinkContainer>
                    <Nav.Link>
                      <Button variant="primary" size="sm" onClick={logout}>
                        Log Out
                      </Button>
                    </Nav.Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Layout>
        </Navbar>
      </NavStyle>
    </AuthContext.Provider>
  );
};

export default NavigationBar;

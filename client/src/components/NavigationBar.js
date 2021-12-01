import React, { useContext } from "react";

import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

import logo from "../assets/logo.png";
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

  .logo {
    margin-right: 1.5em;
    width: 50px;
    object-fit: cover;
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
        <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
          <Layout>
            <LinkContainer to="/">
              <Navbar.Brand>
                <img className="logo" src={logo} alt="logo" />
                Fit-Forward
              </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="mr-auto justify-content-end"
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

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Layout } from "../UI/Layout";

import logo from "../assets/logo.png";
import styled from "styled-components";

const FooterStyle = styled.div`
  .logo {
    margin-right: 1.5em;
    width: 50px;
    object-fit: cover;
  }
  .main-footer {
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Layout>
          <Navbar.Brand>
            <img className="logo" src={logo} alt="logo" />
            Fit-Forward
          </Navbar.Brand>
          <div className="main-footer">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Fit Forward - All Rights Reserved
            </p>
          </div>
        </Layout>
      </Navbar>
    </FooterStyle>
  );
};

export default Footer;

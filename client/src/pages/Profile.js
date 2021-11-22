import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../UI/Layout";

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

const Profile = () => {
  return (
    <Layout>
      <Link to="/dashboard">
        <FaArrowAltCircleLeft /> Return to Dashboard
      </Link>
      <Row></Row>
    </Layout>
  );
};

export default Profile;

import React from "react";
import { Link } from "react-router-dom";

import ActivitySearch from "../components/ActivitySearch";
import ActivityForm from "../components/ActivityForm";
import { Layout } from "../UI/Layout";

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

const Styled = styled.div`
  margin-top: 1em;
`;

const AddActivity = () => {
  return (
    <Styled>
      <Layout>
        <h3>
          <Link to="/dashboard">
            <FaArrowAltCircleLeft /> Return to Dashboard
          </Link>
        </h3>
        <Row>
          <Col>
            <ActivitySearch />
          </Col>
          <Col>
            <ActivityForm />
          </Col>
        </Row>
      </Layout>
    </Styled>
  );
};

export default AddActivity;

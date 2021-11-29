import React from "react";
import { Link } from "react-router-dom";

import FoodSearch from "../components/FoodSearch";
import FoodForm from "../components/FoodForm";
import { Layout } from "../UI/Layout";

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

const Styled = styled.div`
  margin-top: 1em;
`;

const AddFood = () => {
  return (
    <Styled>
      <Layout>
        <div className="return-link">
          <h3>
            <Link to="/dashboard">
              <FaArrowAltCircleLeft /> Return to Dashboard
            </Link>
          </h3>
        </div>
        <Row>
          <Col>
            <FoodSearch />
          </Col>
          <Col>
            <FoodForm />
          </Col>
        </Row>
      </Layout>
    </Styled>
  );
};

export default AddFood;

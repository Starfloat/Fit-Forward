import React from "react";
import { Link } from "react-router-dom";

import FoodSearch from "../components/FoodSearch";
import FoodForm from "../components/FoodForm";
import { Layout } from "../UI/Layout";

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

const AddFood = () => {
  return (
    <Layout>
      <Link to="/dashboard">
        <FaArrowAltCircleLeft /> Return to Dashboard
      </Link>
      <Row>
        <Col>
          <FoodSearch />
        </Col>
        <Col>
          <FoodForm />
        </Col>
      </Row>
    </Layout>
  );
};

export default AddFood;

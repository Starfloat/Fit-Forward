import React from "react";
import FoodSearch from "../components/FoodSearch";
import FoodForm from "../components/FoodForm";
import { Layout } from "../UI/Layout";

import { Col, Row } from "react-bootstrap";

const AddFood = () => {
  return (
    <Layout>
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

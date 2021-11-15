import React from "react";
import ActivitySearch from "../components/ActivitySearch";
import ActivityForm from "../components/ActivityForm";
import { Layout } from "../UI/Layout";

import { Col, Row } from "react-bootstrap";

const AddActivity = () => {
  return (
    <Layout>
      <Row>
        <Col>
          <ActivitySearch />
        </Col>
        <Col>
          <ActivityForm />
        </Col>
      </Row>
    </Layout>
  );
};

export default AddActivity;

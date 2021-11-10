import React from "react";
import styled from "styled-components";
import { Jumbotron, Button } from "react-bootstrap";
import banner from "../assets/banner.jpg";
import food from "../assets/food.jpg";
import exercise from "../assets/exercise.jpg";
import goals from "../assets/goals.jpg";

import { Layout } from "../UI/Layout";
// import { Grid } from "@material-ui/core";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Styles = styled.div`
  .jumbotron {
    text-align: center;
    background-color: transparent;
    max-width: 100%;
    height: auto;
  }
  .feature-cards {
    display: flex;
    text-align: center;
    margin-left: 5em;
  }
`;

function Home() {
  return (
    <Layout>
      <Styles>
        <Jumbotron>
          <img src={banner} className="img-fluid shadow-4" />
          <h1 className="display-3">Fit-Forward</h1>
          <p className="lead">
            Your own personal fitness journal where you can track the foods and
            macronutrients you eat and the calories you burn from various
            activities.
          </p>
          <hr className="my-2" />
          <p>The best inventment you've ever make is your own health.</p>
          <p className="lead">
            <Button color="primary">Sign up</Button>
          </p>
        </Jumbotron>

        <Container fluid>
          <div className="feature-cards">
            <Row>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={food} />
                  <Card.Body>
                    <Card.Title>Nutrition Tracking</Card.Title>
                    <Card.Text>
                      Have access to over 2000 foods, including branded foods to
                      help you keep track of your macronutrients.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={exercise} />
                  <Card.Body>
                    <Card.Title>Activity Tracking</Card.Title>
                    <Card.Text>
                      Calculate calories burned with every day, day-to-day
                      activities provided by the "Compendium of Physical
                      Activities"
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={goals} />
                  <Card.Body>
                    <Card.Title>Reach Your Fitness Goals</Card.Title>
                    <Card.Text>
                      Set your desired calorie consumption per day and your
                      target weight. Effortlessly track your progress.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          {/* <Row>
            <Col xs={6} md={6}>
              <img src={food} thumbnail width="300" height="200" />
              <p></p>
            </Col>

            <Col xs={6} md={6}>
              <img src={exercise} thumbnail width="300" height="200" />
              <p></p>
            </Col>
          </Row> */}
        </Container>
      </Styles>
    </Layout>
  );
}

export default Home;

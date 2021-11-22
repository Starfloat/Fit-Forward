import React from "react";
import styled from "styled-components";
import { Jumbotron, Button } from "react-bootstrap";
import banner from "../assets/banner.jpg";
import food from "../assets/food-card.jpg";
import exercise from "../assets/exercise-card.jpg";
import goals from "../assets/goals-card.jpg";
import wavesNegative from "../assets/wavesNegative.svg";

import { Layout } from "../UI/Layout";
import Container from "react-bootstrap/Container";
import { Card, Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const Styles = styled.div`
  h1 {
    /* color: white; */
  }
  .jumbotron {
    /* color: white; */
    text-align: center;
    background-color: transparent;
    max-width: 100%;
    height: auto;
    padding-bottom: 0em;
  }
  .waves-1 {
    object-fit: fill;
  }
  .feature-cards {
    background-color: #a7d7c9;
    display: flex;
    text-align: center;
    justify-content: center;
    padding-bottom: 5em;
  }
  .card {
    box-shadow: 5px 5px 6px #888888;
    width: 18rem;
  }
`;

function Home() {
  return (
    <Styles>
      <Jumbotron>
        <Image fluid src={banner} className="banner" />
        <h1 className="display-3">Fit-Forward</h1>
        <p className="lead">
          Your own personal fitness journal where you can track the foods and
          macronutrients you eat and the calories you burn from various
          activities.
        </p>
        <hr className="my-2" />
        <p>The best inventment you can ever make is your own health.</p>
        <p className="lead">
          <Button color="primary">Sign up</Button>
        </p>
      </Jumbotron>
      <Image className="waves-1" src={wavesNegative}></Image>
      <Container fluid>
        <div className="feature-cards">
          <Row>
            <Col>
              <Card className="card">
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
              <Card className="card">
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
              <Card className="card">
                <Card.Img variant="top" src={goals} />
                <Card.Body>
                  <Card.Title>Fitness Goals</Card.Title>
                  <Card.Text>
                    Set your desired calorie consumption per day and your target
                    weight. Effortlessly track your progress.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </Styles>
  );
}

export default Home;

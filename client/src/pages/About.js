import React from "react";
import { Layout } from "../UI/Layout";
import styled from "styled-components";
import { Jumbotron } from "react-bootstrap";
import Charts from "../assets/Charts.jpg";
import Data from "../assets/Data.png";
import Money from "../assets/Money.png";

import Container from "react-bootstrap/Container";
import { Card, Col, Row } from "react-bootstrap";

const Styles = styled.div`
  .text-2 {
    text-align: center;
    background-color: transparent;
    max-width: 100%;
    height: auto;
    font-size: 70px;
  }

  .description {
    text-align: center;
    background-color: transparent;
    max-width: 100%;
    height: auto;
    font-size: 20px;
  }

  .goals {
    text-align: center;
    background-color: transparent;
    max-width: 100%;
    height: auto;
    font-size: 20px;
  }

  .list {
    text-align: center;
    background-color: transparent;
    max-width: 100%;
    height: auto;
    font-size: 20px;
  }

  ul {
    list-style: none;
    text-align: center;
  }

  .feature-cards {
    display: flex;
    text-align: center;
    justify-content: center;
    padding-bottom: 5em;
  }

  .jumbotron {
    text-align: center;
    max-width: 100%;
    height: auto;
    padding-bottom: 0em;
  }

  .card {
    box-shadow: 5px 5px 6px #888888;
    width: 20rem;
    height: 30rem;
  }
`;

const About = () => {
  return (
    <Layout>
      <Styles>
        <Jumbotron>
          <h1 className="text-2">Fit-Forward Product Description</h1>
          <p className="description">
            Our application is a tool that provides the user a digital diary
            which helps you keep track of your physical health and diet. You
            will have an easier time to be engaged in healthy eating habits and
            daily exercise routines.
          </p>
          <p className="goals">Goals</p>
          <ul>
            <li>
              Make an impact on impact for a long-term life fulfillment by
              helping them reach your health goals.
            </li>
            <li>
              Motivate our customers to put in the effort of maintaining and
              reaching their health goals.
            </li>
            <li>
              Produce reports which are easy to understand so they are kept in
              track of their fitness goals.
            </li>
            <li> Make a positive change in spending habits.</li>
          </ul>

          <Container fluid>
            <div className="feature-cards">
              <Row>
                <Col>
                  <Card className="card">
                    <Card.Img variant="top" src={Charts} />
                    <Card.Body>
                      <Card.Title>Visual Charts</Card.Title>
                      <Card.Text>
                        The results will be calculated and will be generated
                        into a simple visual report that will help our customers
                        understand their process.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Card className="card">
                    <Card.Img variant="top" src={Data} />
                    <Card.Body>
                      <Card.Title>Activity Search</Card.Title>
                      <Card.Text>
                        Converting your food into data and recording them has
                        never been simplier. You only have to put in your
                        activities, and fit-forward does the rest.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Card className="card">
                    <Card.Img variant="top" src={Money} />
                    <Card.Body>
                      <Card.Title>Price</Card.Title>
                      <Card.Text>
                        You can never put a price on health. That is why our
                        product is offered free of charge. Being healthy and fit
                        isn't a fad or a trend. It is a lifestyle.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </Jumbotron>
      </Styles>
    </Layout>
  );
};

export default About;

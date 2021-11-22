import React from "react";
import { Layout } from "../UI/Layout";
import styled from "styled-components";
import { Jumbotron } from "react-bootstrap";
import foodintake from "../assets/foodintake.JPG";
import activity from "../assets/activity.JPG";
import dashboard from "../assets/Dashboard.JPG";

import Container from "react-bootstrap/Container";
import { Card, Col, Row } from "react-bootstrap";

const Styles = styled.div`

}

.text-2 {
  text-align: center;
  background-color: transparent;
  max-width: 100%;
  height: auto;
  font-size :70px;
}


.description {
  text-align: center;
  background-color: transparent;
  max-width: 100%;
  height: auto;
  font-size : 20px;
}

.goals {
  text-align: center;
  background-color: transparent;
  max-width: 100%;
  height: auto;
  font-size : 20px;
}

.list {
  text-align: center;
  background-color: transparent;
  max-width: 100%;
  height: auto;
  font-size : 20px;
}

ul {
  list-style: none;
  text-align: center;
}

}
.feature-cards {
  text-align: center;
}

.card {
  box-shadow: 5px 5px 30px #888888;
  width: 60rem;
 
}

`;

const About = () => {
  return (
    <Layout>
      <Styles>
        <Jumbotron>
        
          <h1 className="text-2">Fit-Forward Description</h1>
          <p className = "description">
          Our application is a tool that provides the user a 
          digital diary which helps you keep track of your physical health and diet. You will have an easier 
          time to be engaged in healthy eating habits and daily exercise routines
          </p>
          <p className = "goals">Goals</p>
            <ul>
              <li>Make an impact on impact for a  long-term life fulfillment by helping reach your health goals.</li>
              <li>Motivate our customers  to put in the effort in time in maintaining and reaching their health goals.</li>
              <li>Produce reports which are easy for the user to understand so they are kept in track 
                of their fitness goals.</li>
              <li> Make a positive change in spending habits.</li>
            </ul>
          
            <Container fluid>
          <div className="feature-cards">
            <Row>
              <Col>
                <Card className="card">
                  <Card.Img variant="top" src={foodintake} />
                  <Card.Body>
                    <Card.Title>Food Search</Card.Title>
                    <Card.Text>
                      A simple interface that allows the user to select the food so that it 
                      records it in their account so they can keep track of their food input. 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          <p></p>
            <Row>

              <Col>
                <Card className="card">
                  <Card.Img variant="top" src={activity} />
                  <Card.Body>
                    <Card.Title>Activity Search</Card.Title>
                    <Card.Text>
                      You can easily search activites from our list provided by the source of the 
                      "Compendium Physical Activites" that gives you a clear description to list 
                      that you can select and record your activities. 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          <p></p>
            <Row>
              <Col>
                <Card className="card">
                  <Card.Img variant="top" src={dashboard} />
                  <Card.Body>
                    <Card.Title>Dashboard</Card.Title>
                    <Card.Text>
                      All your recorded data from food input and activities will generate a simple 
                      dashboard giving you a clear idea on where you stand on your health goals.
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

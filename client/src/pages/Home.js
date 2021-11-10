import React from "react";
import styled from "styled-components";
import { Jumbotron, Button } from "react-bootstrap";
import banner from "../assets/banner.jpg";
import food from "../assets/food.jpg";
import health from "../assets/health.jpg";
import exercise from "../assets/exercise.jpg";
import { Grid } from "@material-ui/core";
import { Col, Row, Form } from "react-bootstrap";

const Styles = styled.div`
  .jumbotron {
    text-align: center;
    background-color: transparent;
    max-width: 100%;
    height: auto;

  }
`;

function Home() {
  return (
    <Styles>
        <div style={{ backgroundImage: `url(${health})` }}>
      <Jumbotron>
    
        <img src={banner} className="img-fluid shadow-4" />
        <h1 className="display-3">Fit-Forward</h1>
        <p className="lead">
          Your own personal fitness journal where you can track the foods and
          macronutrients you eat and the calories you burn from various
          activities.
        </p>
        <hr className="my-2" />
        <p >
          The best inventment you've ever make is your own health.
        </p>
        <p className="lead">
          <Button color="primary">Sign up</Button>
        </p>
        <Grid>
        <Row>
        <Col xs={6} md={6}>
        <img src= {food} thumbnail width="300" height="200" />
        <p>Our application will provide details information of food <br></br> consumption
         and help calcuate the results. </p>
           </Col>
           
           <Col xs={6} md={6}>
        <img src= {exercise} thumbnail width="300" height="200" />
        <p>Our software will also help track the an individual exercise<br>
        </br> and display the results to help better understand their progress. </p>
           </Col>
             </Row>
          </Grid>
     
      </Jumbotron>
      </div>
    </Styles>
  );
}

export default Home;

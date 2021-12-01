import React from "react";
import Hero from "../components/Hero";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

import waves from "../assets/waves.svg";
import wavesNegative from "../assets/wavesNegative.svg";
import fooddatabase from "../assets/food-database.png";
import activity from "../assets/activity.png";
import meal from "../assets/meal.png";
import target from "../assets/target.png";
import goal from "../assets/goal.png";

const HomeStyled = styled.div`
  .center-info {
    text-align: center;
    justify-content: center;
    font-size: 24px;
    padding-top: 0.4em;
    padding-bottom: 0.4em;
  }
  .info1 {
    display: flex;
    flex-direction: row;
    padding-top: 5em;
    padding-bottom: 5em;
    justify-content: center;
    background-color: #fafbfb;
  }
  .info2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: right;
    background-color: #daeee8;
  }
  .info3 {
    background-color: #fafbfb;
    text-align: center;
    justify-content: center;
    padding-bottom: 5em;
  }
  .food-database {
    object-fit: fill;
    width: 100%;
    height: 100%;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .waves-1 {
    background-color: #fafbfb;
  }
  .waves-2 {
    background-color: #fafbfb;
  }
`;

const Home = () => {
  return (
    <>
      <Hero />
      <HomeStyled>
        <section className="center-info">
          <p>
            Your own personal fitness journal where you can track the foods
            <br /> you eat and the calories you burn from various activities.
          </p>
        </section>

        <section className="info1">
          <div className="info1-left">
            <h2 className="display-4">Food Database</h2>
            <p className="lead">
              Have access to over 2000 foods, including branded foods to help
              you keep track of your macronutrients. <br /> The data retrieved
              is sourced by The Agricultural Research Service (ARS), USDA.
            </p>
            <Button className="button" color="primary">
              <a
                href="https://fdc.nal.usda.gov/about-us.html"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </a>
            </Button>
          </div>
          <div className="info1-right">
            <Image className="food-database" fluid src={fooddatabase} />
          </div>
        </section>
        <Image className="waves-1" src={wavesNegative}></Image>

        <section className="info2">
          <div className="info2-right">
            <Image className="activity-img" fluid src={activity} />
          </div>
          <div className="info2-left">
            <h2 className="display-4">Compendium of Activities</h2>
            <p className="lead">
              Calculate calories burned every day, from day-to-day activities to
              intense calisthenics and sports <br /> provided by the "Compendium
              of Physical Activities" from Arizona State University.
            </p>
            <Button className="button" color="primary">
              <a
                href="https://sites.google.com/site/compendiumofphysicalactivities/home?authuser=0"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </a>
            </Button>
          </div>
        </section>
        <Image className="waves-2" src={waves}></Image>

        <section className="info3">
          <Row>
            <Col>
              <Image fluid src={meal} />
              <h2 className="display-5">Log Your Meals & Activity</h2>
              <p className="lead">
                Use the application to track your food and activities. Know
                exactly how much macronutrients you are intaking.{" "}
              </p>
            </Col>
            <Col>
              <Image fluid src={target} />
              <h2 className="display-5">Set Your Targets</h2>
              <p className="lead">
                Set your Caloric Goals and target weight. Set your macronutrient
                goals for macronutrients such as Protein, Carbohydrates, and
                Fats.
              </p>
            </Col>
            <Col>
              <Image fluid src={goal} />
              <h2 className="display-5">Reach Your Goals</h2>
              <p className="lead">
                Track your progress, check your weight-loss projection and get
                continual feedback through our visual graphs.
              </p>
            </Col>
          </Row>
        </section>
      </HomeStyled>
    </>
  );
};

export default Home;

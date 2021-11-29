import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup";
import { Layout } from "../UI/Layout";
import styled from "styled-components";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import Card from "react-bootstrap/Card";

const Styled = styled.div`
  margin-top: 1em;
  p {
    margin-bottom: -0.1em;
  }
  .list-group {
    margin-top: 1.5em;
    width: 300px;
    text-align: center;
    font-size: larger;
    margin-left: 100px;
  }
  .card {
    text-align: center;
  }
  .calories-decrease {
    color: #6cc3d5;
    font-size: xx-large;
  }
  .calories-maint {
    color: #78c2ad;
    font-size: xx-large;
  }
  .calories-increase {
    color: #ff7851;
    font-size: xx-large;
  }
  .profile {
    margin-top: -1em;
  }
  .summary {
    margin-top: 0.1em;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
  }
  .stats {
    margin-top: -1em;
  }
  .text-success,
  .text-warning,
  .text-danger {
    font-size: x-large;
  }
`;

const Profile = () => {
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthDay] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [targetWeight, setTargetWeight] = useState(null);
  const [targetCalories, setTargetCalories] = useState(null);
  const [activityLevel, setActivityLevel] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/profile", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setUsername(response.data.username);
        setGender(response.data.gender);
        setBirthDay(response.data.birthday.slice(0, 10));
        setHeight(response.data.height);
        setWeight(response.data.weight);
        setTargetWeight(response.data.targetWeight);
        setTargetCalories(response.data.targetCalories);
        setActivityLevel(response.data.activityLevel);
      });
  }, []);

  const sex = gender === "male" ? 1 : 0;
  const userBMI = weight / 2.2046 / Math.pow(height / 100, 2);

  const calculateAge = (birthday) => {
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  //BF% = 1.20 x BMI + 0.23 x age - 10.8 x sex - 5.4
  const userBF =
    1.2 * userBMI + 0.23 * calculateAge(birthday) - 10.8 - sex - 5.4;

  const calculateBMR = (gender) => {
    if (gender === "male") {
      return (
        66 +
        13.7 * (weight / 2.2046) +
        5 * height -
        6.8 * calculateAge(birthday)
      );
    } else {
      return (
        665 +
        9.6 * (weight / 2.2046) +
        (1.8 + height) -
        4.7 * calculateAge(birthday)
      );
    }
  };

  const userTDEE = calculateBMR(gender) * activityLevel;
  const loseWeight = userTDEE - 500;
  const gainWeight = userTDEE + 500;

  const handleBMIStatus = (userBMI) => {
    if (userBMI <= 8.5) {
      let bmiStatus = <p className="text-warning">underweight</p>;
      return bmiStatus;
    } else if (userBMI >= 18.5 && userBMI <= 24.9) {
      let bmiStatus = <p className="text-success">normal/healthy weight</p>;
      return bmiStatus;
    } else if (userBMI >= 25 && userBMI <= 29.9) {
      let bmiStatus = <p className="text-danger">overweight</p>;
      return bmiStatus;
    } else if (userBMI >= 30) {
      let bmiStatus = <p className="text-danger">obese</p>;
      return bmiStatus;
    }
  };

  return (
    <Styled>
      <Layout>
        <h3>
          <Link to="/dashboard">
            <FaArrowAltCircleLeft /> Return to Dashboard
          </Link>
        </h3>
        <Row>
          <Col>
            <h2 className="text-info"> Profile</h2>

            <Paper elevation={5} className="profile">
              <ListGroup className="list-group" variant="flush">
                <p className="lead">Username</p>
                <ListGroup.Item>{username}</ListGroup.Item>
                <p className="lead">Gender</p>
                <ListGroup.Item>{gender.toUpperCase()}</ListGroup.Item>
                <p className="lead">Birthday</p>
                <ListGroup.Item>{birthday}</ListGroup.Item>
                <p className="lead">Height</p>
                <ListGroup.Item>{height}cm</ListGroup.Item>
                <p className="lead">Weight</p>
                <ListGroup.Item>{weight}lbs</ListGroup.Item>
                <p className="lead">Target Weight</p>
                <ListGroup.Item>{targetWeight}lbs</ListGroup.Item>
                <p className="lead">Target Calories</p>
                <ListGroup.Item>{targetCalories}</ListGroup.Item>
              </ListGroup>
            </Paper>
          </Col>
          <Col>
            <h2 className="text-info"> Status</h2>

            <Paper elevation={5} className="stats">
              <ListGroup className="list-group" variant="flush">
                <p className="lead">Age</p>
                <ListGroup.Item>{calculateAge(birthday)}</ListGroup.Item>
                <p className="lead">BMI</p>
                <ListGroup.Item>{Math.round(userBMI)}</ListGroup.Item>
                <p className="lead">Bodyfat %</p>
                <ListGroup.Item>{Math.round(userBF)}%</ListGroup.Item>
                <p className="lead">BMR</p>
                <ListGroup.Item>
                  {Math.round(calculateBMR(gender))}
                </ListGroup.Item>
                <p className="lead">TDEE</p>
                <ListGroup.Item>{Math.round(userTDEE)}</ListGroup.Item>
              </ListGroup>
            </Paper>
          </Col>
          <div className="summary">
            <h2 className="text-info"> Summary</h2>
            <Col>
              <Paper elevation={5} className="summary">
                <Row>
                  <Col>
                    <Card body>
                      <h3>You are...</h3>
                      {handleBMIStatus(userBMI)}
                    </Card>
                  </Col>
                  <Col>
                    <Card body>
                      <h3>Your body needs...</h3>
                      <span className="calories-decrease">
                        {Math.round(calculateBMR(gender))} calories <br />
                      </span>
                      to accomplish its most basic (basal) life-sustaining
                      functions.
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card body>
                      <h3>You should eat...</h3>
                      <span className="calories-decrease">
                        {Math.round(loseWeight)} calories <br />
                      </span>
                      to lose weight.
                    </Card>
                  </Col>
                  <Col>
                    <Card body>
                      <h3>You should eat...</h3>
                      <span className="calories-maint">
                        {Math.round(userTDEE)} calories <br />
                      </span>
                      to maintain your weight.
                    </Card>
                  </Col>
                  <Col>
                    <Card body>
                      <h3>You should eat...</h3>
                      <span className="calories-increase">
                        {Math.round(gainWeight)} calories <br />
                      </span>
                      to increase your weight.
                    </Card>
                  </Col>
                </Row>
              </Paper>
            </Col>
          </div>
        </Row>
      </Layout>
    </Styled>
  );
};

export default Profile;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup";
import { Layout } from "../UI/Layout";
import styled from "styled-components";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

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
        setBirthDay(response.data.birthday);
        setHeight(response.data.height);
        setWeight(response.data.weight);
        setTargetWeight(response.data.targetWeight);
        setTargetCalories(response.data.targetCalories);
      });
  }, []);

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
            <ListGroup className="list-group" variant="flush">
              <p className="lead">Username</p>
              <ListGroup.Item>{username}</ListGroup.Item>
              <p className="lead">Gender</p>
              <ListGroup.Item>{gender.toUpperCase()}</ListGroup.Item>
              <p className="lead">Birthday</p>
              {/* <ListGroup.Item>{birthday.slice(0, 10)}</ListGroup.Item> */}
              <ListGroup.Item>{birthday}</ListGroup.Item>
              <p className="lead">Height</p>
              <ListGroup.Item>{height}</ListGroup.Item>
              <p className="lead">Weight</p>
              <ListGroup.Item>{weight}</ListGroup.Item>
              <p className="lead">Target Weight</p>
              <ListGroup.Item>{targetWeight}</ListGroup.Item>
              <p className="lead">Target Calories</p>
              <ListGroup.Item>{targetCalories}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>BMI:</Col>
        </Row>
      </Layout>
    </Styled>
  );
};

export default Profile;

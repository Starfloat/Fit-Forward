import React, { useState, useContext } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

import loginsplash from "../assets/login-splash.jpg";
import { Layout } from "../UI/Layout";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const Styles = styled.div`
  margin-top: 4em;

  .form-group {
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .login-splash {
    border-radius: 30px;
    box-shadow: 5px 5px 6px #888888;
    object-fit: fill;
  }
  .login-card {
    margin-top: 25%;
  }

  .form-input {
    border-radius: 5px;
  }

  Button {
    margin-top: 15px;
  }
`;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuth } = useContext(AuthContext);

  let history = useHistory();

  const login = () => {
    const data = {
      username: username,
      password: password,
    };
    axios.post("http://localhost:3001/login", data).then((response) => {
      console.log(response.data);
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        setIsAuth({
          username: response.data.username,
          id: response.data.id,
          targetCalories: response.data.targetCalories,
          status: true,
        });
        history.push("/");
      }
    });
  };

  return (
    <Styles>
      <Layout>
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <Image
                  fluid
                  className="login-splash"
                  src={loginsplash}
                  alt="login-splash"
                />
              </Col>
              <Col>
                <Card className="login-card">
                  <Card.Body>
                    <div className="form-group">
                      <h2>Login</h2>
                      <label htmlFor="">User:</label>
                      <input
                        className="form-input"
                        type="text"
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                      <label htmlFor="">Password: </label>
                      <input
                        className="form-input"
                        type="password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />

                      <Button onClick={login}>Login</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Layout>
    </Styles>
  );
}

export default Login;

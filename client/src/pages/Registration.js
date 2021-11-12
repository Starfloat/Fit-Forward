import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

import registration from "../assets/registration-splash.jpg";

const Styles = styled.div`
  text-align: center;
  margin-top: 8em;

  .card {
    padding: 1.5em 1.5em 1.5em 1.5em;
    box-shadow: 5px 5px 6px #888888;
  }
  .form-group {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    align-items: center;
  }
  .registration-splash {
    border-radius: 15px;
    width: 500px;
    object-fit: cover;
  }
  span {
    color: red;
  }
  .radio {
    margin-left: 15px;
  }
  Button {
    margin-top: 15px;
  }
`;

function Registration() {
  const history = useHistory();

  const initValues = {
    username: "",
    password: "",
    gender: "",
    birthday: "",
    height: "",
    weight: "",
    targetWeight: "",
    targetCalories: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(6).max(99).required(),
    gender: Yup.string().required(),
    birthday: Yup.date().required(),
    height: Yup.number().required().positive().integer(),
    weight: Yup.number().required().positive(),
    targetWeight: Yup.number().required().positive(),
    targetCalories: Yup.number().required().positive(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/", data).then(() => {
      console.log(data);
    });
    history.push("/");
  };

  return (
    <Styles>
      <Card className="card">
        <Row>
          <Col>
            <img className="registration-splash" src={registration}></img>
          </Col>
          <Col>
            <Formik
              initialValues={initValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              <Form className="form-group">
                <h1>Register</h1>
                <p className="lead">Let's create your account</p>

                <label>Username: </label>
                <ErrorMessage name="username" component="span" />
                <Field autoComplete="off" name="username" />
                <label>Password: </label>
                <ErrorMessage name="password" component="span" />
                <Field type="password" autoComplete="off" name="password" />

                <div id="my-radio-group">Gender</div>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field
                      className="radio"
                      name="gender"
                      type="radio"
                      value="male"
                    />
                    Male
                  </label>
                  <label>
                    <Field
                      className="radio"
                      name="gender"
                      type="radio"
                      value="female"
                    />
                    Female
                  </label>
                </div>

                <label>Birthday </label>
                <ErrorMessage name="birthday" component="span" />
                <Field
                  autoComplete="off"
                  name="birthday"
                  placeholder="YYYY-MM-DD"
                />

                <label>Height (cm): </label>
                <ErrorMessage name="height" component="span" />
                <Field autoComplete="off" name="height" />

                <label>Weight: </label>
                <ErrorMessage name="weight" component="span" />
                <Field autoComplete="off" name="weight" />

                <label>Target Weight: </label>
                <ErrorMessage name="targetWeight" component="span" />
                <Field autoComplete="off" name="targetWeight" />

                <label>Target Calories: </label>
                <ErrorMessage name="targetWeight" component="span" />
                <Field autoComplete="off" name="targetCalories" />

                <Button type="submit">Register</Button>
              </Form>
            </Formik>
          </Col>
        </Row>
      </Card>
    </Styles>
  );
}

export default Registration;

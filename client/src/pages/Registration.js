import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Layout } from "../UI/Layout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Select from "../components/Select";
import * as Yup from "yup";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import registration from "../assets/registration-splash.jpg";

const Styles = styled.div`
  text-align: center;
  margin-top: 1.5em;

  .card {
    padding: 1.5em 1.5em 1.5em 1.5em;
    -moz-box-shadow: 0 0 5px #999;
    -webkit-box-shadow: 0 0 5px #999;
    box-shadow: 0 0 5px #999;
  }
  .form-group {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    align-items: center;
  }
  .form-control {
    margin-top: 1.5em;
    border-style: none;
  }
  .registration-splash {
    border-radius: 15px;
    width: 500px;
    object-fit: cover;
  }
  span {
    color: red;
  }
  .error {
    color: red;
  }
  .radio {
    margin-left: 15px;
  }
  Button {
    margin-top: 30px;
  }
`;

function Registration() {
  const history = useHistory();
  const dropDownOptions = [
    { key: "Select Activity Level", value: "" },
    { key: "Sedentary (Little or no Exercise, Desk Job)", value: 1.2 },
    {
      key: "Lightly Active (Light Exercise/Sports 1-3 days/week)",
      value: 1.55,
    },
    {
      key: "Very Active (Hard Exercise Everyday/Exercising 2x/day)",
      value: 1.725,
    },
    {
      key: "Extra Active (Hard Exercise 2x/day or Marathon/Triathalon Trainer)",
      value: 1.9,
    },
  ];

  const initValues = {
    username: "",
    password: "",
    gender: "",
    birthday: "",
    height: "",
    weight: "",
    targetWeight: "",
    targetCalories: "",
    activityLevel: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required("Required"),
    password: Yup.string().min(6).max(99).required("Required"),
    gender: Yup.string().required("Required"),
    birthday: Yup.date().required("Required"),
    height: Yup.number().required("Required").positive().integer(),
    weight: Yup.number().required("Required").positive(),
    targetWeight: Yup.number().required("Required").positive(),
    targetCalories: Yup.number().required("Required").positive(),
    activityLevel: Yup.string().required("Required"),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/", data).then(() => {
      console.log(data);
      history.push("/");
    });
  };

  return (
    <Styles>
      <Layout>
        <Card className="card">
          <Row>
            <Col>
              <Image
                fluid
                className="registration-splash"
                src={registration}
              ></Image>
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

                  <Select name="activityLevel" options={dropDownOptions} />

                  <Button type="submit">Register</Button>
                </Form>
              </Formik>
            </Col>
          </Row>
        </Card>
      </Layout>
    </Styles>
  );
}

export default Registration;

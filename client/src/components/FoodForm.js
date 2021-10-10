import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const Styles = styled.div`
  text-align: center;
  margin-top: 5%;
  .form-group {
    display: flex;
    flex-direction: column;
    float: right;
    overflow: hidden;
  }
  Button {
    margin-top: 20px;
  }
`;

const FoodForm = () => {
  const initValues = {
    foodName: "",
    protein: "",
    fat: "",
    carbohydrate: "",
    calories: "",
    servingSize: "",
  };

  const validationSchema = Yup.object().shape({
    foodName: Yup.string().min(3).max(15).required(),
    protein: Yup.number().required().positive(),
    fat: Yup.number().required().positive(),
    carbohydrate: Yup.number().required().positive(),
    calories: Yup.number().required().positive(),
    servingSize: Yup.number().required().positive().integer(),
  });

  const onSubmit = (data) => {};

  return (
    <>
      <Styles>
        <div className="AddFoodContainer">
          <Formik
            initialValues={initValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form className="form-group">
              <TextField
                name="foodName"
                placeholder="(ex...Bread)"
                label="Food Name"
              ></TextField>
              <TextField name="protein" label="Protein"></TextField>
              <TextField name="fat" label="Fats"></TextField>
              <TextField name="carbohydrate" label="Carbohydrates"></TextField>
              <TextField name="calories" label="Calories"></TextField>
              <TextField name="servingSize" label="Serving Size"></TextField>
              <Button color="primary" variant="contained" type="submit">
                Submit
              </Button>
            </Form>
          </Formik>
        </div>
      </Styles>
    </>
  );
};

export default FoodForm;

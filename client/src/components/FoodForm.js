import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const Styles = styled.div`
  margin-top: 5%;
  .form-group {
    display: flex;
    float: left;
  }
`;

const FoodForm = () => {
  const [food, setFood] = useState([
    {
      id: null,
      foodName: null,
      fats: null,
      carbohydrates: null,
      calories: null,
      servingSize: null,
    },
  ]);
  const addFood = (name) => {};

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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Styles>
      <h2>What did you eat?</h2>
      <div className="AddFoodContainer">
        <Formik
          initialValues={initValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="form-group">
            <TextField
              name="foodName"
              variant="outlined"
              placeholder="(ex...Bread)"
              label="Food Name"
            ></TextField>
            <TextField
              name="protein"
              variant="outlined"
              label="Protein"
            ></TextField>
            <TextField name="fat" variant="outlined" label="Fats"></TextField>
            <TextField
              name="carbohydrate"
              variant="outlined"
              label="Carbohydrates"
            ></TextField>
            <TextField
              name="calories"
              variant="outlined"
              label="Calories"
            ></TextField>
            <TextField
              name="servingSize"
              variant="outlined"
              label="Serving Size"
            ></TextField>
            <button color="primary" variant="contained" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </Styles>
  );
};

export default FoodForm;

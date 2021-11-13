import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const Styles = styled.div`
  .textField {
    margin-bottom: 15px;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  margin-left: 5em;
  button {
    margin-top: 15px;
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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Styles>
      <div className="AddFoodContainer">
        <Formik
          initialValues={initValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="form-group">
            <TextField
              className="textField"
              name="foodName"
              variant="outlined"
              placeholder="(ex...Bread)"
              label="Food Name"
            />
            <TextField
              className="textField"
              name="protein"
              variant="outlined"
              label="Protein"
            />
            <TextField
              className="textField"
              name="fat"
              variant="outlined"
              label="Fats"
            />
            <TextField
              className="textField"
              name="carbohydrate"
              variant="outlined"
              label="Carbohydrates"
            />
            <TextField
              className="textField"
              name="calories"
              variant="outlined"
              label="Calories"
            />
            <TextField
              className="textField"
              name="servingSize"
              variant="outlined"
              label="Serving Size"
            />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </Styles>
  );
};

export default FoodForm;

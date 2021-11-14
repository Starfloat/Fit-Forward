import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

import { AuthContext } from "../utils/AuthContext";

const Styles = styled.div`
  .text-field {
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

const validationSchema = Yup.object().shape({
  foodName: Yup.string().min(3).max(99).required(),
  protein: Yup.number().required().positive(),
  fat: Yup.number().required().positive(),
  carbohydrate: Yup.number().required().positive(),
  calories: Yup.number().required().positive(),
  servingSize: Yup.number().required().positive().integer(),
});

const FoodForm = () => {
  const { isAuth } = useContext(AuthContext);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      foodName: "",
      protein: "",
      fat: "",
      carbohydrate: "",
      calories: "",
      servingSize: "",
      UserId: isAuth.id,
    },
    validationSchema: validationSchema,
    onSubmit: (data) => {
      axios
        .post("http://localhost:3001/foodintake", data, {
          headers: { accessToken: localStorage.getItem("accessToken") },
        })
        .then((response) => {
          if (response.data.error) {
            console.log(response.data.error);
          } else {
            history.push("/dashboard");
          }
        });
    },
  });

  return (
    <Styles>
      <div className="AddFoodContainer">
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            className="text-field"
            id="foodName"
            name="foodName"
            label="Food"
            value={formik.values.foodName}
            onChange={formik.handleChange}
            error={formik.touched.foodName && Boolean(formik.errors.foodName)}
            helperText={formik.touched.foodName && formik.errors.foodName}
          />
          <TextField
            fullWidth
            variant="outlined"
            className="text-field"
            id="protein"
            name="protein"
            label="Protein"
            value={formik.values.protein}
            onChange={formik.handleChange}
            error={formik.touched.protein && Boolean(formik.errors.protein)}
            helperText={formik.touched.protein && formik.errors.protein}
          />
          <TextField
            fullWidth
            variant="outlined"
            className="text-field"
            id="fat"
            name="fat"
            label="Fat"
            value={formik.values.fat}
            onChange={formik.handleChange}
            error={formik.touched.fat && Boolean(formik.errors.fat)}
            helperText={formik.touched.fat && formik.errors.fat}
          />
          <TextField
            fullWidth
            variant="outlined"
            className="text-field"
            id="carbohydrate"
            name="carbohydrate"
            label="Carbohydrate"
            value={formik.values.carbohydrate}
            onChange={formik.handleChange}
            error={
              formik.touched.carbohydrate && Boolean(formik.errors.carbohydrate)
            }
            helperText={
              formik.touched.carbohydrate && formik.errors.carbohydrate
            }
          />
          <TextField
            fullWidth
            variant="outlined"
            className="text-field"
            id="calories"
            name="calories"
            label="Calories"
            value={formik.values.calories}
            onChange={formik.handleChange}
            error={formik.touched.calories && Boolean(formik.errors.calories)}
            helperText={formik.touched.calories && formik.errors.calories}
          />
          <TextField
            fullWidth
            variant="outlined"
            className="text-field"
            id="servingSize"
            name="servingSize"
            label="Seving Size"
            value={formik.values.servingSize}
            onChange={formik.handleChange}
            error={
              formik.touched.servingSize && Boolean(formik.errors.servingSize)
            }
            helperText={formik.touched.servingSize && formik.errors.servingSize}
          />
          <Button color="secondary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </div>
    </Styles>
  );
};

export default FoodForm;

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
  activityName: Yup.string().min(3).max(30).required(),
  minutesPerformed: Yup.number().required().positive(),
  mets: Yup.number().positive(),
});

const ActivityForm = () => {
  const { isAuth } = useContext(AuthContext);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      activityName: "",
      minutesPerformed: "",
      mets: 0,
      UserId: isAuth.id,
    },
    validationSchema: validationSchema,
    onSubmit: (data) => {
      axios
        .post("http://localhost:3001/addactivity", data, {
          headers: { accessToken: localStorage.getItem("accessToken") },
        })
        .then((response) => {
          if (response.data.error) {
            alert(response.data.error);
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
            id="activityName"
            name="activityName"
            label="Activity"
            value={formik.values.activityName}
            onChange={formik.handleChange}
            error={
              formik.touched.activityName && Boolean(formik.errors.activityName)
            }
            helperText={
              formik.touched.activityName && formik.errors.activityName
            }
          />
          <TextField
            fullWidth
            variant="outlined"
            className="text-field"
            id="minutesPerformed"
            name="minutesPerformed"
            label="Minutes"
            value={formik.values.minutesPerformed}
            onChange={formik.handleChange}
            error={
              formik.touched.minutesPerformed &&
              Boolean(formik.errors.minutesPerformed)
            }
            helperText={
              formik.touched.minutesPerformed && formik.errors.minutesPerformed
            }
          />
          <TextField
            fullWidth
            variant="outlined"
            className="text-field"
            id="mets"
            name="mets"
            label="METs"
            value={formik.values.mets}
            onChange={formik.handleChange}
            error={formik.touched.mets && Boolean(formik.errors.mets)}
            helperText={formik.touched.mets && formik.errors.mets}
          />
          <Button color="secondary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </div>
    </Styles>
  );
};

export default ActivityForm;

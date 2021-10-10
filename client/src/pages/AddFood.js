import React from "react";
import FoodSearch from "../components/FoodSearch";
import FoodForm from "../components/FoodForm";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const AddFood = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FoodSearch />
        </Grid>
        <Grid item xs={8}>
          <FoodForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddFood;

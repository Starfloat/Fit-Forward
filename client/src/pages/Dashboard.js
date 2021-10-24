import React, { useState } from "react";
import FoodForm from "../components/FoodForm";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <FoodForm addfood />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;

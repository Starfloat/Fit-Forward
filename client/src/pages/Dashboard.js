import React, { useState } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

import NutritionDisplay from "../components/NutritionDisplay";
import ActivityHistory from "../components/ActivityHistory";
import FoodHistory from "../components/FoodHistory";
import AddFood from "../components/FoodSearch";
import FoodForm from "../components/FoodForm";
import AddActivity from "./AddActivity";

import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const DashStyled = styled.div`
  .addFood {
    display: flex;
  }
  .addActivity {
    display: flex;
  }
`;

const Dashboard = () => {
  const path = "/dashboard";
  return (
    <Switch>
      <DashStyled>
        <Grid container spacing={6}>
          <Grid item lg={12}>
            <Route exact path={path}>
              <NutritionDisplay />
            </Route>
            <Route exact path={`${path}/addfood`}>
              <div className="addFood">
                <AddFood />
                <FoodForm />
              </div>
            </Route>
            <Route exact path={`${path}/addactivity`}>
              <div className="addActivity">
                <AddActivity />
              </div>
            </Route>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item sm={6}>
            <Route exact path={path}>
              <FoodHistory />
            </Route>
          </Grid>
          <Grid item sm={6}>
            <Route exact path={path}>
              <ActivityHistory />
            </Route>
          </Grid>
        </Grid>
      </DashStyled>
    </Switch>
  );
};

export default withRouter(Dashboard);

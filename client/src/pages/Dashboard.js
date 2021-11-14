import React, { useContext } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

import NutritionDisplay from "../components/NutritionDisplay";
import ActivityHistory from "../components/ActivityHistory";
import FoodHistory from "../components/FoodHistory";
import AddFood from "../pages/AddFood";
import AddActivity from "./AddActivity";

import { Layout } from "../UI/Layout";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

const DashStyled = styled.div`
  margin-left: 1.5em;
  margin-right: 1.5em;
  .addFood {
    display: flex;
  }
  .addActivity {
    display: flex;
  }
  .card {
    margin-left: 1.5em;
    margin-right: 1.5em;
    margin-bottom: 1.5em;
    -moz-box-shadow: 0 0 5px #999;
    -webkit-box-shadow: 0 0 5px #999;
    box-shadow: 0 0 5px #999;
  }
`;

const Dashboard = () => {
  const { isAuth } = useContext(AuthContext);

  const path = "/dashboard";
  return (
    <>
      <Switch>
        <DashStyled>
          <Layout>
            <h2>Welcome {isAuth.username}</h2>
            <Row>
              <Route exact path={path}>
                <div className="card">
                  <NutritionDisplay />
                </div>
              </Route>

              <Route exact path={`${path}/addfood`}>
                <div className="addFood">
                  <AddFood />
                </div>
              </Route>
              <Route exact path={`${path}/addactivity`}>
                <div className="addActivity">
                  <AddActivity />
                </div>
              </Route>
              <Col>
                <Route exact path={path}>
                  <FoodHistory />
                </Route>

                <Route exact path={path}>
                  <ActivityHistory />
                </Route>
              </Col>
            </Row>
          </Layout>
        </DashStyled>
      </Switch>
    </>
  );
};

export default withRouter(Dashboard);

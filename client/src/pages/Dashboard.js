import React, { useState, useContext } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

import UserHeader from "../components/UserHeader";
import NutritionDisplay from "../components/NutritionDisplay";
import ActivityHistory from "../components/ActivityHistory";
import FoodHistory from "../components/FoodHistory";
import AddFood from "../pages/AddFood";
import AddActivity from "../pages/AddActivity";
import Summary from "../components/Summary";

import { Layout } from "../UI/Layout";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

const DashStyled = styled.div`
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
  const [foodHistoryList, setFoodHistoryList] = useState([]);
  const [activityHistoryList, setActivityHistoryList] = useState([]);

  const path = "/dashboard";
  return (
    <>
      <Switch>
        <DashStyled>
          <Layout>
            <Route exact path={path}>
              <UserHeader user={isAuth.username} />
            </Route>
            <Row>
              <Route exact path={path}>
                <div className="card">
                  <NutritionDisplay
                    foodHistoryList={foodHistoryList}
                    activityHistoryList={activityHistoryList}
                    targetCalories={isAuth.targetCalories}
                  />
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
                  <FoodHistory
                    foodHistoryList={foodHistoryList}
                    setFoodHistoryList={setFoodHistoryList}
                  />
                </Route>
                <div className="mt-3"></div>
                <Route exact path={path}>
                  <ActivityHistory
                    activityHistoryList={activityHistoryList}
                    setActivityHistoryList={setActivityHistoryList}
                  />
                </Route>
                <div className="mt-3"></div>
              </Col>
              <Route exact path={path}>
                <Col>
                  <Summary
                    foodHistoryList={foodHistoryList}
                    activityHistoryList={activityHistoryList}
                    targetCalories={isAuth.targetCalories}
                  />
                </Col>
              </Route>
            </Row>
          </Layout>
        </DashStyled>
      </Switch>
    </>
  );
};

export default withRouter(Dashboard);

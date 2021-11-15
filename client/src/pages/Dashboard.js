import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
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

  const [foodHistoryList, setFoodHistoryList] = useState([]);
  const [activityHistoryList, setActivityHistoryList] = useState([]);

  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [carbohydrate, setCarbohydrate] = useState("");
  const [calories, setCalories] = useState("");

  //mapping for foodhistory
  useEffect(async () => {
    await axios
      .get("http://localhost:3001/foodintake", {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        const transformed = data.foods.map((food) => {
          return {
            foodName: food.foodName,
            protein: food.protein,
            fat: food.fat,
            carbohydrate: food.carbohydrate,
            calories: food.calories,
            serving: food.servingSize,
          };
        });
        setFoodHistoryList(transformed);
        console.log(transformed);
      });
  }, []);

  //mapping for activityhistory
  useEffect(async () => {
    await axios
      .get("http://localhost:3001/addactivity", {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        const transformed = data.activities.map((activity) => {
          return {
            activityName: activity.activityName,
            minutesPerformed: activity.minutesPerformed,
            caloriesBurned: activity.caloriesBurned,
          };
        });
        setActivityHistoryList(transformed);
        console.log(transformed);
      });
  }, []);

  // macronutrients sum
  useEffect(() => {
    setProtein(
      Object.values(foodHistoryList).reduce((r, { protein }) => r + protein, 0)
    );
    setFat(Object.values(foodHistoryList).reduce((r, { fat }) => r + fat, 0));
    setCarbohydrate(
      Object.values(foodHistoryList).reduce(
        (r, { carbohydrate }) => r + carbohydrate,
        0
      )
    );
    setCalories(
      Object.values(foodHistoryList).reduce(
        (r, { calories }) => r + calories,
        0
      )
    );
  }, [foodHistoryList]);

  const path = "/dashboard";
  return (
    <>
      <Switch>
        <DashStyled>
          <Layout>
            <h2 className="mt-3">Welcome {isAuth.username}</h2>
            <Row>
              <Route exact path={path}>
                <div className="card">
                  <NutritionDisplay
                    protein={protein}
                    carbohydrate={carbohydrate}
                    fat={fat}
                    calories={calories}
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
                  <FoodHistory foodHistoryList={foodHistoryList} />
                </Route>
                <div className="mt-3"></div>
                <Route exact path={path}>
                  <ActivityHistory activityHistoryList={activityHistoryList} />
                </Route>
                <div className="mt-3"></div>
              </Col>
            </Row>
          </Layout>
        </DashStyled>
      </Switch>
    </>
  );
};

export default withRouter(Dashboard);

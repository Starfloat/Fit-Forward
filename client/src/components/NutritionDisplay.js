import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

import { Bar, Doughnut } from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import { FaUtensils } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { DisplayStyles } from "../UI/Card.js";

const NutritionDisplay = () => {
  const { isAuth } = useContext(AuthContext);
  const [foodHistoryList, setFoodHistoryList] = useState([]);
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [carbohydrate, setCarbohydrate] = useState("");
  const [calories, setCalories] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/foodintake", {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        const transformed = data.foods.map((food) => {
          return {
            protein: food.protein,
            fat: food.fat,
            carbohydrate: food.carbohydrate,
            calories: food.calories,
          };
        });
        setFoodHistoryList(transformed);
        console.log(transformed);
      });
  }, []);

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

  const barData = {
    labels: ["", ""],
    datasets: [
      {
        label: "# of calories",
        data: [calories, isAuth.targetCalories],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const donutData = {
    labels: ["Protein", "Carbohydrate", "Fat"],
    datasets: [
      {
        label: "",
        data: [protein, carbohydrate, fat],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <DisplayStyles className="display">
        <Bar data={barData} />
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <span>
              <p>
                Logged
                <p className="number-small">{calories}</p> Calories
              </p>
            </span>
          </Grid>
          <Grid item sm={6}>
            <span>
              <p>
                Your Goal
                <p className="number-small">{isAuth.targetCalories}</p> Calories
              </p>
            </span>
          </Grid>
        </Grid>
      </DisplayStyles>

      <DisplayStyles className="display">
        <Doughnut data={donutData} />

        <Grid container spacing={2}>
          <Grid item sm={4}>
            <p>
              Protein
              <p className="number-small">{protein}</p>
            </p>
          </Grid>
          <Grid item sm={4}>
            <p>
              Carbs
              <p className="number-small">{carbohydrate}</p>
            </p>
          </Grid>
          <Grid item sm={4}>
            <p>
              Fats
              <p className="number-small">{fat}</p>
            </p>
          </Grid>
        </Grid>
      </DisplayStyles>
      <DisplayStyles className="display">
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Link to={`dashboard/addfood`}>
              <FaUtensils className="icon" />
              Add Food
            </Link>
          </Grid>
          <Grid item sm={12}>
            <Link to={`dashboard/addactivity`}>
              <FaRunning className="icon" />
              Add Activity
            </Link>
          </Grid>
        </Grid>
      </DisplayStyles>
    </>
  );
};

export default NutritionDisplay;

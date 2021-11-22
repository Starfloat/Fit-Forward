import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bar, Doughnut } from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import { FaUtensils } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { DisplayStyles } from "../UI/Card.js";

const NutritionDisplay = (props) => {
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [carbohydrate, setCarbohydrate] = useState("");

  const consumedCalories = Object.values(props.foodHistoryList).reduce(
    (r, { calories }) => r + calories,
    0
  );

  const burnedCalories = Object.values(props.activityHistoryList).reduce(
    (r, { caloriesBurned }) => r + caloriesBurned,
    0
  );

  const totalCalories = consumedCalories - burnedCalories;

  // macronutrients sum
  useEffect(() => {
    setProtein(
      Object.values(props.foodHistoryList).reduce(
        (r, { protein }) => r + protein,
        0
      )
    );
    setFat(
      Object.values(props.foodHistoryList).reduce((r, { fat }) => r + fat, 0)
    );
    setCarbohydrate(
      Object.values(props.foodHistoryList).reduce(
        (r, { carbohydrate }) => r + carbohydrate,
        0
      )
    );
  }, [props.foodHistoryList]);

  const barData = {
    labels: ["", ""],
    datasets: [
      {
        label: "# of calories",
        data: [totalCalories, props.targetCalories],
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
                <p className="number-small">{totalCalories}</p> Calories
              </p>
            </span>
          </Grid>
          <Grid item sm={6}>
            <span>
              <p>
                Your Goal
                <p className="number-small">{props.targetCalories}</p> Calories
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

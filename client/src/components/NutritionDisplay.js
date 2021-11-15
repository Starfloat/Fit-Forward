import React from "react";
import { Link } from "react-router-dom";
import { Bar, Doughnut } from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import { FaUtensils } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { DisplayStyles } from "../UI/Card.js";

const NutritionDisplay = (props) => {
  const barData = {
    labels: ["", ""],
    datasets: [
      {
        label: "# of calories",
        data: [props.calories, props.targetCalories],
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
        data: [props.protein, props.carbohydrate, props.fat],
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
                <p className="number-small">{props.calories}</p> Calories
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
              <p className="number-small">{props.protein}</p>
            </p>
          </Grid>
          <Grid item sm={4}>
            <p>
              Carbs
              <p className="number-small">{props.carbohydrate}</p>
            </p>
          </Grid>
          <Grid item sm={4}>
            <p>
              Fats
              <p className="number-small">{props.fat}</p>
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

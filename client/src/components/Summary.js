import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import { FaEquals } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const SummaryStyled = styled.div`
  text-align: center;

  .consumed-calories {
    color: #f3969a;
  }
  .consumed-text {
    font-size: small;
  }
  .burned-calories {
    color: #78c2ad;
  }
  .total {
    font-size: larger;
  }
`;

const Summary = (props) => {
  const consumedCalories = Object.values(props.foodHistoryList).reduce(
    (r, { calories }) => r + calories,
    0
  );

  const burnedCalories = Object.values(props.activityHistoryList).reduce(
    (r, { caloriesBurned }) => r + caloriesBurned,
    0
  );

  const totalCalories = consumedCalories - burnedCalories;

  return (
    <SummaryStyled>
      <Card>
        <Card.Body>
          <h1>
            <span className="consumed-calories">
              🍛{consumedCalories}
              <span className="consumed-text">Calories from food</span>
            </span>
            <FaMinus />
            <span className="burned-calories">
              🔥{burnedCalories}
              <span className="consumed-text">Calories from exercise</span>
            </span>
            <FaEquals />
            <span class="text-warning" className="total">
              {totalCalories}
              <span className="consumed-text">Calories</span>
            </span>
          </h1>
          <h2 class="text-success">Your Goal: {props.targetCalories}</h2>
        </Card.Body>
      </Card>
    </SummaryStyled>
  );
};

export default Summary;

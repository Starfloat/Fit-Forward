import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const Styled = styled.div`
  li {
    list-style-type: none;
    display: inline-block;
    padding: 5px 10px;
  }
  ul {
    min-width: 696px;
    list-style: none;
  }
  .icon {
    color: green;
  }
`;

const FoodList = (props) => {
  return (
    <React.Fragment>
      <Styled>
        <div className="foodNutrition">
          <h5>{props.food.description}</h5>
          <ul>
            <li>{props.food.calories}kCal</li>
            <li>{props.food.fat} Fat</li>
            <li>{props.food.carbohydrates} Carbs</li>
            <li>{props.food.protein} Protein</li>
            <li>/100g</li>
            <li>
              <FaPlus className="icon" />
            </li>
          </ul>
        </div>
      </Styled>
    </React.Fragment>
  );
};

export default FoodList;

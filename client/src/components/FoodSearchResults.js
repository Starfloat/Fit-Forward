import React from "react";
import FoodList from "../components/FoodList";

const FoodSearchResults = (props) => {
  return (
    <div>
      <ul className="searchResults">
        {props.foods.map((food) => (
          <FoodList key={food.id} food={food} />
        ))}
      </ul>
    </div>
  );
};

export default FoodSearchResults;

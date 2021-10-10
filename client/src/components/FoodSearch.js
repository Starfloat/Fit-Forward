import React, { useState } from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  Button {
    margin-left: 5px;
  }
  .search {
    margin-top: 25px;
  }
`;

const FoodSearch = () => {
  const [foodData, setFoodData] = useState("");
  const [foodQuery, setFoodQuery] = useState("");

  const params = {
    api_key: "tqkPFfh06zqQEws3gCqlEKL6qQEEEx40Txufw9EE",
    dataType: ["Survey (FNDDS)"], //Branded also works
    pagesize: 1,
  };

  const query = (e) => {
    setFoodQuery(e.target.value);
  };

  const getNutrients = () => {
    Axios.get(
      `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${params.api_key}&query=${foodQuery}&dataType=${params.dataType}&pageSize=${params.pagesize}`
    )
      .then((response) => {
        console.log(response);
        setFoodData(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div>
      <Styles>
        <section className="search">
          <input
            type="text"
            placeholder="Enter food here..."
            onChange={query}
          />
          <Button onClick={getNutrients}>Search</Button>
        </section>
      </Styles>

      {/* conditional rendering, if there's a value in foodData, render */}
      {foodData && (
        <div className="food-data">
          <p className="lead">{foodData.foods[0].description}</p>
          <ul>
            <li>Calories: {foodData.foods[0].foodNutrients[2].value}</li>
            <li>Carbohydrates: {foodData.foods[0].foodNutrients[2].value}</li>
            <li>Fat: {foodData.foods[0].foodNutrients[1].value}</li>
            <li>Protein: {foodData.foods[0].foodNutrients[0].value}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FoodSearch;

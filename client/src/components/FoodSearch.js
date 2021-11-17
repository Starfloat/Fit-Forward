import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodSearchResults from "./FoodSearchResults";
import Debounce from "../utils/Debounce";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";

const FoodSearchStyled = styled.div`
  h3 {
    margin-top: 1em;
  }
  .foodSearch .control input {
    font-size: 1.6rem;
    padding: 15px 10px;
    width: 90%;
    max-width: 600px;
    margin: 25px 0;
    border: 1px solid lightgray;
  }
  .container {
    margin-left: 1em;
  }
`;

const SearchFood = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [foodResults, setFoodResults] = useState([]);
  const [query, setQuery] = useState("");

  const debouncedQuery = Debounce(query, 500);

  const params = {
    api_key: "tqkPFfh06zqQEws3gCqlEKL6qQEEEx40Txufw9EE",
    dataType: ["Survey (FNDDS)"], //Branded also works
    pagesize: 15,
  };

  useEffect(() => {
    if (debouncedQuery) {
      setIsLoading(true);
      handleFoodSearch(query).then(() => {
        setIsLoading(false);
      });
    } else {
      setFoodResults([]);
    }
  }, [debouncedQuery]);

  const handleFoodSearch = async (query) => {
    try {
      setError();
      await axios
        .get(
          `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${params.api_key}&query=${query}&dataType=${params.dataType}&pageSize=${params.pagesize}`
        )
        .then((response) => {
          const data = response.data;
          console.log(data);
          const transformed = data.foods.map((food) => {
            return {
              id: food.fdcId,
              description: food.description,
              calories: food.foodNutrients[3].value,
              carbohydrates: food.foodNutrients[2].value,
              fat: food.foodNutrients[2].value,
              protein: food.foodNutrients[0].value,
            };
          });
          console.log(transformed);
          setFoodResults(transformed);
        });
    } catch (error) {
      console.log(error);
      setError("Something Happened 🙁");
    }
  };

  let display = <p>Found no food.</p>;

  if (isLoading) {
    display = <Spinner animation="border" variant="primary" />;
  } else if (error) {
    display = <p>{error}</p>;
  } else if (foodResults.length > 0) {
    display = <FoodSearchResults foods={foodResults} />;
  }
  return (
    <FoodSearchStyled>
      <section className="foodSearch">
        <div className="container">
          <h3>Search Database</h3>
          <div className="control">
            <input
              type="search"
              placeholder="Search food..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {display}
        </div>
      </section>
    </FoodSearchStyled>
  );
};

export default SearchFood;

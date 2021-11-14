import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../utils/AuthContext";
import axios from "axios";
import MaterialTable from "material-table";

const FoodHistory = () => {
  const [foodHistoryList, setFoodHistoryList] = useState([]);
  useContext(AuthContext);

  useEffect(() => {
    axios
      .get("http://localhost:3001/foodintake", {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        const transformed = data.listOfFoodIntake.map((food) => {
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

  return (
    <MaterialTable
      title="Food History"
      columns={[
        { title: "", field: "foodName" },
        { title: "Protein", field: "protein", type: "numeric" },
        { title: "Fat", field: "fat", type: "numeric" },
        { title: "Carbs", field: "carbohydrate", type: "numeric" },
        { title: "Calories", field: "calories", type: "numeric" },
        { title: "Serving", field: "serving", type: "numeric" },
      ]}
      data={foodHistoryList}
      options={{
        exportButton: true,
      }}
    />
  );
};

export default FoodHistory;

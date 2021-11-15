import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../utils/AuthContext";
import axios from "axios";
import MaterialTable from "material-table";

const FoodHistory = () => {
  const [activityHistoryList, setActivityHistoryList] = useState([]);
  useContext(AuthContext);

  useEffect(() => {
    axios
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

  return (
    <MaterialTable
      title="Activity History"
      columns={[
        { title: "🏋️", field: "activityName" },
        { title: "⏲️ Minutes", field: "minutesPerformed", type: "numeric" },
        { title: "Calories 🔥", field: "caloresBurned", type: "numeric" },
      ]}
      data={activityHistoryList}
      options={{
        exportButton: true,
      }}
    />
  );
};

export default FoodHistory;

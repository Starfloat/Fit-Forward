import React, { useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";

const FoodHistory = (props) => {
  useEffect(async () => {
    await axios
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
        props.setActivityHistoryList(transformed);
        console.log(transformed);
      });
  }, []);

  return (
    <MaterialTable
      title="Activity History"
      columns={[
        { title: "🏋️", field: "activityName" },
        { title: "⏲️ Minutes", field: "minutesPerformed", type: "numeric" },
        { title: "Calories 🔥", field: "caloriesBurned", type: "numeric" },
      ]}
      data={props.activityHistoryList}
      options={{
        exportButton: true,
      }}
    />
  );
};

export default FoodHistory;

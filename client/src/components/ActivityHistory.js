import React from "react";
import MaterialTable from "material-table";

const FoodHistory = (props) => {
  return (
    <MaterialTable
      title="Activity History"
      columns={[
        { title: "🏋️", field: "activityName" },
        { title: "⏲️ Minutes", field: "minutesPerformed", type: "numeric" },
        { title: "Calories 🔥", field: "caloresBurned", type: "numeric" },
      ]}
      data={props.activityHistoryList}
      options={{
        exportButton: true,
      }}
    />
  );
};

export default FoodHistory;

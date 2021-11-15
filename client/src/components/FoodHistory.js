import React from "react";
import MaterialTable from "material-table";

const FoodHistory = (props) => {
  return (
    <MaterialTable
      title="Food History"
      columns={[
        { title: "", field: "foodName" },
        { title: "🥩Protein", field: "protein", type: "numeric" },
        { title: "🧈Fat", field: "fat", type: "numeric" },
        { title: "🍞Carbs", field: "carbohydrate", type: "numeric" },
        { title: "🔥Calories", field: "calories", type: "numeric" },
        { title: "🍽️Serving", field: "serving", type: "numeric" },
      ]}
      data={props.foodHistoryList}
      options={{
        exportButton: true,
      }}
    />
  );
};

export default FoodHistory;

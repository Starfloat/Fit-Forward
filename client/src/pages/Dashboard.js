import React from "react";
import { Route, Link } from "react-router-dom";

import AddFood from "./AddFood";

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/addfood">Add Food</Link>
          <Route exact path="/addfood" component={AddFood} />
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;

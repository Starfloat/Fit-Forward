import React from "react";
import ActivityList from "./ActivityList";

const ActivitySearchResults = (props) => {
  return (
    <div>
      <ul className="searchResults">
        {props.activities.map((val) => (
          <ActivityList key={val.id} activity={val} />
        ))}
      </ul>
    </div>
  );
};

export default ActivitySearchResults;

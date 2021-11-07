import React, { useState } from "react";
import axios from "axios";
import ActivitySearchResults from "../components/ActivitySearchResults";

import styled from "styled-components";

const ActivitySearchStyled = styled.div`
  h3 {
    margin-top: 1em;
  }
  .activitySearch .control input {
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

const SearchActivity = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [query, setQuery] = useState("");

  const handleActivitySearch = () => {
    try {
      setError();
      axios
        .get("../data/2011_Compendium_of_Physical_Activities.json")
        .then((response) => {
          const data = response.data;
          console.log(data);
          const transformed = data
            .filter((val) => {
              if (query == "") {
                return val;
              } else if (
                val.description.toLowerCase().includes(query.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              return {
                id: val.id,
                activityName: val.activity,
                description: val.description,
                mets: val.mets,
              };
            });
          console.log(transformed);
          setSearchResult(transformed);
        });
    } catch (error) {
      console.log(error);
      setError("Something Happened 🙁");
    }
  };

  const handleOnSubmit = () => {
    handleActivitySearch();
  };

  let display = <p>No activities found</p>;

  if (isLoading) {
    display = <p>loading...</p>;
  } else if (error) {
    display = <p>{error}</p>;
  } else if (searchResult.length > 0) {
    display = <ActivitySearchResults activities={searchResult} />;
  }

  return (
    <ActivitySearchStyled>
      <section className="activitySearch">
        <div className="container">
          <h3>Search Database</h3>
          <div className="control">
            <input
              type="search"
              placeholder="Search activity..."
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleOnSubmit}>Search</button>
          </div>
          {display}
        </div>
      </section>
    </ActivitySearchStyled>
  );
};

export default SearchActivity;

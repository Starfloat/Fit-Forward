import React, { useState, useEffect } from "react";
import axios from "axios";
import ActivitySearchResults from "../components/ActivitySearchResults";

import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";

const ActivitySearchStyled = styled.div`
  margin-top: 1.5em;
  h3 {
    margin-top: 1em;
  }
  .activitySearch .control input {
    font-size: 1.6rem;
    padding: 15px 10px;
    width: 100%;
    max-width: 600px;
    margin: 25px 0;
    border: 1px solid lightgray;
  }
`;

const SearchActivity = () => {
  const [error, setError] = useState();
  const [isSearching, setIsSearching] = useState(false);
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
                return null;
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSearching(false);
      handleActivitySearch();
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const handleQueryTextChange = (e) => {
    setQuery(e.target.value);
    setIsSearching(true);
  };

  let display = <p>No activities found</p>;

  if (isSearching) {
    display = (
      <h1>
        <Spinner animation="border" variant="primary" />
      </h1>
    );
  } else if (error) {
    display = <p>{error}</p>;
  } else if (searchResult.length > 0) {
    display = <ActivitySearchResults activities={searchResult} />;
  }

  return (
    <ActivitySearchStyled>
      <Card>
        <Card.Body>
          <section className="activitySearch">
            <div className="container">
              <h3>Search Database</h3>
              <div className="control">
                <input
                  type="search"
                  placeholder="Search activity..."
                  onChange={handleQueryTextChange}
                />
              </div>
              {display}
            </div>
          </section>
        </Card.Body>
      </Card>
    </ActivitySearchStyled>
  );
};

export default SearchActivity;

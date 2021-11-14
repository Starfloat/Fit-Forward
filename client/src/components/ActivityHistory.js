import React from "react";
import styled from "styled-components";

const HistoryStyles = styled.div`
  h3 {
    margin-top: 1em;
  }
  text-align: center;
`;

const ActivityHistory = () => {
  return (
    <HistoryStyles>
      <h3>Activity History</h3>
    </HistoryStyles>
  );
};

export default ActivityHistory;

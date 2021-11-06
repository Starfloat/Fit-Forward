import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const Styled = styled.div`
  li {
    list-style-type: none;
    display: inline-block;
    padding: 5px 10px;
  }
  ul {
    min-width: 696px;
    list-style: none;
  }
  .icon {
    color: green;
  }
`;

const ActivityList = (props) => {
  return (
    <React.Fragment>
      <Styled>
        <div className="activityData">
          <h5>{props.activity.activityName}</h5>
          <ul>
            <li>{props.activity.description}</li>
            <li>{props.activity.mets}</li>
            <li>
              <FaPlus className="icon" />
            </li>
          </ul>
        </div>
      </Styled>
    </React.Fragment>
  );
};

export default ActivityList;

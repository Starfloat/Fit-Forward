import React from "react";
import styled from "styled-components";

import Table from "react-bootstrap/Table";
import { FaPlus } from "react-icons/fa";

const Styled = styled.div`
  .icon {
    color: green;
  }
  .table-align {
    text-align: right;
  }
`;

const ActivityList = (props) => {
  return (
    <React.Fragment>
      <Styled>
        <Table hover size="sm">
          <tbody>
            <thead>
              <tr>
                <th>{props.activity.activityName}</th>
                <td>({props.activity.mets} Mets)</td>
              </tr>
            </thead>
            <tr>
              <td>{props.activity.description}</td>
              <div className="table-align">
                <FaPlus className="icon" />
              </div>
            </tr>
          </tbody>
        </Table>
        {/* <h5>{props.activity.activityName}</h5>
          <ul>
            <li>{props.activity.description}</li>
            <li>{props.activity.mets}</li>
            <li>
              <FaPlus className="icon" />
            </li>
          </ul> */}
      </Styled>
    </React.Fragment>
  );
};

export default ActivityList;

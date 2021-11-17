import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { FaUserCircle } from "react-icons/fa";

const UserHeaderStyled = styled.div`
  margin-top: 1.5em;
  text-align: center;
`;

const UserHeader = (props) => {
  return (
    <UserHeaderStyled>
      <Card>
        <Card.Body>
          <h2 className="mt-3">
            <FaUserCircle /> Welcome {props.user}
          </h2>
        </Card.Body>
      </Card>
    </UserHeaderStyled>
  );
};

export default UserHeader;

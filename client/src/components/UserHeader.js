import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { FaUserCircle } from "react-icons/fa";

const UserHeaderStyled = styled.div`
  margin-top: 1.5em;
  text-align: center;
  margin-right: 60%;
`;

const UserHeader = (props) => {
  return (
    <UserHeaderStyled>
      <Card>
        <Card.Body>
          <h3 className="mt-2">
            <FaUserCircle /> Welcome {props.user}
          </h3>
        </Card.Body>
      </Card>
    </UserHeaderStyled>
  );
};

export default UserHeader;

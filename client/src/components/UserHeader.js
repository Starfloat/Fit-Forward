import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { FaUserCircle } from "react-icons/fa";

const UserHeaderStyled = styled.div`
  margin-top: 1em;
  text-align: center;
  padding-right: 60%;
  white-space: nowrap;
`;

const UserHeader = (props) => {
  return (
    <UserHeaderStyled>
      <h3 className="mt-2">
        <FaUserCircle /> Welcome {props.user}
      </h3>
    </UserHeaderStyled>
  );
};

export default UserHeader;

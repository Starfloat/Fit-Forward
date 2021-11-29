import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
        <Link to={`dashboard/profile`}>
          <FaUserCircle /> Welcome {props.user}
        </Link>
      </h3>
    </UserHeaderStyled>
  );
};

export default UserHeader;

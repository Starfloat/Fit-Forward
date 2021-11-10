import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

const Styles = styled.div`
  text-align: center;
  margin-top: 5%;
  .form-group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  Button {
    margin-top: 15px;
  }
`;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isAuth, setIsAuth } = useContext(AuthContext);

  let history = useHistory();

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/login", data).then((response) => {
      console.log(response.data);
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        setIsAuth({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        history.push("/");
      }
    });
  };

  return (
    <Styles>
      <h1>Login</h1>
      <div className="form-group">
        <label htmlFor="">User:</label>
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="">Password: </label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button onClick={login}>Login</Button>
      </div>
    </Styles>
  );
}

export default Login;

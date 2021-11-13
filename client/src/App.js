import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";

import { AuthContext } from "./utils/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";

import { Layout } from "./UI/Layout";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

const AppStyled = styled.div`
  .content-container {
    min-height: calc(100vh - 34px);
    overflow-x: hidden;
  }
  .footer-pin {
    position: relative;
    left: 0;
    bottom: 0;
  }
`;

function App() {
  const [isAuth, setIsAuth] = useState({
    username: "",
    targetCalories: "",
    id: 0,
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.error) {
          setIsAuth({ ...isAuth, status: false });
        } else {
          console.log("use effect ran auth");
          setIsAuth({
            username: response.data.username,
            id: response.data.id,
            targetCalories: response.data.targetCalories,
            status: true,
          });
        }
      });
  }, [isAuth.id]);

  console.log(isAuth);

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <Router>
          <AppStyled>
            <NavigationBar />
            <div className="content-container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Registration} />
                <PrivateRoute
                  path="/dashboard"
                  component={Dashboard}
                  isAuth={isAuth.status}
                />
                <Route path="/about" component={About} />
              </Switch>
            </div>
            <footer className="footer-pin">
              <Footer />
            </footer>
          </AppStyled>
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;

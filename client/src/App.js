import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthContext } from "./utils/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";

import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

function App() {
  const [isAuth, setIsAuth] = useState({
    username: "fdsf",
    id: 0,
    status: false,
  }); // should be false, fix later

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <Router>
          <NavigationBar />
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
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;

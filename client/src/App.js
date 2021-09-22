import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Registration} />
            <Route path="/login" component={Login} />
            {/* <Route path="/dashboard" component={Dashboard} /> */}
          </Switch>
        </Router>
      </Layout>
    </>
  );
}

export default App;

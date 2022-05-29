import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './css/style.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import AddReport from "./components/AddReport";
import Report from "./components/Report";
import ReportState from "./context/reports/ReportState";
import BodyContent from "./partials/BodyContent";
import MainContent from "./partials/MainContent";

function App() {
  return (
    <ReportState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/addP">
            <BodyContent/>
          </Route>
          <Route exact path="/addB">
            <MainContent />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/report">
            <Report />
          </Route>
          <Route exact path="/addReport">
            <AddReport />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ReportState>
  );
}

export default App;

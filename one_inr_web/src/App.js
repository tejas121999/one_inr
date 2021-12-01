import React from "react";
import Header from "./Components/layout/Navbar";
import Home from "./Components/Home/home";
import About from "./Components/About/About";
import Campaigns from "./Components/Campaigns/Campaigns";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/layout/Footer";
import Login from "./Components/auth/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/campaigns" component={Campaigns} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

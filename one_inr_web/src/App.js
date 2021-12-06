import React from "react";
import Header from "./Components/layout/Navbar";
import Home from "./Components/Home/home";
import About from "./Components/About/About";
import Campaigns from "./Components/Campaigns/Campaigns";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/layout/Footer";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import ForgotPass from "./Components/auth/ForgotPass";
import Profile from "./Components/Account/ProfileInfo";
import EditProfile from "./Components/Account/EditProfile";
import ProfilePass from "./Components/Account/ProfilePass";
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
        <Route path="/register" component={Register} />
        <Route path="/reset" component={ForgotPass} />
        <Route path="/profile" component={Profile} />
        <Switch>
          <Route path="/profile/password" component={ProfilePass} />
          <Route path="/profile/edit" component={EditProfile} />
        </Switch>
        {/* <Route path="/backed-campaigns" component={BackedCampaigns} /> */}
        {/* <Route path="/wallet" component={Wallet} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

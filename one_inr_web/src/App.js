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
import MainProfile from "./Components/Account/Profile";
import StartCampaign from "./Components/Campaigns/StartCampaign";
import Policy from "./Components/Campaigns/Policy";
import Terms from "./Components/Campaigns/Terms";
import HowitWork from "./Components/footerPage/HowitWork";
import WhatIsThis from "./Components/footerPage/WhatIsThis";
import Education_fee from "./Components/Campaigns/descoverCampPages/Education_fee";
import Sponsoring_stationary from "./Components/Campaigns/descoverCampPages/Sponsoring_stationary";
import Feeding_pigeons from "./Components/Campaigns/descoverCampPages/Feeding_pigeons";
import Feed_cows from "./Components/Campaigns/descoverCampPages/Feed_cows";
import Pehli_roti from "./Components/Campaigns/descoverCampPages/Pehli_roti";
import Sponsoring_Books from "./Components/Campaigns/descoverCampPages/Sponsoring_Books";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/*header route */}
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/campaigns" component={Campaigns} />
        <Route path="/start-your-campaign" component={StartCampaign} />
        <Route path="/terms-of-use" component={Terms} />
        <Route path="/privacy-policy" component={Policy} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/reset" component={ForgotPass} />
        <Route path="/profile" component={MainProfile} />
        {/* <Route path="/profile/password" component={ProfilePass} />
        <Route path="/profile/edit" component={EditProfile} /> */}
        {/* <Route path="/backed-campaigns" component={BackedCampaigns} /> */}
        {/* <Route path="/wallet" component={Wallet} /> */}

        {/*footer page routing */}
        <Route exact path="/how_it_works" component={HowitWork} />
        <Route exact path="/what_is_this" component={WhatIsThis} />
        {/* descover campaning page roue */}
        <Route exact path="/education_fee" component={Education_fee} />
        <Route
          exact
          path="/sponsoring_stationary"
          component={Sponsoring_stationary}
        />
        <Route exact path="/feeding_pigeons" component={Feeding_pigeons} />
        <Route exact path="/feed_cows" component={Feed_cows} />
        <Route exact path="/pehli_roti" component={Pehli_roti} />
        <Route exact path="/sponsoring_books" component={Sponsoring_Books} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

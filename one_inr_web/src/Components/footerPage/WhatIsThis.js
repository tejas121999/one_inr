import React from "react";
import what_is_this from "../Images/what_is_this_1.jpg";

const WhatIsThis = () => {
  return (
    <div className="carousel slide site-main" data-ride="carousel">
      <div className="carousel-inner">
        <img className="d-block w-100" src={what_is_this} alt="First slide" />
        <div
          className="container mb-5"
          style={{ paddingTop: "10px", marginTop: "10px" }}
        >
          <h1>What Is This ?</h1>
          <div className="row">
            <div className="col-lg-12">
              <h3>What is This?</h3>
              <br />
              <ol>
                <li>
                  1INR is a CroudFunding Platform that is developed and intended
                  to be used as an intermediate between various NGOs and people
                  who want to donate to charity and organizations. We have tied
                  up with various NGOs with the sole mission to make the world a
                  better place to live for the needy and poverty stricken
                  people.
                </li>
                <li>
                  We believe in making the lives of these people worthwhile
                  through various donation schemes that is created to help
                  others in need and make them survive in this world.
                </li>
                <li>
                  In 1INR, You can choose a Cause for your donation. The
                  donation amount can be as low as Re 1 per day to as high as
                  you want it to be. This amount will be debited from your bank
                  account to the donation Wallet.
                </li>
                <li>
                  1INR Believes that the poor and the needy deserves to be
                  helped and funded for their upliftment and prosperity.
                  Therefore we have come up with exciting cause and campaigns
                  that you can choose to donate to. You also have the liberty to
                  create different causes and campaigns for yourself. Each small
                  amount gets automatically funded from your bank account and
                  prevents you from the hassles of making committed payments.
                  The amount is so minimal that you can easily donate to the
                  cause of your choice without having any kind of financial
                  impact for your donations to you. Your Re 1 donation per day
                  will make a big impact for the society as well as the nation
                  that we live in together as citizens.
                </li>
                <li>
                  Your small payment can make a positive impact on the lives of
                  the needy and the downtrodden people who need financial
                  support and do not have anything to spare.
                </li>
                <li>
                  Together let us make this world a better place to live in for
                  all humans, animals, birds, and the environment alike.
                </li>
                <li>
                  We believe that everyone has the right to lead a happy life
                  and we strive towards the dreams and ambitions of all. We make
                  sure that each rupee that you donate will go into the welfare
                  and development of those dreams and ambitions of being a
                  united one-nation that we stand tall and strong for each
                  other.
                </li>
                <li>
                  We want to make others smile and therefore we have come up
                  with this wonderful online platform for both NGOs and
                  charitable trusts who believe in doing good for others.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsThis;

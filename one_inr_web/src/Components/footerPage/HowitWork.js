import React from "react";
import step_1 from "../Images/HowItWork/step_1.jpeg";
import STEP_2 from "../Images/HowItWork/STEP_2.jpeg";
import STEP_3 from "../Images/HowItWork/STEP_3.jpeg";
import STEP_4 from "../Images/HowItWork/STEP_4.jpeg";

const HowitWork = () => {
  return (
    <div className="site-main">
      <div className="text-center mt-5 mb-5 ">
        <h2 className="title mb-5">HOW IT WORKS</h2>
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img className="card-img-top" src={step_1} alt="Card image cap" />
              <div className="card-img-overlay steps text-white">
                <h4>Select The Cause</h4>
                <p>
                  1INR supports multiple causes that help to bring light in the
                  lives of the needy. Consider a noble cause, donate and share
                  your happiness with them!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img className="card-img-top" src={STEP_2} alt="Card image cap" />
              <div className="card-img-overlay steps text-white">
                <h4>Support Their Living</h4>
                <p>
                  1INR helps you in becoming a ray of hope for the ones who are
                  in need to run their house. You can choose a cause that you
                  wish to support and join.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img className="card-img-top" src={STEP_3} alt="Card image cap" />
              <div className="card-img-overlay steps text-white">
                <div>
                  <h4>Help A Need</h4>
                  <p>
                    Making sure the needy one survives every day, gives you
                    pleasure and makes you happier bringing a positive &
                    uplifting effect on you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img className="card-img-top" src={STEP_4} alt="Card image cap" />
              <div className="card-img-overlay steps text-white">
                <div className="">
                  <h4>Share Happiness</h4>
                  <p>
                    Surprise them from time to time with 1INR that would be the
                    reason for them to survive and gift a new life. Thank you
                    for sharing the happiness!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1>How It Works</h1>
        <div className="row">
          <div className="col-lg-12">
            <h3 className="mt-3">How It Works? :</h3>
            <br />
            <p>
              If you want to be a part for the improvement of your nearby and
              the society you live with, give your &nbsp;
              <b>fundraising support</b>&nbsp; by joining hands with One INR.
            </p>
            <br />
            <p>
              One INR being a &nbsp;<b>charitable donation</b>
              &nbsp;platform collects &nbsp;<b>money donation</b>&nbsp; plans
              and options to choose and select the amount of money you want to
              donate. Our backend team attached with the concerned NGOs will
              make sure your contribution of money and care reaches in proper
              hand.
            </p>
            <br />
            <h4>Small Effort Brings A Large Change</h4>
            <br />
            <p>One INR begins offering you three choices :</p>
            <br />
            <p>One Rupee per day</p>
            <p>Two Rupee per day</p>
            <p>Three Rupee per day</p>
            <p>
              You can choose and select any one of the given donation option to
              donate your money. Decide the plan among the three and daily it
              will deduct that particular amount of money from your account on a
              yearly basis. In the end, you can check and see what difference
              you created in someone’s life just by donating a single rupee in a
              day.
            </p>
            <br />
            <p>
              If not yearly you can choose the custom donation option to
              manually enter the amount you want to donate. With this, you can
              donate your choice of money to the &nbsp;<b>NGO organization</b>
              &nbsp; you ardently want to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowitWork;

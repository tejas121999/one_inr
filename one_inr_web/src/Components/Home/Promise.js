import React from 'react'
import step_1 from '../Images/HowItWork/step_1.jpeg'
import STEP_2 from '../Images/HowItWork/STEP_2.jpeg'
import STEP_3 from '../Images/HowItWork/STEP_3.jpeg'
import STEP_4 from '../Images/HowItWork/STEP_4.jpeg'
import './Home.css'


const Promise = () => {
    return (
        <div>
            <div className="text-center mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">THE 1 INR PROMISE</h2>
                            <p>
                                Our vision is to change the lives of the ones who are in need and we are actively working on to meet this goal.
                                You can donate as low as 1INR per day. Your per day 1 rupee benefits in 2 ways: Firstly,
                                it runs the house of one person and secondly helps the one who needs it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5 mb-5 ">
                <h2 className="title mb-3">HOW IT WORKS</h2>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <img className="card-img-top" src={step_1} alt="Card image cap" />
                            <div className="card-img-overlay steps text-white">
                                <h4>Select The Cause</h4>
                                <p>
                                    1INR supports multiple causes that help to bring light in the lives of the needy.
                                    Consider a noble cause, donate and share your happiness with them!
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <img className="card-img-top" src={STEP_2} alt="Card image cap" />
                            <div className="card-img-overlay steps text-white">
                                <h4>Support Their Living</h4>
                                <p>
                                    1INR helps you in becoming a ray of hope for the ones who are in need to run their house.
                                    You can choose a cause that you wish to support and join.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <img className="card-img-top" src={STEP_3} alt="Card image cap" />
                            <div className="card-img-overlay steps text-white">
                                <div>
                                    <h4>Help A Need</h4>
                                    <p>
                                        Making sure the needy one survives every day,
                                        gives you pleasure and makes you happier bringing a positive & uplifting effect on you.
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
                                        Surprise them from time to time with 1INR that would be the reason for them to survive and gift a new life.
                                        Thank you for sharing the happiness!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promise

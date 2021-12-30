import React from 'react'
import logo_img from "../../Images/ngo_logo.png"
import TopImg from "../../Images/descovr_camp/Sponsoring_Stationary_for_Students.jpeg"

const Sponsoring_stationary = () => {
    return (
        <div className="container">
            <div className="row mb-3"
            // style={{ maxWidth: "540cm", maxHeight: "450cm" }}
            >
                <div className="col-6">
                    <img src={TopImg} className="img-fluid rounded-start" />
                </div>
                <div className="col-6">
                    <div className="card-body">
                        <h5 className="card-title">Sponsoring Stationary for Students</h5>
                        <p className="card-text">By sponsoring a child’s education you help to fulfil their dreams but also help the parent who cannot afford to send their child to school</p>
                        <p className="card-text mt-5"><img src={logo_img} style={{ maxWidth: "1.5cm", marginRight: "5px" }} />by Pyaribai Girdharilal Ranka Foundation</p>
                    </div>
                    <div style={{ height: "8px" }} className="progress rounded-pill mt-2">
                        <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                            style={{ width: "60%" }} className="progress-bar progress-bar-striped progress-bar-animated rounded-pill"></div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-xl-3 col-md-6">
                            <span>
                                ₹ 6842
                                <p>Goal</p>
                            </span>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <span>
                                ₹ 0
                                <p>Funded</p>
                            </span>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <span>
                                24
                                <p>Days Left</p>
                            </span>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary mt-5" data-toggle="modal" data-target="#exampleModal">
                        Donate Now
                    </button>
                    {/*model*/}
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                    <h5 className="modal-title" id="exampleModalLabel">Your current plan is 1</h5>
                                    <p>You can donate more</p>
                                    <hr />
                                    <br />
                                    <form className="form-inline">
                                        <input
                                            type="number"
                                            name="amount"
                                            min="0"
                                            placeholder="1"
                                            required="required"
                                            className="form-control col-md-6"
                                        />
                                        <button type="button" className="btn btn-primary" style={{ marginLeft: "20px" }}>Donate</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-8">
                    <ul className="nav nav-tabs h4" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="Campaign-tab" data-toggle="tab" href="#Campaign" role="tab" aria-controls="Campaign" aria-selected="true">Campaign Story</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="Comments-tab" data-toggle="tab" href="#Comments" role="tab" aria-controls="Comments" aria-selected="false">Comments</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active mb-5" id="Campaign" role="tabpanel" aria-labelledby="Campaign-tab">
                            <p className="mt-5">
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <span style={{
                                    fontSize: "11pt", fontFamily: "Arial",
                                    color: "#000000", backgroundColor: "transparent",
                                    fontWeight: "400", fontStyle: "normal", fontVariant: "normal",
                                    textDecoration: "none", whiteSpace: "pre-wrap", verticalAlign: "baseline"
                                }}>
                                    There are many people who do not have access to basic education and resources.
                                    Sponsoring a child's education by providing them stationary will not only help them to learn and grow but also make them a better and a humble human being.
                                    It is the need of our society to educate the poor and help them to survive and contribute towards building the nation.
                                </span>
                            </p>
                            <p className="mt-3">
                                &nbsp; &nbsp; &nbsp;
                                <span style={{
                                    fontSize: "11pt", fontFamily: "Arial",
                                    color: "#000000", backgroundColor: "transparent",
                                    fontWeight: "400", fontStyle: "normal", fontVariant: "normal",
                                    textDecoration: "none", whiteSpace: "pre-wrap", verticalAlign: "baseline"
                                }}>
                                    1INR has decided to sponsor a child's education and stationary for poor students.
                                    When the students have access to basic educational material then they will be willing to step forward and study and become wonderful human beings.
                                    Sponsoring a child’s education you not only help to fulfill their dreams but you also help the parent who cannot afford to send their child to school.
                                    You help these needy children by supporting them and sponsoring their education fees.
                                    You help the children achieve their dreams and make their ambitions come true.
                                </span>
                            </p>
                            <p className="mt-3">
                                &nbsp; &nbsp; &nbsp;
                                <span style={{
                                    fontSize: "11pt", fontFamily: "Arial",
                                    color: "#000000", backgroundColor: "transparent",
                                    fontWeight: "400", fontStyle: "normal", fontVariant: "normal",
                                    textDecoration: "none", whiteSpace: "pre-wrap", verticalAlign: "baseline"
                                }}>
                                    By doing this noble deed you help to shape the society and contribute towards mankind.
                                    We need more people who can contribute towards this noble cause and help us shape and care for one another.
                                    We help each other to become what they desire for.
                                </span>
                            </p>
                        </div>
                        <div className="tab-pane fade" id="Comments" role="tabpanel" aria-labelledby="Comments-tab">
                            <form>
                                <div className="form-group mb-5">
                                    <label className="h3 mt-4 mb-4" for="exampleFormControlTextarea1">Leave A Comment?</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your comment..." />
                                    <button type="button" className="btn btn-primary mt-4">Post Comment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsoring_stationary

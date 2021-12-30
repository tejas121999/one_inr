import React from 'react'
import { Link } from 'react-router-dom'
import TopImg_1 from "../../Images/descovr_camp/Sponsoring_Books_for_Students.jpeg"
import logo_img from "../../Images/ngo_logo.png"

const Sponsoring_Books = () => {
    return (
        <div className="container">
            <div className="row mb-3"
            // style={{ maxWidth: "540cm", maxHeight: "450cm" }}
            >
                <div className="col-6">
                    <img src={TopImg_1} className="img-fluid rounded-start" />
                </div>
                <div className="col-6">
                    <div className="card-body">
                        <h5 className="card-title">Sponsoring Books for Students</h5>
                        <p className="card-text">Providing the children with free books will help them to learn and grow as well as help them to become better human beings.</p>
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
                                    There are many children who do not have the basic right to education.
                                    Providing these children with free books will help them to learn and grow as well as help them to become better human beings.
                                    This will also contribute towards the success of our country and we as a developing nation need to educate the young and the poor.
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
                                    This is a wonderful initiative taken up by 1INR founders that will help shape the future of our country.
                                    We urge you to support this initiative and help us to become a developed nation.
                                    Sponsoring any poor children’s education will not only help the children fulfill their dreams but also help in the well being of the country.
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
                                    There has been a shortage of students going to learn in schools.
                                    Simply because they cannot afford school education.
                                    Sponsoring a child’s education by giving them free books will not only help them to learn and grow but also help them to become better human beings in life.
                                    Therefore we need to sponsor such noble events and help one another to shape humanity and in turn shape our nation.
                                    We can always give our used textbooks to students in the previous className and help them.
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

export default Sponsoring_Books

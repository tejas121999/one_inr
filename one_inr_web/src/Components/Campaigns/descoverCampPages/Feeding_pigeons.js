import React from 'react'
import logo_img from "../../Images/ngo_logo.png"
import TopImg from "../../Images/descovr_camp/Feeding_Pigeons_Grains.jpeg"

const Feeding_pigeons = () => {
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
                        <h5 className="card-title">Feeding Pigeons Grains</h5>
                        <p className="card-text">This is an initiative taken up by 1INR to raise awareness to sponsor grains and water for hungry and thirsty birds.</p>
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
                                    Feeding the birds any kind of grains and water is an age old Hindu tradition that has been followed by our previous generations.
                                    It is said to invite luck as well as goodwill that increases ones karma. This is an initiative taken up by 1INR to raise awareness
                                    and make sure everyone does follow on this noble path. We have started this campaign to sponsor grains and water for hungry and thirsty birds who want to survive.
                                    This deed is similar to the ones that we do by feeding grass to cows or giving food to the poor people.
                                    It is synonymous with all these noble deeds.
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
                                    One can feed whatever grains they want to the birds and in return get some good luck.
                                    In the olden days, kings used birds as messengers. They are a part of our ecosystem,
                                    They help to maintain it. As a humanitarian effort, lets take up the duty of feeding the hungry and thirsty birds.
                                    Birds are noble animals and it fill our hearts with joy to hear them sing and tweet.
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
                                    Chirpy birds help bring life to our environment.
                                    Be a part of this noble deed and increase your good karma.
                                    Let us give something back to mother nature.
                                    She has given us the most beautiful things.
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

export default Feeding_pigeons

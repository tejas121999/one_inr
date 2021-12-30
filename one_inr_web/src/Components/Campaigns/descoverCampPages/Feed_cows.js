import React from 'react'
import logo_img from "../../Images/ngo_logo.png"
import TopImg from "../../Images/descovr_camp/Feed_Cows_with_grass_of_Love.jpeg"

const Feed_cows = () => {
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
                        <h5 className="card-title">Feed Cows with grass of Love</h5>
                        <p className="card-text">Feeding the hungry cows is a noble deed that help us to increase our good karma thereby also invites us some good luck.</p>
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
                                    Cow has been a wonderful resource by God to mankind.
                                    They give us milk, helps us to do farming and provides us with manure to fertilize the land.
                                    Therefore it is our noble duty to feed her and take care of her in return.
                                    Feeding the hungry cows is a noble deed that help us to increase our good karma thereby also invites us some good luck.
                                    Let us all spread happiness and help the cows and animals to feed for themselves.
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
                                    Loving the cows in return will help us to become noble citizens of this county.
                                    This is indeed a wonderful initiative taken up by 1INR founders.
                                    We need to sponsor deeds like this and help in spreading love and affection.
                                    Cows help us in numerous ways that is possible,
                                    so it is our humble duty to take care of her and feed her properly. As in Hindu Mythology,
                                    we worship the cow and it is a symbol of peace and love, so we need to treat her as one.
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
                                    We need to ensure we take proper care of her provide her the love and affection that she needs and desires.
                                    Doing this noble cause will also help us to increase our good karma thereby help us to bring good luck with us.
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

export default Feed_cows

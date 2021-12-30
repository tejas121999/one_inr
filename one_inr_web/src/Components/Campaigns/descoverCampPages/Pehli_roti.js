import React from 'react'
import logo_img from "../../Images/ngo_logo.png"
import TopImg from "../../Images/descovr_camp/Pahali_roti.jpeg"

const Pehli_roti = () => {
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
                        <h5 className="card-title">Pehli Roti Dayitva Ki</h5>
                        <p className="card-text">1INR has collaborated with Hunger Project by Lions Club of Millennials and Lions Club of Churchgate Mumbai supported by Roti Bank.</p>
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
                                    The campaign - PEHLI ROTI DAYITVA KI is Hunger Project by Lions Club of Millennials and Lions Club of Churchgate Mumbai supported by Roti Bank.
                                    The concept of the Campaign is very simple. It urges every Person, Families, Societies, Corporates, Schools, Hosts of Celebrations to Contribute their first Roti for poor,
                                    needy and hungry people. Roti is the purest form of contribution. People can contribute as minimum as 1 Roti at our various collection centers, spread all over Mumbai & its suburbs.
                                    With the support of Roti Bank, the Rotis collected from Various collection centers goes with a full meal, like Vegetables and Rice, to poor Patients and their families who are living at and outside various Government Hospitals,
                                    to poor children of workers working on daily wages,
                                    to the schools for those children and to various Slums areas.
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
                                    We have various collection centers where you can donate the Rotis for the needy people.
                                    Also, 1INR promotes two causes with one rupee.
                                    You can donate one rupee per day and 1INR will get rotis made from housewife and Mahila Grih Udyogs who need money to
                                    fulfill their home and those rotis 1INR will send across to the following centers on respective days.
                                </span>
                            </p>
                            <p className="mt-3">
                                <span style={{
                                    fontSize: "11pt", fontFamily: "Arial",
                                    color: "#000000", backgroundColor: "transparent",
                                    fontWeight: "400", fontStyle: "normal", fontVariant: "normal",
                                    textDecoration: "none", whiteSpace: "pre-wrap", verticalAlign: "baseline"
                                }}>
                                    Our collection centers are as follows
                                </span>
                            </p>
                            <p>
                                <strong>
                                    <span
                                        style={{
                                            fontSize: "11pt", fontFamily: "Arial",
                                            color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                            fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                        }}
                                    >
                                        Every Sunday
                                    </span>
                                </strong>
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontSize: "11pt", fontFamily: "Arial",
                                        color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                        fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                    }}
                                >
                                    Byculla Motishah Jain Mandir
                                </span><br />
                                <a href="https://foursquare.com/v/shri-aadinath-ji-jain-temple-sheth-motisha-jain-mandir/4e40b40462e17b948c203517">
                                    https://4sq.com/2VcBUX2
                                </a>
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontSize: "11pt", fontFamily: "Arial",
                                        color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                        fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                    }}
                                >
                                    Worli Pankaj Mension
                                </span><br />
                                <a href="#">
                                    https://bit.ly/2T4Dzvg
                                </a>
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontSize: "11pt", fontFamily: "Arial",
                                        color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                        fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                    }}
                                >
                                    Kamathipura - Shree Naminath Jain Temple, Kamathipura
                                </span><br />
                                <a href="#">
                                    https://bit.ly/2vVhTcW
                                </a>
                            </p>
                            <p>
                                <strong>
                                    <span
                                        style={{
                                            fontSize: "11pt", fontFamily: "Arial",
                                            color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                            fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                        }}
                                    >
                                        Every Monday:
                                    </span>
                                </strong>
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontSize: "11pt", fontFamily: "Arial",
                                        color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                        fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                    }}
                                >
                                    Girgaon CP Tank Madhav Bang
                                </span><br />
                                <a href="#">
                                    https://bit.ly/2HOng0q
                                </a>
                            </p>
                            <p>
                                <strong>
                                    <span
                                        style={{
                                            fontSize: "11pt", fontFamily: "Arial",
                                            color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                            fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                        }}
                                    >
                                        Every Tuesday:
                                    </span>
                                </strong>
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontSize: "11pt", fontFamily: "Arial",
                                        color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                        fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                    }}
                                >
                                    Babu Amichand Jain Mandir, Walkeshawar
                                </span><br />
                                <a href="#">
                                    https://bit.ly/2SR4WK4
                                </a>
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontSize: "11pt", fontFamily: "Arial",
                                        color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                        fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                    }}
                                >
                                    Mulund- Zaver Road Jain Temple, Mulund West
                                </span><br />
                                <a href="#">
                                    https://bit.ly/32hEo80
                                </a>
                            </p>
                            <p>
                                <strong>
                                    <span
                                        style={{
                                            fontSize: "11pt", fontFamily: "Arial",
                                            color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                            fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                        }}
                                    >
                                        Every Wednesday:
                                    </span>
                                </strong>
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontSize: "11pt", fontFamily: "Arial",
                                        color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                        fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                    }}
                                >
                                    Girgaon CP Tank Madhav Bang
                                </span><br />
                                <a href="#">
                                    https://bit.ly/2HOng0q
                                </a>
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontSize: "11pt", fontFamily: "Arial",
                                        color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                        fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                    }}
                                >
                                    Girgaon CP Tank Madhav Bang
                                </span><br />
                                <a href="#">
                                    https://bit.ly/2HOng0q
                                </a>
                            </p>
                            <p>
                                <strong>
                                    <span
                                        style={{
                                            fontSize: "11pt", fontFamily: "Arial",
                                            color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                            fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                        }}
                                    >
                                        Every Thursday:
                                    </span>
                                </strong>
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontSize: "11pt", fontFamily: "Arial",
                                        color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                        fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                    }}
                                >
                                    Bharat Nagar Jain Temple, Grant Road
                                </span><br />
                                <a href="#">
                                    https://bit.ly/2uqLlHy
                                </a>
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontSize: "11pt", fontFamily: "Arial",
                                        color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                        fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                    }}
                                >
                                    Pratiksha Tower, Navjeevan, Mumbai Central
                                </span><br />
                                <a href="#">
                                    https://bit.ly/2uXGhuz
                                </a>
                            </p>
                            <p>
                                <strong>
                                    <span
                                        style={{
                                            fontSize: "11pt", fontFamily: "Arial",
                                            color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                            fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                        }}
                                    >
                                        Every Wednesday:
                                    </span>
                                </strong>
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontSize: "11pt", fontFamily: "Arial",
                                        color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                        fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                    }}
                                >
                                    Babu Amichand Jain Mandir, Walkeshawar
                                </span><br />
                                <a href="#">
                                    https://bit.ly/2SR4WK4
                                </a>
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontSize: "11pt", fontFamily: "Arial",
                                        color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                        fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                    }}
                                >
                                    Mulund- Zaver Road Jain Temple, Mulund West
                                </span><br />
                                <a href="#">
                                    https://bit.ly/32hEo80
                                </a>
                            </p>
                            <p>
                                <strong>
                                    <span
                                        style={{
                                            fontSize: "11pt", fontFamily: "Arial",
                                            color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                            fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                        }}
                                    >
                                        Every Thursday:
                                    </span>
                                </strong>
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontSize: "11pt", fontFamily: "Arial",
                                        color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                        fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                    }}
                                >
                                    Jain Mandir, Vijay Wadi, Chira Bazaar
                                </span><br />
                                <a href="#">
                                    https://bit.ly/2wBux13
                                </a>
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontSize: "11pt", fontFamily: "Arial",
                                        color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                        fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                    }}
                                >
                                    Jain Mandir, Kabutar Khana, Dadar west https://bit.ly/2V8IFJw
                                </span><br />
                                <a href="#">
                                    https://bit.ly/2V8IFJw
                                </a>
                            </p>
                            <p>
                                <strong>
                                    <span
                                        style={{
                                            fontSize: "11pt", fontFamily: "Arial",
                                            color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                            fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                        }}
                                    >
                                        Every Friday:
                                    </span>
                                </strong>
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontSize: "11pt", fontFamily: "Arial",
                                        color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                        fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                    }}
                                >
                                    Jain Mandir, Khetwadi 9th Lane
                                </span><br />
                                <a href="#">
                                    https://bit.ly/32fgdHs
                                </a>
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontSize: "11pt", fontFamily: "Arial",
                                        color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                        fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                    }}
                                >
                                    Village Road, Bhandup
                                </span><br />
                                <a href="#">
                                    https://bit.ly/32jnZ31
                                </a>
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontSize: "11pt", fontFamily: "Arial",
                                        color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                        fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                    }}
                                >
                                    Parksite, Vikhroli
                                </span><br />
                                <a href="#">
                                    https://bit.ly/39ZbDjh
                                </a>
                            </p>
                            <p>
                                <strong>
                                    <span
                                        style={{
                                            fontSize: "11pt", fontFamily: "Arial",
                                            color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                            fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                        }}
                                    >
                                        Every Saturday:
                                    </span>
                                </strong>
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontSize: "11pt", fontFamily: "Arial",
                                        color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                        fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                    }}
                                >
                                    Pathan Jain Mandir, Marine Drive
                                </span><br />
                                <a href="#">
                                    https://bit.ly/2SOFapP
                                </a>
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontSize: "11pt", fontFamily: "Arial",
                                        color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                        fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                    }}
                                >
                                    Dhobi Talao - Santoshi Mata Temple
                                </span><br />
                                <a href="#">
                                    https://bit.ly/32jnZ31
                                </a>
                            </p>
                            <p>
                                <span
                                    style={{
                                        fontSize: "11pt", fontFamily: "Arial",
                                        color: "#000000", backgroundColor: "transparent", fontStyle: "normal",
                                        fontVariant: "normal", textDecoration: "none", verticalAlign: "baseline", whiteSpace: "pre-wrap"
                                    }}
                                >
                                    Wagle Estate Thane
                                </span><br />
                                <a href="#">
                                    https://bit.ly/2SPRypD
                                </a>
                            </p>
                            <p className="mt-3">
                                <span style={{
                                    fontSize: "11pt", fontFamily: "Arial",
                                    color: "#000000", backgroundColor: "transparent",
                                    fontWeight: "400", fontStyle: "normal", fontVariant: "normal",
                                    textDecoration: "none", whiteSpace: "pre-wrap", verticalAlign: "baseline"
                                }}>
                                    There are many people who do not have money to buy food. They go to sleep with their hungry stomachs.
                                    It is a pity to see people who have money and who splurge lavishly but fail to give the needy some food.
                                    1INR has collaborated with NGOs and created the Roti Daan Campaign for the needy and poor people.
                                </span>
                            </p>
                            <p className="mt-3">
                                <span style={{
                                    fontSize: "11pt", fontFamily: "Arial",
                                    color: "#000000", backgroundColor: "transparent",
                                    fontWeight: "400", fontStyle: "normal", fontVariant: "normal",
                                    textDecoration: "none", whiteSpace: "pre-wrap", verticalAlign: "baseline"
                                }}>
                                    In this campaign we make sure to donate the target amount of Rotis or Chapatis to poor and hungry people
                                    so that they can have a full meal and can go to bed with their stomach filled in and not sleep hungry.
                                    This initiative was possible only through 1INR team, who care about people and the problems that they go through.
                                    It is an act of kindness that we want to show as a part of the good gesture towards society.
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

export default Pehli_roti

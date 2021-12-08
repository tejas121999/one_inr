import React from 'react'
import { Link } from 'react-router-dom'
import card1 from '../Images/descovr_camp/Paying_Children_education.jpeg'
import card2 from '../Images/descovr_camp/Sponsoring_Stationary_for_Students.jpeg'
import card3 from '../Images/descovr_camp/Feeding_Pigeons_Grains.jpeg'
import card4 from '../Images/descovr_camp/Feed_Cows_with_grass_of_Love.jpeg'
import card5 from '../Images/descovr_camp/Pahali_roti.jpeg'
import card6 from '../Images/descovr_camp/Sponsoring_Books_for_Students.jpeg'


const DescoverCamp = () => {
    return (
        <div>
            <div className="list campaning">
                <div className="container">
                    <br />
                    <div className="card-deck mb-3">
                        <div className="card">
                            <Link to="/education_fee">
                                <img className="card-img-top" src={card1} alt="Card image cap" />
                            </Link>
                            <div className="card-body">
                                <Link to='/education_fee'>
                                    <p className="card-title">Paying Children education fee</p>
                                </Link>
                                <p className="card-text">All together we can help to sponsor a child the basic education so that we can help each other and help ourselves to shape the nation.</p>
                            </div>
                            <div className='container'>
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
                            </div>
                        </div>
                        <div className="card">
                            <Link to="/sponsoring_stationary">
                                <img className="card-img-top" src={card2} alt="Card image cap" />
                            </Link>
                            <div className="card-body">
                                <Link to='/sponsoring_stationary'>
                                    <p className="card-title">Sponsoring Stationary for Students</p>
                                </Link>
                                <p className="card-text">By sponsoring a child’s education you help to fulfil their dreams but also help the parent who cannot afford to send their child to school.</p>
                            </div>
                            <div className='container'>
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
                            </div>
                        </div>
                        <div className="card">
                            <Link to="/sponsoring_stationary">
                                <img className="card-img-top" src={card3} alt="Card image cap" />
                            </Link>
                            <div className="card-body">
                                <Link to='/sponsoring_stationary'>
                                    <p className="card-title">Feeding Pigeons Grains</p>
                                </Link>
                                <p className="card-text">This is an initiative taken up by 1INR to raise awareness to sponsor grains and water for hungry and thirsty birds</p>
                            </div>
                            <div className='container'>
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
                            </div>
                        </div>
                    </div>
                    <div className="card-deck mb-3">
                        <div className="card">
                            <Link to="/feed_cows">
                                <img className="card-img-top" src={card4} alt="Card image cap" />
                            </Link>
                            <div className="card-body">
                                <Link to='/feed_cows'>
                                    <p className="card-title">Feed Cows with grass of Love</p>
                                </Link>
                                <p className="card-text">Feeding the hungry cows is a noble deed that help us to increase our good karma thereby also invites us some good luck.</p>
                            </div>
                            <div className='container'>
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
                            </div>
                        </div>
                        <div className="card">
                            <Link to="/pehli_roti">
                                <img className="card-img-top" src={card5} alt="Card image cap" />
                            </Link>
                            <div className="card-body">
                                <Link to='/pehli_roti'>
                                    <p className="card-title">Pehli Roti Dayitva Ki</p>
                                </Link>
                                <p className="card-text">1INR has collaborated with Hunger Project by Lions Club of Millennials and Lions Club of Churchgate Mumbai supported by Roti Bank.</p>
                            </div>
                            <div className='container'>
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
                            </div>
                        </div>
                        <div className="card">
                            <Link to="/sponsoring_books">
                                <img className="card-img-top" src={card6} alt="Card image cap" />
                            </Link>
                            <div className="card-body">
                                <Link to='/sponsoring_books'>
                                    <p className="card-title">Sponsoring Books for Students</p>
                                </Link>
                                <p className="card-text">Providing the children with free books will help them to learn and grow as well as help them to become better human beings.</p>
                            </div>
                            <div className='container'>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 mb-5 text-center">
                <Link to="/campaninges">
                    <button type="button" class="btn btn-primary">view all Campaigns</button>
                </Link>
            </div>
        </div>
    )
}

export default DescoverCamp

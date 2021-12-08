import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import SideBar from "../Account/sidebar";
import { useForm } from "react-hook-form";

const Campaigns = () => {
  const [navLink, setNavLink] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  const handleMoneyAdd = (data) => {
    setNavLink(data);
  };

  console.log(navLink);
  const plan = watch("plan");

  return (
    <div className="site-main">
      <div className="container">
        <h1>My Profile</h1>
        <div
          class="breadcrumbs"
          style={{ display: "inline-flex", marginBottom: "25px" }}
        >
          <Link to="/">Home</Link>
          <span>&nbsp;/&nbsp;</span>
          Profile
        </div>
      </div>

      <div className="account-wrapper">
        <div className="container">
          <div class="row">
            <SideBar />
            <div className="col-lg-9">
              <div className="account-content profile">
                <h3 className="account-title">
                  One INR Wallet{" "}
                  <span style={{ float: "right" }}>Balance: 1113209</span>
                </h3>
                <div className="account-main">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <Link
                        data-toggle="tab"
                        // to="#moneyTab"
                        className="nav-link active"
                        onClick={() => handleMoneyAdd("1")}
                      >
                        Add Money To Wallet
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        data-toggle="tab"
                        // to="#planTab"
                        className="nav-link"
                        onClick={() => handleMoneyAdd("2")}
                      >
                        Change Plan
                      </Link>
                    </li>
                  </ul>

                  {navLink === "1" || navLink === 1 ? (
                    <>
                      {console.log("enter in 1")}
                      {/* <h2>1</h2> */}
                      <div className="tab-content">
                        <div
                          id="moneyTab"
                          className="tab-pane container active"
                          // aria-expanded="true"
                        >
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <br />{" "}
                            <div className="form-check form-check-inline">
                              <input
                                type="radio"
                                id="inlineRadio1"
                                value="select"
                                className="form-check-input"
                                {...register("plan", {
                                  required: "Plan type is required",
                                })}
                              />{" "}
                              <label
                                htmlFor="inlineRadio1"
                                className="form-check-label"
                                style={{ paddingLeft: "0px" }}
                              >
                                Select Plan
                              </label>
                            </div>{" "}
                            <div
                              className="form-check form-check-inline"
                              style={{ marginLeft: "30px" }}
                            >
                              <input
                                type="radio"
                                id="custom"
                                value="custom"
                                className="form-check-input"
                                {...register("plan", {
                                  required: "Plan type is required",
                                })}
                              />{" "}
                              <label
                                htmlFor="custom"
                                className="form-check-label"
                                style={{ paddingLeft: "0px" }}
                              >
                                Custom Plan
                              </label>
                            </div>{" "}
                            <div className="absolute top-12 left-80">
                              {errors.plan && (
                                <span className="text-red-400 text-sm">
                                  {errors.plan.message}
                                </span>
                              )}
                            </div>
                            <div id="planFields" className="row">
                              {plan === "select" && (
                                <div
                                  className="col-md-12"
                                  style={{ paddingLeft: "2em" }}
                                >
                                  <div className="radio">
                                    <label>
                                      <input
                                        type="radio"
                                        value="365"
                                        className="pay-cost"
                                        {...register("amount", {
                                          required: "Amount is required",
                                        })}
                                      />
                                      {errors.amount && (
                                        <span className="text-red-400 text-sm">
                                          {errors.amount.message}
                                        </span>
                                      )}{" "}
                                      1 Rs / Per Day ( Rs. 365)
                                    </label>
                                  </div>{" "}
                                  <div className="radio">
                                    <label>
                                      <input
                                        type="radio"
                                        value="730"
                                        class="pay-cost"
                                        {...register("amount", {
                                          required: "Amount is required",
                                        })}
                                      />{" "}
                                      2 Rs / Per Day ( Rs. 730)
                                    </label>
                                  </div>{" "}
                                  <div className="radio">
                                    <label>
                                      <input
                                        type="radio"
                                        value="1095"
                                        className="pay-cost"
                                        {...register("amount", {
                                          required: "Amount is required",
                                        })}
                                      />{" "}
                                      3 Rs / Per Day ( Rs. 1095)
                                    </label>
                                  </div>
                                </div>
                              )}
                            </div>{" "}
                            <div id="customFields" className="row">
                              {plan === "custom" && (
                                <div
                                  className="col-md-4"
                                  style={{ paddingLeft: "2em" }}
                                >
                                  <div className="form-group">
                                    <label>
                                      Amount: (min{" "}
                                      <i
                                        // aria-hidden="true"
                                        className="fa fa-inr"
                                      ></i>{" "}
                                      365 / Year)
                                    </label>{" "}
                                    <input
                                      type="number"
                                      name="perday"
                                      min="1"
                                      placeholder="Amount Per Day"
                                      required="required"
                                      // onchange="getYearAmount(this)"
                                      // onkeyup="getYearAmount(this)"
                                      // onkeydown="if(event.key==='.'){event.preventDefault();}"
                                      // oninput="event.target.value = event.target.value.replace(/[^0-9]*/g,'');"
                                      className="form-control"
                                    />{" "}
                                    <br />{" "}
                                    <input
                                      type="number"
                                      name="amount"
                                      min="365"
                                      placeholder="Yearly Amount"
                                      required="required"
                                      readonly="readonly"
                                      className="form-control pay-custom-cost"
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                            <br /> {/* button section */}
                            <div className="pay">
                              <button
                                id="paybtn"
                                type="button"
                                className="razorpay-payment-button btn filled small btn-primary"
                              >
                                Pay with Razorpay
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="tab-content">
                        {/* <div
                          id="planTab"
                          className="tab-pane container "
                          // aria-expanded="false"
                        > */}
                        <div className="row">
                          <div className="col-md-6">
                            <br />{" "}
                            <p>
                              Your current plan is:{" "}
                              <i aria-hidden="true" class="fa fa-inr"></i> 1 /
                              Day
                            </p>{" "}
                            <form method="POST" action="/plan">
                              {/* <input name="_method" type="hidden" value="PUT" />
                              <input
                                name="_token"
                                type="hidden"
                                value=""
                              />{" "} */}
                              <div className="form-group">
                                <input
                                  type="number"
                                  name="amount"
                                  min="1"
                                  placeholder="Enter amount"
                                  required="required"
                                  // onkeyup="getNumberOfDays(this)"
                                  // onchange="getNumberOfDays(this)"
                                  // onkeydown="if(event.key==='.'){event.preventDefault();}"
                                  // oninput="event.target.value = event.target.value.replace(/[^0-9]*/g,'');"
                                  className="form-control col-md-6"
                                  // autocomplete="off"
                                  style={{ display: "inline" }}
                                />{" "}
                                <span style={{ display: "inline" }}>
                                  {" "}
                                  Per Day
                                </span>{" "}
                                <br />{" "}
                                <button
                                  className="btn-primary"
                                  style={{ marginTop: "20px" }}
                                >
                                  Change Plan
                                </button>
                              </div>
                            </form>
                          </div>
                          <div className="col-md-6">
                            <br />{" "}
                            <table
                              id="change-plan-calculation"
                              style={{ width: "100%" }}
                            >
                              <tbody>
                                <tr>
                                  <td style={{ width: "30%" }}>Balance</td>{" "}
                                  <td className="balance">Rs. 1113209</td>
                                </tr>{" "}
                                <tr>
                                  <td>Per Day</td>{" "}
                                  <td className="per-day-amount">Rs. 1</td>
                                </tr>{" "}
                                <tr>
                                  <td>No Of Days</td>{" "}
                                  <td className="No-of-days">1113209 days</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        {/* </div> */}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;

import React from "react";
import contact from "../../Images/contact_us.jpg";
import Recaptcha from "react-recaptcha";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { Link } from "react-router-dom";
import "./contact.css";

function Contact() {
  return (
    <div className="site-main">
      <div className="sideshow">
        <img src={contact} alt="contact_us" height="100%" width="100%" />
      </div>
      <div className="container padding-top">
        <h1>Contact</h1>
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>&nbsp;/&nbsp;</span>Contact
        </div>
      </div>
      <div className="page-content contact-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 main-content">
              <div className="entry-content">
                <div className="row">
                  <div className="col-lg-8">
                    <div class="form-contact">
                      <h2>Drop us a line</h2>
                      <br />

                      <form
                        action="https://test.oneinr.com/enquiry"
                        method="post"
                        id="contactForm"
                        className="clearfix"
                        autocomplete="off"
                      >
                        {/* <input
                          name="_token"
                          type="hidden"
                          value
                          autocomplete="off"
                        />
                        <input
                          type="hidden"
                          name="_token"
                          value
                          autocomplete="off"
                        />{" "} */}
                        <div className="clearfix">
                          <div className="field align-left">
                            <input
                              placeholder="Your Name"
                              name="name"
                              type="text"
                              autocomplete="off"
                            />
                          </div>
                          <div className="field align-right">
                            <input
                              placeholder="Your Email"
                              name="email"
                              type="email"
                              autocomplete="off"
                            />
                          </div>
                        </div>
                        <div className="field-textarea">
                          <textarea
                            placeholder="Your Message"
                            name="message"
                            cols="50"
                            rows="10"
                          ></textarea>
                        </div>
                        <div style={{ marginBottom: "25px" }}>
                          {/* <div
                            className="g-recaptcha"
                            data-sitekey=""
                          ></div> */}
                          <Recaptcha
                            sitekey="6LeW4rQUAAAAACPWgFID3rAFSAxr7ClLTpBjvgF8"
                            render="explicit"
                            // verifyCallback={verifyCallback}
                            // onloadCallback={recaptchaLoaded}
                          />
                        </div>
                        <div style={{ marginBottom: "25px" }}>
                          <button
                            type="submit"
                            value="Send Messager"
                            className="btn-primary"
                          >
                            Submit Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div class="contact-info">
                      <h3>Contact Infomation</h3>
                      <br />
                      <ul>
                        <LocationOnIcon fontSize="small" />
                        41, 4th floor A-wing, Todi Industrial Estate Sun Mill
                        compound Road, Lower Parel, Mumbai, Maharashtra 400013
                        <br />
                        <CallIcon fontSize="small" />
                        +91 22 66395181 / 82
                        <br />
                        <PhoneIphoneIcon fontSize="small" />
                        08030636437 / +91 9819312721
                        <br />
                        <MailOutlineOutlinedIcon fontSize="small" />
                        enquiry@nimapinfotech.com
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

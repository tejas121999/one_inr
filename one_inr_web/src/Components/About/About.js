import React from "react";
import { Link } from "react-router-dom";
import about from "../../Images/about_us.jpg";
// import "./about.css";

function About() {
  return (
    <div className="site-main">
      <div className="sideshow">
        <img src={about} alt="about_us" height="100%" width="100%" />
      </div>
      <div className="container padding-top">
        <h1>About Us</h1>
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>&nbsp;/&nbsp;</span>About Us
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>
              We believe in your power to make someone smile, to save someone's
              life, to foster brilliant ideas, to make a social change and make
              a strong impact that you want to make in this world. We believe
              that each individual holds the power to effect great change and
              given the right tools and the right backing, can make a change
              that we all want to see in this society. We've built an
              easy-to-use platform to transform individuals and empower them to
              be the change that they want to see around them, who will lead the
              world to goodness. We offer the best online tools to mobilize the
              crowd towards great ideas and projects and get good things done
              fast.
            </p>
            <br />
            <p>
              We are a tech-for-good platform that provides complete
              crowdfunding solutions to empower individuals, NGOs and social
              enterprises to raise funds for medical emergencies, personal
              needs, creative projects or any social cause - be it big or small.
              We aim to bring together generosity with need to maximise people's
              potential to do good.
            </p>
            <br />
            <p>
              There is a need for poverty stricken people to get up and work for
              their rights that they desire. There is also a need for a better
              tomorrow for the community and the people that we live in this
              country. There are people who do not have a Decent meal since
              Ages. We need to do something for our environment and the people
              who live with us. We should establish the communal harmony that we
              all desire for.
            </p>
            <br />
            <p>
              With this aim in mind the 1INR platform was born! 1INR solely aims
              to make the world a better place to live in for the nation and all
              the communities who live in.{" "}
            </p>
            <br />
            <p>
              We are a Crowdfunding Platform that sources financial donations
              from Non Profit NGOs into helping others make an impact in the
              society and become the change that they want to see in this world.
            </p>
            <br />
            <p>
              All our efforts and works are backed by high profile NGOs and work
              groups who put in a lot of thought and effort into making social
              causes for the society and nation. We care for the world and
              humanity and therefore we put a lot of effort into our social
              causes, you can be rest assured that your data is being used in a
              simple and secure way for the mutual benefit of our people. We do
              not sell information to third parties and in no way we will use
              your data or personal information such as your name, email, and
              contact details for marketing purposes or to send you promotional
              offers and emailers or to send you any kind of marketing
              materials.
            </p>
            <br />
            <p>
              Our project campaigns are fully supported by respective Non-Profit
              Organizations who look up into the care and give for the poor and
              needy people. You can be rest assured that your money is being
              utilized and put to good use only. All our people are working hard
              to make the world a much better place to live in for our people
              and for the things present in our environment.
            </p>
            <br />
            <p>
              Our projects and cause works are backed by a 100% secure payment
              system who guard against your personal and private information. We
              guarantee that all payment information being exchanged are backed
              by the latest technology and payment gateways in order to ensure
              that your donation is received by us in a secure and safe manner.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

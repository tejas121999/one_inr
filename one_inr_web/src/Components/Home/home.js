import React from "react";
import Banner from "./Banner";
import DescoverCamp from "./DescoverCamp";
import Promise from "./Promise";
import { scrollTop } from "../layout/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="site-main">
      <div>
        <Banner />
      </div>
      <div>
        <Promise />
      </div>
      <div>
        <h2 className="text-center">Discover Campaigns</h2>
        <DescoverCamp />
        <div className="mt-5 mb-5 text-center">
          <Link to="/campaigns" onClick={scrollTop}>
            <button type="button" class="btn btn-primary">
              view all Campaigns
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

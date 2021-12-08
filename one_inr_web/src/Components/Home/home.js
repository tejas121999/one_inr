import React from "react";
import Banner from "./Banner";
import DescoverCamp from "./DescoverCamp";
import Promise from "./Promise";

function Home() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        <Promise />
      </div>
      <div>
        <h2 className="text-center">Discover Campaigns</h2>
        <DescoverCamp />
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import About from "../../components/About";
import Featured from "../../components/Featured_Projects";

const Home = () => {
  return (
    <div className="about-container">
      <About />
      <Featured />

      <div className="relevant-links-container">
        <div className="rel-head-cont">
          <h3 className="relevant-header">Relevant Links:</h3>
        </div>

        <div className="rel-link-text">
          <a href="https://www.linkedin.com/in/vincent-toon-4954b6162/">
            <h5 className="link-link">
              https://www.linkedin.com/in/vincent-toon-4954b6162/
            </h5>
          </a>
        </div>
        <div className="rel-link-text">
          <a href="https://github.com/Vincenttoon">
            <h5 className="link-link">https://github.com/Vincenttoon</h5>
          </a>
        </div>
        <div className="rel-link-text">
          <a href="https://www.facebook.com/vince.toon">
            <h5 className="link-link">https://www.facebook.com/vince.toon</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

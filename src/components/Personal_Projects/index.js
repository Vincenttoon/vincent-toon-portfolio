import React from "react";
import { Link } from "react-router-dom";

import weatherImg from "../../assets/personal_proj_img/weather-icon.jpg";
import beerPromptImg from "../../assets/portfolio_img/inquirer-function.jpg";

const Personal = () => {
  return (
    <div className="individ-container">
      <h2 className="featured-title">Personal Projects</h2>
      <p className="info-for-link">
        {" "}
        (Please click the image to be redirected to this projects github page)
      </p>

      <div className="flex-column project-cont-2">
        <h4 className="f-proj-title-2">Beer to SQL</h4>
        <div className="flex-row justify-space-around proj-info-cont">
          <p className="f-proj-desc">
            Back end database using SQL, Javascript and Inquirer to track all
            the beers a user has drank, complete with rating, style, brewery and
            date drunk. Inspired by Untappd, but build by hand for fun to
            strengthen back-end portfolio.
          </p>
          <a href="https://github.com/Vincenttoon/beer_to_sql">
            <img
              src={beerPromptImg}
              className="port-img"
              alt="beer mug vector"
            />
          </a>
        </div>
      </div>

      <div className="flex-column project-cont-1">
        <h3 className="f-proj-title">Weather Man</h3>
        <div className="justify-space-around proj-info-cont-2">
          <a href="https://github.com/Vincenttoon/weatherman-react">
            <img
              src={weatherImg}
              className="port-img mb-img-adj"
              alt="Sun and cloud"
            />
          </a>
          <p className="f-proj-desc mt-5">
            A new attempt at a basic weather application. The weather app
            targeting 3rd party API's was my worst bootcamp challenge, so I
            wanted to recreate this project while implementing learned and new
            react practices.
          </p>
        </div>
      </div>

      <div className="more-info-cont">
        <h4 className="more-info-head">
          {" "}
          For more projects, head back to{" "}
          <Link className="text-link" to="/portfolio">
            {" "}
            Portfolio{" "}
          </Link>{" "}
          page or explore my personal Github profile:
        </h4>
        <a href="https://github.com/Vincenttoon">
          <h5 className="more-info-link">https://github.com/Vincenttoon</h5>
        </a>
      </div>
    </div>
  );
};

export default Personal;

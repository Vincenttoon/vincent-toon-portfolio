import React from "react";
import { Link } from "react-router-dom";

import breweryFinderImg from "../../assets/portfolio_img/post-search.jpg";
import liveWireImg from "../../assets/portfolio_img/Live_Wire_Homepage.jpg";
import employeeTrackerImg from "../../assets/portfolio_img/command-line-action.jpg";
import beerPromptImg from "../../assets/portfolio_img/inquirer-function.jpg";

const Featured = () => {
  return (
    <div className="container f-cont flex-column">
      <div className="flex-column project-cont-1">
        <h2 className="featured-title">Featured Projects</h2>
        <h4 className="f-proj-title">Live Wire</h4>
        <div className="justify-space-around proj-info-cont-2">
          <img
            src={liveWireImg}
            className="port-img"
            alt="live wire home screen"
          />
          <p className="f-proj-desc mt-5">
            Wash U Project 3. MERN Stack social media application where users
            can share their reviews of all things music. User's can add friends,
            post and comment on others posts. PWA.
          </p>
        </div>
        <div className="link-container flex-row justify-space-around">
          <h5 className="proj-link-text">
            <a href="https://live-wire-music.herokuapp.com/">Live Deployment</a>
          </h5>
          <h5 className="proj-link-text">
            <a href="https://github.com/Vincenttoon/Live-Wire">Github</a>
          </h5>
        </div>
      </div>

      <div className="flex-column project-cont-2">
        <h4 className="f-proj-title-2">Beer to SQL</h4>
        <div className="flex-row justify-space-around proj-info-cont">
          <p className="f-proj-desc">
            Back end database using SQL, Javascript and Inquirer to track all
            the beers a user has drank, complete with rating, style, brewery and
            date drunk. Inspired by Untappd, but build by hand for fun to
            strengthen back-end portfolio.
          </p>
          <img
            src={beerPromptImg}
            className="port-img"
            alt="beer mug vector"
          />
        </div>
        <div className="link-container flex-row justify-space-around">
          <h5 className="proj-link-text-2">
            <a href="https://drive.google.com/file/d/1qeD1Cma5xSUzwdU-0ontWt0Rh8wPD5UT/view">
              Video Demonstration
            </a>
          </h5>
          <h5 className="proj-link-text-2">
            <a href="https://github.com/Vincenttoon/beer_to_sql">Github</a>
          </h5>
        </div>
      </div>

      <div className="flex-column project-cont-1">
        <h4 className="f-proj-title">Find Your Brew</h4>
        <div className="flex-row justify-space-around proj-info-cont">
          <p className="f-proj-desc">
            Wash U Project 1. Javascript application using 2 third party api's
            (Google Maps and BreweryDB). User can search cities and find the
            name, location, address, and brewery website (if available) and save
            this information for later.
          </p>
          <img
            src={breweryFinderImg}
            className="port-img"
            alt="brewery finder home screen"
          />
        </div>
        <div className="link-container flex-row justify-space-around">
          <h5 className="proj-link-text-2">
            <a href="https://vincenttoon.github.io/brewery-finder/">
              Live Deployment
            </a>
          </h5>
          <h5 className="proj-link-text-2">
            <a href="https://github.com/Vincenttoon/brewery-finder">Github</a>
          </h5>
        </div>
      </div>

      <div className="flex-column project-cont-2">
        <h4 className="f-proj-title-2">Employee Tracker</h4>
        <div className="flex-row justify-space-around proj-info-cont-2">
          <img
            src={employeeTrackerImg}
            className="port-img"
            alt="Employee Tracker SQL example"
          />
          <p className="f-proj-desc mt-5">
            SQL Back end application using a content management system. This
            project mimics a company's employee list with their jobs, salary and
            managers.
          </p>
        </div>
        <div className="link-container flex-row justify-space-around">
          <h5 className="proj-link-text">
            <a href="https://drive.google.com/file/d/1QJjaNJ6SWj9D_mGSDWqYwiamMNUx2Do6/view">
              Video Demonstration
            </a>
          </h5>
          <h5 className="proj-link-text">
            <a href="https://github.com/Vincenttoon/employee-tracker-extraordinaire">
              Github
            </a>
          </h5>
        </div>
      </div>

      <div className="more-info-cont">
        <p className="more-info-head">
          {" "}
          For more projects, head to my{" "}
          <Link className="text-link" to="/portfolio">
            {" "}
            Portfolio{" "}
          </Link>{" "}
          page or explore my personal{" "}
          <a className="text-link" href="https://github.com/Vincenttoon">
            Github
          </a>{" "}
          profile:
        </p>
      </div>
    </div>
  );
};

export default Featured;

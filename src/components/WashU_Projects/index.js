import React from "react";
import bookwormImg from "../../assets/challenge_img/book-worm-mason.jpg";
import oldPortImg from "../../assets/challenge_img/old-port.jpg";
import jateImg from "../../assets/challenge_img/jate-header-img.jpg";
import ecbeImg from "../../assets/challenge_img/cat-list.jpg";
import readmeImg from "../../assets/challenge_img/read-me-output.jpg";
import quizImg from "../../assets/challenge_img/home-screen.jpg";

const Challenges = () => {
  return (
    <div className="individ-container about-container">
      <h2 className="featured-title">Bootcamp Challenges</h2>
      <p className="info-for-link">
        {" "}
        (Please click the image to be redirected to this projects github page)
      </p>

      <div className="flex-column project-cont">
        <h3 className="f-proj-title-2">Readme Generator</h3>
        <div className="justify-space-around proj-info-cont-2">
          <a href="https://github.com/Vincenttoon/read-for-me">
            <img
              src={readmeImg}
              className="port-img-link"
              alt="output from readme generator"
            />
          </a>
          <p className="f-proj-desc-2 mt-5">
            Read Me generator to help produce professional Readme's. CLI
            Application that uses inquirer to ask user a list of questions and
            take that information to produce desired Readme.
          </p>
        </div>
      </div>

      <div className="flex-column project-cont-1">
        <h3 className="f-proj-title">Book Worm</h3>
        <div className="justify-space-around proj-info-cont-2">
          <a href="https://github.com/Vincenttoon/book-worm">
            <img
              src={bookwormImg}
              className="port-img-link"
              alt="book worm saved screen"
            />
          </a>
          <p className="f-proj-desc-2 mt-5">
            MERN Stack application where users can search for books using Google
            Books API. User's can save book's on their reading list for later
            viewing.
          </p>
        </div>
      </div>

      <div className="flex-column project-cont">
        <h3 className="f-proj-title-2">React Portfolio</h3>
        <div className="justify-space-around proj-info-cont-2">
          <a href="https://github.com/Vincenttoon/Toon-React-Portfolio">
            <img
              src={oldPortImg}
              className="port-img-link"
              alt="old portfolio landing page"
            />
          </a>
          <p className="f-proj-desc-2 mt-5">
            Original React portfolio. This project was a time crunch, and I
            didn't like the method I used. Was a nightmare to refactor, hence
            this current portfolio.
          </p>
        </div>
      </div>

      <div className="flex-column project-cont-1">
        <h3 className="f-proj-title">Text Editor</h3>
        <div className="justify-space-around proj-info-cont-2">
          <a href="https://github.com/Vincenttoon/textfas-burrito-two">
            <img
              src={jateImg}
              className="port-img-link"
              alt="JATE text logo"
            />
          </a>
          <p className="f-proj-desc-2 mt-5">
            PWA Javascript text editor that saves and stores changes for later
            reference. This application works offline through a service worker
            and is installable to your local machine.
          </p>
        </div>
      </div>

      <div className="flex-column project-cont">
        <h3 className="f-proj-title-2">E Commerce Back End</h3>
        <div className="justify-space-around proj-info-cont-2">
          <a href="https://github.com/Vincenttoon/ecommerce-back-end">
            <img
              src={ecbeImg}
              className="port-img-link"
              alt="list of items for sale in SQL"
            />
          </a>
          <p className="f-proj-desc-2 mt-5">
            A CLI application that mimics an e-commerce website. SQL helps
            control and maintain the database.
          </p>
        </div>
      </div>

      <div className="flex-column project-cont-1">
        <h3 className="f-proj-title">Javascript Quiz</h3>
        <div className="justify-space-around proj-info-cont-2">
          <a href="https://github.com/Vincenttoon/read-for-me">
            <img
              src={quizImg}
              className="port-img-link"
              alt="Java Quiz home screen"
            />
          </a>
          <p className="f-proj-desc-2 mt-5">
            Javascript Coding Quiz that tracks your scores in local storage and
            saves high scores. Introduction to Web Api's.
          </p>
        </div>
      </div>

      <div className="more-info-cont">
        <h4 className="more-info-head">
          {" "}
          For more projects, please visit my personal Github profile:
        </h4>
        <a href="https://github.com/Vincenttoon">
          <h5 className="more-info-link">https://github.com/Vincenttoon</h5>
        </a>
      </div>
    </div>
  );
};

export default Challenges;

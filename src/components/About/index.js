import React from "react";
import meImg from "../../assets/portfolio_img/me_pic.jpg";

const About = () => {
  // return about and display img
  return (
    <div className="about-me-cont">
      <div className="bio-cont justify-center">
      <img src={meImg} className="my-photo" alt="Vincent smiling" />
        <div className="vincent-info-container flex-column">
          <h3 className="info-name">Vincent Toon</h3>
          <h4 className="info-job"> Full Stack Web Developer </h4>
          <p className="info-text">
            Graduate from Washington University's Full Stack Web Development
            Bootcamp. As a developer, I have a passion for building applications
            from the ground up and learning new technologies to both improve my
            knowledge of web development and boost the user's enjoyment of an
            application.
          </p>
          <br></br>

          {/* <p className="info-text">
                    Before pursuing web development full time, I spent my early professional career 
                    all over the service and beer industries. I have worked as a bar manager, brand representative,
                     salesman and brewery assistant. These jobs have made me comfortable working in a fast paced environment 
                     and have found that many of the skills I have learned have benefitted me in succeeding in the practice 
                     and world of web development
                </p>
                <br></br> */}

          <p className="info-text">
            When I am not online I enjoy walking my dog, playing music, playing
            video games, catching up with friends and visiting breweries far and
            wide for great drinks and food.
          </p>
          <br></br>

          <p className="info-text">
            Please reach out if you have any inquiries or questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
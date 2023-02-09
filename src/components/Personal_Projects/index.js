import React from "react";
import weatherImg from "../../assets/personal_proj_img/weather-icon.jpg";

const Personal = () => {
  return (
    <div className="individ-container">
      <h2 className="featured-title">Personal Projects</h2>
      <p className="info-for-link"> (Please click the image to be redirected to this projects github page)</p>
      
      <div className="flex-column project-cont-1">
        <h3 className="f-proj-title">Weather Man</h3>
        <div className="justify-space-around proj-info-cont-2">
          <img
            src={weatherImg}
            className="port-img-link"
            alt="live wire home screen"
          />
          <p className="f-proj-desc mt-5">
            A new attempt at a basic weather application. The weather app
            targeting 3rd party API's was my worst bootcamp challenge, so I
            wanted to recreate this project while implementing learned and new
            react practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Personal;

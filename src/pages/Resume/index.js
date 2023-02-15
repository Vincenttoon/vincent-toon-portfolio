import React from "react";
import { FaFileDownload } from "react-icons/fa";

// resume import here

const Resume = () => {
  return (
    <div className="resume-cont">
      <div className="education-cont">
        <h6 className="rl-dl-text">
          {" "}
          For a full Resume, please click the icon below:
        </h6>
        <a
          href="https://docs.google.com/document/d/1FpWx2xgtQxD3zX48cwTNMBZvoIIRpZhJdiG56QS48xc/edit?usp=sharing"
          className="tech-logo dl-icon"
        >
          <FaFileDownload fontSize={"3em"} />
        </a>

        <h2 className="special-head">Education:</h2>
        <div className="school-cont">
          <h4 className="single-head-1">
            Washington University, St. Louis, MO
          </h4>
          <p className="single-text">
            Certificate of completion in Full Stack Web Development 24 week
            Bootcamp.
          </p>
          <br></br>
          <p className="single-text">
            Focus on MERN Stack development through JS6 industry standard
            practices.
          </p>
          <h6 className="date-attended">July 2022 - December 2022</h6>
        </div>
        <div className="school-cont">
          <h4 className="single-head-2">
            Southern Illinois University Edwardsville, Edwardsville, IL
          </h4>
          <p className="single-text">Bachelors of Arts in Political Science</p>
          <br></br>
          <p className="single-text">
            Minor in Sociology. Primary studies were in law and data analysis of
            public inequalities.
          </p>
          <h6 className="date-attended-2">August 2015 - May 2018</h6>
        </div>
      </div>

      <div className="education-cont">
        <h2 className="special-head-2">Experience:</h2>
        <div className="school-cont">
          <h4 className="single-head-3">
            Global Brew Taphouse, Edwardsville, IL
          </h4>
          <p className="single-text">
            Full time bartender maintaining best practices of inventory and
            customer management.
          </p>
          <br></br>
          <p className="single-text">
            Assists with training new employees and handling daily financial
            responsibilities.
          </p>
          <h6 className="date-attended-3">April 2021 - Present</h6>
        </div>
        <div className="school-cont">
          <h4 className="single-head-4">
            Old Herald Brewery and Distillery, Collinsville, IL
          </h4>
          <p className="single-text">
            Brewery Assistant and Bartender for hometown craft brewery.
          </p>
          <br></br>
          <p className="single-text">
            Assisted in brewing, maintenance, bottling and cleanliness in the
            brewery. Helped day to day operations at the bar in the evening
          </p>
          <h6 className="date-attended-4">August 2020 - April 2021</h6>
        </div>

        <div className="school-cont">
          <h4 className="single-head-5">Wang Gang Asian, Edwardsville, IL</h4>
          <p className="single-text">Bar Program and daily floor manager.</p>
          <br></br>
          <p className="single-text">
            Managed inventory, ordering, organization, employees, financial's on
            a daily and weekly basis while maintaining customer relations.
          </p>
          <h6 className="date-attended-4">March 2013 - August 2020</h6>
        </div>
      </div>
    </div>
  );
};

export default Resume;

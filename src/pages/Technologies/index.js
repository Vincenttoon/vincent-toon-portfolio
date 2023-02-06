import React from "react";
// import logos to use as components
import { BsBook } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="tech-cont">
      <div className="card-cont">
        <div className="tech-card">
          <h4 className="tech-head">Primary Practices:</h4>
          <div className="language-cont">
            <ul className="ul-class">
              <li className="tech-logo">
                <MdComputer fontSize={"3em"} />
              </li>
              <li>React</li>
              <li>Mongoose</li>
              <li>Express</li>
              <li>Node.js</li>
              <li>JS6</li>
              <li>CSS3</li>
              <li>HTML5</li>
            </ul>
          </div>
        </div>
        
        <div className="tech-card">
          <h4 className="tech-head">Technologies:</h4>
          <div className="language-cont">
            <ul className="ul-class">
              <li className="tech-logo">
                <BsBook fontSize={"3em"} />
              </li>
              <li>SQL</li>
              <li>NoSQL</li>
              <li>Sequelize</li>
              <li>Webpack</li>
              <li>Insomnia</li>
              <li>NPM</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>

        <div className="tech-card">
          <h4 className="tech-head">Logical Practices:</h4>
          <div className="language-cont">
            <ul className="ul-class">
              <li className="tech-logo">
                <GiBrain fontSize={"3em"} />
              </li>
              <li>State</li>
              <li>OOP</li>
              <li>ORM</li>
              <li>MVC</li>
              <li>PWA's</li>
              <li>Lighthouse</li>
            </ul>
          </div>
        </div>

        <div className="tech-card">
          <h4 className="tech-head">CSS Frameworks</h4>
          <div className="language-cont">
            <ul className="ul-class">
              <li className="tech-logo">
                <FaPaintBrush fontSize={"3em"} />
              </li>
              <li>Bootstrap</li>
              <li>Bulma</li>
              <li>AntD</li>
              <li>Tailwind</li>
              <li>Sass</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Technologies;

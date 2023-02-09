import React from "react";
import { Link } from 'react-router-dom';

import crownImg from "../../assets/portfolio_img/crown.jpg";
import workingImg from "../../assets/personal_proj_img/working-ani.jpg";
import studyingImg from "../../assets/async_img/studying.jpg";
import climbingImg from "../../assets/challenge_img/climbing.jpg";

const Portfolio = () => {
  return (
    <div>
        <div className="main-port-container">
            <div className="photo-container">
                <h2 className="work-style-head">Featured Projects</h2>
                <Link to='/featured' className="photo-link">
                    <img src={crownImg}
                    className='port-img-link'
                    alt="crown"
                    />
                </Link>
            </div>

            <div className="photo-container">
                <h2 className="work-style-head">Personal Projects</h2>
                <Link to='/personal-projects' className="photo-link">
                    <img src={workingImg}
                    className='port-img-link'
                    alt="working on computer"
                    />
                </Link>
            </div>

            <div className="photo-container">
                <h2 className="work-style-head">Bootcamp Challenges</h2>
                <Link to='/challenges' className="photo-link">
                    <img src={climbingImg}
                    className='port-img-link'
                    alt="cartoon climbing"
                    />
                </Link>
            </div>

            <div className="photo-container">
                <h2 className="work-style-head">Async Learning</h2>
                <Link to='/async' className="photo-link">
                    <img src={studyingImg}
                    className='port-img-link'
                    alt="person studying"
                    />
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Portfolio;

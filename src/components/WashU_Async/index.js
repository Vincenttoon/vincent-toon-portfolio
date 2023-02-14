import React from "react";
import { Link } from 'react-router-dom';

import shopImg from "../../assets/async_img/shop.jpg";
import rpgImg from "../../assets/async_img/jest-rpg.jpg";
import pizzaImg from "../../assets/async_img/pizza.jpg";
import voteImg from "../../assets/async_img/vote.jpg";
import zooImg from "../../assets/async_img/zookeeper.jpg";

const Async = () => {
  return (
    <div className="individ-container">
      <h2 className="featured-title">Asynchronous Coursework</h2>
      <p className="info-for-link">
        {" "}
        (Please click the image to be redirected to this projects github page)
      </p>
      <div className="flex-column project-cont">
        <h3 className="f-proj-title-2">Shop Shop</h3>
        <div className="justify-space-around proj-info-cont-2">
          <p className="f-proj-desc-2 mt-5">
            React project focusing on learning State. This application is a mock
            web store that uses Stripe API to accept payments for items (test
            mode).
          </p>
          <a href="https://github.com/Vincenttoon/shop-shop">
            <img
              src={shopImg}
              className="port-img"
              alt="cartoon storefront"
            />
          </a>
        </div>
      </div>

      <div className="flex-column project-cont-1">
        <h3 className="f-proj-title">Jest Another RPG</h3>
        <div className="justify-space-around proj-info-cont-2">
          <p className="f-proj-desc-2 mt-5">
            Javascript Application that uses a Test based framework (JEST) and
            Object Oriented Programming to test functionality of code and
            confirm it's validity. This application creates a CLI Role Playing
            Game for the user to battle computer's and make decisions to win the
            game.
          </p>
          <a href="https://github.com/Vincenttoon/jest-another-RPG">
            <img
              src={rpgImg}
              className="port-img"
              alt="cartoon warrior"
            />
          </a>
        </div>
      </div>

      <div className="flex-column project-cont">
        <h3 className="f-proj-title-2">Pizza Hunt</h3>
        <div className="justify-space-around proj-info-cont-2">
          <p className="f-proj-desc-2 mt-5">
            MVC project to create pizza recipes for the user.
          </p>
          <a href="https://github.com/Vincenttoon/pizza-hunt">
            <img
              src={pizzaImg}
              className="port-img"
              alt="happy pizza"
            />
          </a>
        </div>
      </div>

      <div className="flex-column project-cont-1">
        <h3 className="f-proj-title">U Develop It</h3>
        <div className="justify-space-around proj-info-cont-2">
          <p className="f-proj-desc-2 mt-5">
            First crack at a SQL back end application. This application shows
            candidates for a potential tech company election and if they are
            connected to the industry. Async coursework
          </p>
          <a href="https://github.com/Vincenttoon/u-develop-it">
            <img
              src={voteImg}
              className="port-img"
              alt="hand casting a vote"
            />
          </a>
        </div>
      </div>

      <div className="flex-column project-cont">
        <h3 className="f-proj-title-2">Zoo Keeper</h3>
        <div className="justify-space-around proj-info-cont-2">
          <p className="f-proj-desc-2 mt-5">
            Introduction to Express.js backend application and usage. This
            application is for a Zoo's Employees to add animals and employees to
            their database. User's are able to several search keys.
          </p>
          <a href="https://github.com/Vincenttoon/zoo-keeper-of-the-crypt">
            <img
              src={zooImg}
              className="port-img"
              alt="zoo keeper logo"
            />
          </a>
        </div>
      </div>

      <div className="more-info-cont">
        <h4 className="more-info-head">
          {" "}
          For more projects, head back to <Link className="text-link" to="/portfolio"> Portfolio </Link> page or explore my personal Github profile:
        </h4>
        <a href="https://github.com/Vincenttoon">
          <h5 className="more-info-link">https://github.com/Vincenttoon</h5>
        </a>
      </div>
    </div>
  );
};

export default Async;

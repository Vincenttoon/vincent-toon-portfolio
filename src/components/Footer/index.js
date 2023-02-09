import React from "react";
// import icons from react-icons
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function FooterComponent() {

  return (
    <div className="footer-div">
      {/* <div>
        <h2 className="foot-h2">Vince Toon</h2>
       
      </div> */}
      <div className="icon-list">
        <div>
          <ul>
            <a href="https://github.com/Vincenttoon">
              <li className="icon-li">
                {/* use imported icons as components */}
                <FaGithub fontSize={'2em'}/>
              </li>
            </a>
            <a href="https://www.linkedin.com/in/vincent-toon-4954b6162/">
              <li className="icon-li">
                <FaLinkedinIn fontSize={'2em'} />
              </li>
            </a>
            <a href="https://www.facebook.com/vince.toon">
              <li className="icon-li">
                <FaFacebook fontSize={'2em'}/>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;

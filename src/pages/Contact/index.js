import { React, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import vinnyGuitars from '../../assets/portfolio_img/guitar_me.jpg'

import CheckIcon from "@mui/icons-material/Check";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Contact = () => {
    const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const form = useRef();
  const resetForm = () => {
    form.current.reset();
  };

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const validateEmail = (email) => {
    if (!emailRegex.test(email)) {
      setEmailError(true);
      return false;
    }
    setEmailError(false);
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const email = form.current.elements.user_email.value;
    if (!validateEmail(email)) return;
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          resetForm();
          setEmailSent(true);
          setTimeout(() => {
            setEmailSent(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-container">
      {/* <div className="form-img-container">
        <img src={vinnyGuitars} className="vinny-guitar" alt="Vincent absolutely shredding on guitar"></img>
      </div> */}
      <div className="email-form">
        <h4 className="contact-title"> Contact Vincent Toon </h4>
        <form
          ref={form}
          onSubmit={(e) => {
            sendEmail(e);
          }}
        >
          <label>Name *</label>
          <input type="text" name="user_name" required />
          <label>Email *</label>
          <input type="email" name="user_email" required />
          <label>Message *</label>
          <textarea name="message" required />
          <input type="submit" value="SEND" className="contact-btn" />
        </form>
        {emailError && (
          <div className="email-message fade">
            <ErrorOutlineIcon className="email-error" /> Please enter a valid
            email address.
          </div>
        )}
        {emailSent && (
          <div className="email-message fade">
            <CheckIcon className="email-checkmark" /> Email sent!
          </div>
        )}
      </div>
      <div className="form-img-container">
        <img src={vinnyGuitars} className="vinny-guitar" alt="Vincent absolutely shredding on guitar"></img>
      </div>
    </div>
  );
};

export default Contact;
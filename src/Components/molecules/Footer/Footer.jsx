import React from "react";
import IconButton from "../../atoms/IconButton/IconButton";
import tw from "../../../Public/twitter.svg";
import fb from "../../../Public/facebook.svg";
import li from "../../../Public/linkedin.svg";
import logo from "../../../Public/logo.png"
const Footer = () => {
  return (
    <div className="footer">
      <a href="#header">
        <img className="footer__img" src={logo}/>
      </a>
      <div className="footer__groupBtn">
        <IconButton content={tw} />
        <IconButton content={fb} />
        <IconButton content={li} />
      </div>
      <p className="footer__text-mobile">Just type what's on your mind and we'll </p>
      <p className="footer__text-desk">Copywright 2020 Bella Onojie.com </p>
    </div>
  );
};

export default Footer;

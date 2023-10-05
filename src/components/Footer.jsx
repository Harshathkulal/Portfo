import React from "react";
import github from "/src/assets/github.svg";
import linkdin from "/src/assets/linkedin.svg";
import Xlogo from "/src/assets/twitter-x.svg";
import instagram from "/src/assets/instagram.svg";

function Footer() {
  return (
    <div className="d-flex justify-content-around flex-wrap align-item-center">
      <p>Designed and Developed by Harshath_Kulal</p>

      <p>Copyrights © 2023 HK</p>

      <div className="d-flex m-2 gap-5">
        <a href="https://github.com/Harshathkulal">
          <img src={github} alt="My Image" />
        </a>
        <a href="https://www.linkedin.com/in/harshath-kulal-ba078b209/">
          <img src={linkdin} alt="My Image" />
        </a>
        <a href="https://twitter.com/HarshathmKulal">
          <img src={Xlogo} alt="My Image" />
        </a>
        <a href="https://www.instagram.com/harshath_kulal/">
          <img src={instagram} alt="My Image" />
        </a>
      </div>
    </div>
  );
}

export default Footer;

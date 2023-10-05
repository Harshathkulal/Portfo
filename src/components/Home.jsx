import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Xlogo from "/src/assets/twitter-x.svg";
import instagram from "/src/assets/instagram.svg";

function Home() {
  return (
    <div className="d-flex justify-content-around m-4 flex-wrap gap-4">
      <div className="d-flex flex-column justify-content-center text-center">
        <p>Hi There!</p>
        <h1 className="fw-bold">I'M HARSHATH M KULAL</h1>
        <p className="fw-bold">Full Stack Developer</p>
        <div>
          <a className="m-4" href="https://twitter.com/HarshathmKulal">
            <img src={Xlogo} alt="My Image" />
          </a>
          <a className="m-4" href="https://www.instagram.com/harshath_kulal/">
            <img src={instagram} alt="My Image" />
          </a>
        </div>
      </div>
      <div className="">
        <img
          src="/src/assets/home-main.svg"
          alt="Description of the image"
          className="img-fluid"
        />
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import webdev from "/src/assets/webdev.svg";

function About() {
  return (
    <div className="text-center" id="About">
      <div>
        <h1>About Me</h1>
        <p>Introduction</p>
      </div>

      <div className="d-flex justify-content-center flex-wrap-reverse">
        <div className="">
          <img
            src={webdev}
            alt="Description of the image"
            className="img-fluid"
          />
        </div>

        <div>
          <div className="d-flex flex-grow-1 rounded justify-content-center align-item-center">
            <p className="m-4">
              Hello, I'm <strong>Harshath</strong> from
              Karnataka,India.
              <br />
              A passionate Full Stack Developer excited to embark on a journey in the dynamic world of web development.
              <br />
              <br />My skills and knowledge lies in leveraging React, Express, Node.js and MongoDb to build Scalable and feature-rich application
              <br /> With a Solid foundation in frontend, I Bring a holistic approach to web development with intention to learn day by day.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default About;

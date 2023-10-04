import React from "react";

function About() {
  return (
    <div className="text-center" id="About">
      <div>
        <h1>About Me</h1>
        <p>Introduction</p>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-around m-4 flex-wrap gap-4">
          <img
            src="/src/assets/webdev.svg"
            alt="Description of the image"
            className="img-fluid"
          />
        </div>

        <div className="d-flex border flex-grow-1 rounded justify-content-center align-item-center">
          <p>I am A passiaonate Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
}

export default About;

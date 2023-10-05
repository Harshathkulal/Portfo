import React from "react";

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
            src="/src/assets/webdev.svg"
            alt="Description of the image"
            className="img-fluid"
          />
        </div>

        <div>
          <div className="d-flex flex-grow-1 rounded justify-content-center align-item-center">
            <p className="m-4">
              Hi All, I am{" "}
              <span className="text-primary">Harshath M Kulal</span> from
              Karnataka,India.
              <br />
              Aspiring Full Stack Developer with a passion for creating
              innovative web applications and software solutions
              <br />
              <br />I have 1.5 Years of Experience in IT, Currently Working in
              TCS(System Engineer)
              <br /> As Manual Tester,Functinal Testing Etc..
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default About;

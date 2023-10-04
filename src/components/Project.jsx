import React from "react";
import github from "/src/assets/github.svg";
import box from "/src/assets/box-arrow-in-up-right.svg";

function Project() {
  return (
    <div id="Project">
      <div className="text-center">
        <h1 className="m-2">Projects</h1>
        <p className="m-2">Personal Projects</p>
      </div>

      <div className="d-flex justify-content-around flex-wrap m-4 gap-5">
        <div className="border rounded-4 text-center">
          <h6>Todo App</h6>
          <img
            src="/src/assets/Todo-App1.PNG"
            alt="Description of the image"
            className="img-fluid custom-img rounded m-1"
          />
          <div className="d-flex m-2 justify-content-around ">
            <a
              href="#skills"
              className="nav-link d-flex align-items-center rounded-pill border p-2"
            >
              Code
              <img src={github} alt="My Image" />
            </a>

            <a
              href="#"
              className="nav-link d-flex align-items-center rounded-pill border p-2"
            >
              Demo
              <img src={box} alt="My Image" />
            </a>
          </div>
        </div>

        <div className="border rounded-4 text-center">
          <h6>Weather-App</h6>
          <img
            src="/src/assets/Weather_App.PNG"
            alt="Description of the image"
            className="img-fluid custom-img rounded m-1"
          />
          <div className="d-flex m-2 justify-content-around ">
            <a
              href="#"
              className="nav-link d-flex align-items-center rounded-pill border p-2"
            >
              Code
              <img src={github} alt="My Image" />
            </a>

            <a
              href="#"
              className="nav-link d-flex align-items-center rounded-pill border p-2"
            >
              Demo
              <img src={box} alt="My Image" />
            </a>
          </div>
        </div>

        <div className="border rounded-4 text-center">
          <h6>News-App</h6>
          <img
            src="/src/assets/New-App.PNG"
            alt="Description of the image"
            className="img-fluid custom-img rounded m-1"
          />
          <div className="d-flex m-2 justify-content-around ">
            <a
              href="#"
              className="nav-link d-flex align-items-center rounded-pill border p-2"
            >
              Code
              <img src={github} alt="My Image" />
            </a>

            <a
              href="#"
              className="nav-link d-flex align-items-center rounded-pill border p-2"
            >
              Demo
              <img src={box} alt="My Image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

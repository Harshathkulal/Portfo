import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import github from "/src/assets/github.svg";
import linkdin from "/src/assets/linkedin.svg";
import menu from "/src/assets/list.svg";
import cancel from "/src/assets/x.svg";

function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="nav-bar">
        <header className="d-flex flex-wrap justify-content-between border-bottom">
          <div className="d-flex">
            <img
              src="/src/assets/Harshath.PNG"
              alt="H"
              width="32"
              height="32"
              className="rounded-circle m-2"
            />
            <div className="fs-4 link-body-emphasis mt-2">Harshath_Kulal</div>
          </div>

          <div className="d-flex d-none d-lg-block">
            <ul className="nav m-2 mx-4 ">
              <li className="nav-item">
                <a href="#" className="nav-link text-black">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#About" className="nav-link text-black">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#Skill" className="nav-link text-black">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#Project" className="nav-link text-black">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#Contact" className="nav-link text-black">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex gap-4 m-2">
            <div className="mt-1">
              <a href="https://github.com/Harshathkulal">
                <img src={github} alt="My Image" />
              </a>
            </div>

            <div className="mt-1">
              <a href="https://www.linkedin.com/in/harshath-kulal-ba078b209/">
                <img src={linkdin} alt="My Image" />
              </a>
            </div>
          </div>

          <div className="d-lg-none">
            <div className="m-2" onClick={handleNav}>
              {nav ? (
                <img src={menu} alt="My Image" />
              ) : (
                <img src={cancel} alt="My Image" />
              )}
            </div>
          </div>

          <div className="d-lg-none">
            <div className="d-lg-none">
              <ul className={nav ? "d-none" : "d-flex nav"}>
                <li className="nav-item">
                  <a href="#About" className="nav-link text-black">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#Skill" className="nav-link text-black">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#Project" className="nav-link text-black">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#Contact" className="nav-link text-black">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;

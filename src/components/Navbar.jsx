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
              src="https://github.com/mdo.png"
              alt="mdo"
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
            <div className="">
              <img src={github} alt="My Image" />
            </div>

            <div className="">
              <img src={linkdin} alt="My Image" />
            </div>
          </div>

          <div className="d-lg-none">
            <div onClick={handleNav}>
              {nav ? (
                <div className="m-2">
                  <img src={cancel} alt="My Image" />
                </div>
              ) : (
                <div className="m-2">
                  <img src={menu} alt="My Image" />
                </div>
              )}
            </div>
          </div>

          <div className="d-lg-none">
            <div>
              <ul className={nav ? "d-flex nav" : "d-none"}>
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

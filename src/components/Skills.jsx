import React from "react";
import html from "/src/assets/HTML.png";
import css from "/src/assets/CSS.png";
import js from "/src/assets/JS.png";
import bootstrap from "/src/assets/Bootstrap.png";
import react from "/src/assets/React.png";
import tailwind from "/src/assets/Tailwind.png";
import python from "/src/assets/Python.png";
import node from "/src/assets/Node.png";
import express from "/src/assets/Express.png";
import mongodb from "/src/assets/MongoDB.png";
import django from "/src/assets/Django.png";
import git from "/src/assets/Git.png";

function Skills() {
  return (
    <div className="text-center" id="Skill">
      <h1 className="m-2">Skills</h1>
      <p className="m-2">My Technical Skills</p>

      <div className="d-flex justify-content-around flex-wrap gap-4 m-4">
        <div className="border rounded-4">
          <p>Frontend</p>
          <div className="d-flex justify-content-around gap-5">
            <div className="d-flex gap-2 flex-wrap justify-content-between flex-column m-1">
              <div className="d-flex">
                <img
                  src={html}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">HTML</p>
              </div>

              <div className="d-flex">
                <img
                  src={css}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">CSS</p>
              </div>

              <div className="d-flex">
                <img
                  src={js}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">JavaScript</p>
              </div>
            </div>

            <div className="d-flex gap-2 flex-wrap justify-content-between flex-column m-1">
              <div className="d-flex">
                <img
                  src={bootstrap}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">Bootstrap</p>
              </div>

              <div className="d-flex">
                <img
                  src={react}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">React</p>
              </div>

              <div className="d-flex">
                <img
                  src={tailwind}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">Tailwind</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-4">
          <p>Backend</p>
          <div className="d-flex justify-content-around gap-5">
            <div className="d-flex gap-2 flex-wrap justify-content-between flex-column m-1">
              <div className="d-flex">
                <img
                  src={python}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">Python</p>
              </div>

              <div className="d-flex">
                <img
                  src={node}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">Node</p>
              </div>

              <div className="d-flex">
                <img
                  src={express}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">Express</p>
              </div>
            </div>

            <div className="d-flex gap-2 flex-wrap justify-content-between flex-column m-1">
              <div className="d-flex">
                <img
                  src={mongodb}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">MongoDB</p>
              </div>

              <div className="d-flex">
                <img
                  src={django}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">Django</p>
              </div>

              <div className="d-flex">
                <img
                  src={git}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

import React from "react";

function Skills() {
  return (
    <div className="text-center" id="Skill">
      <h1 className="m-2">Skills</h1>
      <p className="m-2">My Technical Skills</p>

      <div className="d-flex justify-content-around flex-wrap gap-4 m-4">
        <div className="border rounded-4">
          <p>Frontend</p>
          <div className="d-flex justify-content-around gap-5">
            <div class="d-flex gap-2 flex-wrap justify-content-between flex-column m-1">
              <div className="d-flex">
                <img
                  src="/src/assets/HTML.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">HTML</p>
              </div>

              <div className="d-flex">
                <img
                  src="/src/assets/CSS.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">CSS</p>
              </div>

              <div className="d-flex">
                <img
                  src="/src/assets/JS.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">JavaScript</p>
              </div>
            </div>

            <div class="d-flex gap-2 flex-wrap justify-content-between flex-column m-1">
              <div className="d-flex">
                <img
                  src="/src/assets/Bootstrap.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">Bootstrap</p>
              </div>

              <div className="d-flex">
                <img
                  src="/src/assets/React.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">React</p>
              </div>

              <div className="d-flex">
                <img
                  src="/src/assets/Tailwind.png"
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
            <div class="d-flex gap-2 flex-wrap justify-content-between flex-column m-1">
              <div className="d-flex">
                <img
                  src="/src/assets/Python.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">Python</p>
              </div>

              <div className="d-flex">
                <img
                  src="/src/assets/Node.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">Node</p>
              </div>

              <div className="d-flex">
                <img
                  src="/src/assets/Express.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">Express</p>
              </div>
            </div>

            <div class="d-flex gap-2 flex-wrap justify-content-between flex-column m-1">
              <div className="d-flex">
                <img
                  src="/src/assets/MongoDB.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">MongoDB</p>
              </div>

              <div className="d-flex">
                <img
                  src="/src/assets/Django.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle m-2"
                />
                <p className="mt-2">Django</p>
              </div>

              <div className="d-flex">
                <img
                  src="/src/assets/Git.png"
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

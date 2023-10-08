import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import resume from "/src/assets/Resume_Harshath.pdf"

function Resume() {
  return (
    <div className="text-center" id="Resume">
      <h1 className="mt-5">Resume</h1>

      <div className="container mt-5">
        <a
          href={resume} // Replace with the actual path to your PDF file
          download="Resume_Harshath.pdf" // Specify the desired filename for the downloaded PDF
          className="btn btn-lg btn-dark"
        >
          Download PDF
        </a>
      </div>
      <div className="m-4">
        <small className="text-body-secondary">Thank You!.</small>
      </div>

      <hr className="my-4" />
    </div>
  );
}

export default Resume;

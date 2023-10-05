import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <div className="text-center" id="Contact">
      <h1 className="mt-5">Contact Me</h1>

      <div className="borde container rounded-4">
        <div className="col-md-10 mx-auto col-lg-5 m-4">
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <div className="form-floating mb-3">
              <input
                type="name"
                className="form-control"
                id="floatingInput"
                placeholder="Name"
              />
              <label for="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="name"
                className="form-control"
                id="floatingPassword"
                placeholder="Drop a Message"
              />
              <label for="floatingPassword"> Drop a Message</label>
            </div>

            <button className="btn btn-lg btn-dark" type="submit">
              Send <img src="/src/assets/send.svg" alt="Send" />
            </button>
            <hr className="my-4" />
            <small className="text-body-secondary">Thank You!.</small>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="d-flex justify-content-around m-4 flex-wrap gap-4">
        <div className="d-flex flex-column justify-content-center text-center">
            <p>Hi There!</p>
            <h2>I'M HARSHATH M KULAL</h2>
            <p>Full Stack Developer</p>
            </div>
        <div className="">
        <img src="/src/assets/home-main.svg" alt="Description of the image" className="img-fluid" />
        </div>
    </div>
  )
}

export default Home

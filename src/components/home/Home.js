import React from "react";
import { Link } from "react-scroll";
import profileImg from "../../assets/my_photo.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="homescreen">
      <div className="homescreen-container">
        <div className="heading">
          <p>👋 Hi, I am Nayana N M.</p>
          <h1>Front-End Developer</h1>
          <p>
            A self-motivated Developer who is passionate about designing and
            developing interactive applications that provide an exceptional user
            experience.
          </p>
          <div className="contact-links">
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="contactbtn"
            >
              My work
            </Link>
            <a
<<<<<<< HEAD
              href="https://drive.google.com/file/d/1DvyqQ3WIjf75ya00MrHkWmN0Zjv5u5H_/view?usp=sharing"
=======
              href="https://drive.google.com/file/d/1fHxNyo7WggJAeuNzQe0QOPCw0yK4VX3V/view?usp=sharing"
>>>>>>> 8a024f3ae40b97a625633a6ef8dbdf5894a52fa0
              target="_blank"
              rel="noreferrer"
              className="resumeBtn"
            >
              My Resume
            </a>
          </div>
        </div>
        <div className="profile">
          <img src={profileImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

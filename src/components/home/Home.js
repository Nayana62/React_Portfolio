import React, { useEffect } from "react";
import { Link } from "react-scroll";
import profileImg from "../../assets/my_photo.jpg";
import "./Home.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="homescreen">
      <div data-aos="fade-up" className="homescreen-container">
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
              href="https://drive.google.com/file/d/1_qLFsnghoaO_AKq2VSLKDD6eIUfwJhbG/view?usp=sharing"
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

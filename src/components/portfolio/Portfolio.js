import React from "react";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="Projects">
      <div className="projects-container">
        <h1>Portfolio</h1>
        <div className="projects">
          <div className="container">
            <div className="project-links" id="youtube">
              <div className="social-links">
                <a
                  href="https://github.com/Nayana62/youtube_clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                  <span>
                    <BsGithub />
                  </span>
                </a>
                <a
                  href="https://youtube-clone-nayana62.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Preview
                  <span className="arroup">
                    <BsBoxArrowUpRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="details">
              <h2>Youtube Clone</h2>
              <p>
                YouTube Clone project featuring a user interface mirroring
                YouTube for familiarity and a fully responsive design. To
                enhance user experience, Implemented Shimmer UI and integrated
                infinite scrolling for seamless navigation. The optimized search
                feature provides live API suggestions, debouncing for API call
                management, and caching using Redux Toolkit. The project also
                includes an N-level comment system similar to Reddit, a live
                chat feature with API polling, and controlled chat size to
                prevent freezing.
              </p>

              <p>
                <span>Tech Stack: </span>
                React, Tailwind CSS, redux-toolkit, react-router-dom, and the
                YouTube API
              </p>
            </div>
          </div>
          <div className="container">
            <div className="details">
              <h2>Movie Search App</h2>
              <p>
                The Movie Search App is a React-based web application seamlessly
                integrated with the TMDB API, offering users an intuitive
                platform to search for movies. With a clean interface, the app
                presents at least 10 search results at a time, complete with
                titles and posters. Users can select a movie from the results to
                access additional details such as overview, release date, and
                average rating.
              </p>
              <p>
                <span>Tech Stack: </span>
                React, Tailwind CSS, redux-toolkit, react-router-dom,
                redux-persist
              </p>
            </div>
            <div className="project-links" id="movie">
              <div className="social-links">
                <a
                  href="https://github.com/Nayana62/Movie_Search_App"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                  <span>
                    <BsGithub />
                  </span>
                </a>
                <a
                  href="https://movie-search-app-nayana62.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Preview
                  <span className="arroup">
                    <BsBoxArrowUpRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="project-links" id="amazon">
              <div className="social-links">
                <a
                  href="https://github.com/Nayana62/amazon_clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                  <span>
                    <BsGithub />
                  </span>
                </a>
                <a
                  href="https://amazon-clone-nayana62.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Preview
                  <span className="arroup">
                    <BsBoxArrowUpRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="details">
              <h2>Amazon Clone App</h2>
              <p>
                Check out the Amazon Clone app – it's like a copy of the Amazon
                App but made with ReactJS and stunning UI using Tailwind CSS.
                It's got simple login using Firebase and uses the Context API to
                keep things organized. Plus, I have used the Fake Store API to
                show all the cool products. You can add or remove items from
                your basket and check what's inside.
              </p>
              <p>
                <span>Tech Stack: </span>
                React, Tailwind CSS, react-router-dom, context-api,
                fakestore-api, firebase, firebase-auth,
              </p>
            </div>
          </div>
          <div className="container">
            <div className="details">
              <h2>LinkedIn Clone</h2>
              <p>
                Introducing the LinkedIn Clone App, a React-Redux powered
                platform with Firebase as the backend, offering users a familiar
                and engaging experience. Utilizing Firebase for user
                authentication, users can securely log in to the app. The app
                mirrors LinkedIn's interface, allowing users to post updates and
                view posts from others, fostering a professional and interactive
                environment.
              </p>
              <p>
                <span>Tech Stack: </span>
                React, Redux, react-router-dom, Firebase
              </p>
            </div>
            <div className="project-links" id="linkedIn">
              <div className="social-links">
                <a
                  href="https://github.com/Nayana62/LinkedIn-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                  <span>
                    <BsGithub />
                  </span>
                </a>
                <a
                  href="https://linked-in-clone-nayana62.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Preview
                  <span className="arroup">
                    <BsBoxArrowUpRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

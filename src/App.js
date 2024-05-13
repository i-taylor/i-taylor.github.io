import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.css";
import React, { useRef, useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <div
        className={`mode-toggle ${darkMode ? "dark-mode" : ""}`}
        onClick={toggleMode}
      >
        {darkMode ? (
          <i className="fas fa-sun"></i>
        ) : (
          <i className="fas fa-moon"></i>
        )}
      </div>
      <div className={`grid-container ${darkMode ? "dark-mode" : ""}`}>
        <div className="left">
          <h1>Isaac Taylor</h1>
          <h2>Software Developer, Innovator, and Life-long Learner</h2>
          <h3>
            I'm Isaac Taylor, a motivated individual with a strong academic
            background and a keen interest in computer science and cognitive
            science. Currently pursuing a Bachelor of Science with a double
            major in Computer Science and Cognitive Science at the University of
            Michigan.
            <br />
            <br />
            In my role as a Learning Experience Design Fellow at the Center for
            Academic Innovation in Ann Arbor, MI, I've had the opportunity to
            contribute significantly to the enhancement of the Web Design for
            Everybody course offered through the University of Michigan's online
            learning platform. From organizing and building the online course to
            managing database upkeep and testing virtual reality experiences,
            I've been deeply involved in the course's development process.
            <br />
            <br />
            Additionally, I've explored and beta-tested new data visual tools
            and served as a UX designer for a UMICH faculty course. My
            proficiency extends beyond academic and professional realms—I've
            also worked on various projects that showcase my technical skills.
            From implementing queue-based algorithms in projects like Zombie
            Tower Defence to utilizing machine learning in Piazza ML, I've
            demonstrated my ability to tackle complex problems with creativity
            and innovation. Projects like Among Us have allowed me to refine my
            skills in optimization and pathfinding algorithms.
          </h3>
        </div>
        <div className="right">
          <h2>Experience</h2>
          <div className="summary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
            <br />
            <br />
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            <br />
            <br />
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <br />
          <br />
          <h2>Projects</h2>
          <div class="glass-card">
            <img src="your-image-url.jpg" alt=""></img>
            <h3>Project Title</h3>
            <p>
              Summary of the project goes here. It can be a brief description of
              what the project is about.
            </p>
          </div>
          <br />
          <br />
          <div class="glass-card">
            <img src="your-image-url.jpg" alt=""></img>
            <h3>Project Title</h3>
            <p>
              Summary of the project goes here. It can be a brief description of
              what the project is about.
            </p>
          </div>
          <br />
          <br />
          <div class="glass-card">
            <img src="your-image-url.jpg" alt=""></img>
            <h3>Project Title</h3>
            <p>
              Summary of the project goes here. It can be a brief description of
              what the project is about.
            </p>
          </div>
          <br />
          <br />
          <div class="glass-card">
            <img src="your-image-url.jpg" alt=""></img>
            <h3>Project Title</h3>
            <p>
              Summary of the project goes here. It can be a brief description of
              what the project is about.
            </p>
          </div>
          <br />
          <br />
          <div class="glass-card">
            <img src="your-image-url.jpg" alt=""></img>
            <h3>Project Title</h3>
            <p>
              Summary of the project goes here. It can be a brief description of
              what the project is about.
            </p>
          </div>
          <br />
          <br />

          <div className="project"></div>
        </div>
      </div>
    </div>
  );
}

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
          <br />
          <div className="summary">
          <h3>Learning Experience Design Fellow</h3>
          <h4>May 2023 - May 2024</h4>
          <p>During my fellowship, I contributed to the development and enhancement of the "Web Design for Everybody" course offered through the University of Michigan's online learning platform. This included organizing and aiding in the construction of the course on Coursera, managing database maintenance for course materials, PowerPoints, and readings, and ensuring content currency throughout iterations. Additionally, I conducted thorough testing of virtual reality experiences, providing guidance on error correction and fostering discussions for improvement. I also explored and beta-tested new data visualization tools for the Learning Experience Design (LXD) team, providing training and support to team members. Furthermore, I served as a UX designer for a UMICH faculty course, participating in the creation of mockups, wireframes, and HTML production. Additionally, I was responsible for creating and managing Canvas Courses for graduate classes at the University of Michigan.
          </p>
          </div>
         
          <h3>Course Operations Fellow</h3>
          <h4>May 2024 - Current</h4>
          
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
          <div className="button-container">
        <a
          href="https://www.linkedin.com/in/isaac-tay/"
          className="linkedin-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/i-taylor"
          className="github-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
        </div>

    </div>
  </div>
    
  );
}

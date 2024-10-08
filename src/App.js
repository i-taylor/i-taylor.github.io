import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';


import React, {  useState } from "react";
import ReactGA from 'react-ga4';



export default function App() {
  ReactGA.initialize('G-ZCB5HME2E8');
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
          <h1 style={{ marginLeft: "3%" }}>Isaac Taylor</h1>
          <TypeAnimation className="typePersonality"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Software developer',
            3000, 
            'Student',
            3000,
            'Innovator',
            3000,
            'Designer',
            3000
          ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em' }}
      repeat={Infinity}
    />
          <ul className="navigation">

            <li>
              <Link to="about" smooth={true} duration={500} containerId="scrollableDiv" className="nav-items">
                About
              </Link>
            </li>
            <li>
              <Link to="experience" smooth={true} duration={500} containerId="scrollableDiv" className="nav-items">
                Experience
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} containerId="scrollableDiv" className="nav-items">
                Projects
              </Link>
            </li>
            {/* <li className="nav-items"><a href= "#about">About</a>  </li>
            <li className="nav-items" > <a href= "#experience">Experience</a> </li>
            <li className="nav-items"> <a href= "#projects">Projects</a> </li> */}

          </ul>
        </div>
        <div className="right" id="scrollableDiv">
        <h2 id="about">About</h2>  
        <div className="summary">
        <p>I'm Isaac 👋, I'm an exceptionally motivated student with a strong academic
            background and a keen interest in the intersection of computer science and cognitive
            science, advancing accessibility, computer vision and AI, and making cool things. I'm currently pursuing a Bachelors of Science with a double
            major in both Computer Science and Cognitive Science at the University of
            Michigan.</p>

        </div>

        <h2 id="experience">Experience -  
          <a 
            href="https://drive.google.com/file/d/12tXrb8a6JFbpSzl_TV_-dALdG5EdQCXn/view?usp=sharing" 
            target="_blank" 
            rel="noreferrer">
              Resume
          </a>
        </h2>
         
         <div className="experience"> 
            <h3>Course Operations Fellow</h3>
            <h4>May 2024 - Current</h4>
            <p>I currently assist in the production and maintenance of 
              UMICH online courses. With a focus in upcoming AI and ML 
              mini-courses, I help to ensure courses are up to standards, 
              are free of errors, and continue to keep information updated. 
              I also assist in the process of new iterations, which involve 
              a cross-functional team - including faculty and professors, 
              to iterate and update course material of previously released 
              courses.
            </p>
          </div>
          <div className="experience" >
            <h3>Learning Experience Design Fellow</h3>
            <h4>May 2023 - May 2024</h4>
            <p>During my fellowship, I contributed to the development 
              and enhancement of the "Web Design for Everybody" course 
              offered through the University of Michigan's online learning 
              platform. This included organizing and aiding in the construction 
              of the course on Coursera, managing database maintenance for 
              course materials, PowerPoints, and readings, and ensuring 
              content currency throughout iterations. Additionally, I conducted 
              thorough testing of virtual reality experiences, providing 
              guidance on error correction and fostering discussions for 
              improvement. I also explored and beta-tested new data 
              visualization tools for the Learning Experience Design (LXD) team, 
              providing training and support to team members. Furthermore, I 
              served as a UX designer for a UMICH faculty course, participating 
              in the creation of mockups, wireframes, and HTML production. 
              Additionally, I was responsible for creating and managing Canvas 
              Courses for graduate classes at the University of Michigan.
            </p>
          </div>
          <h2 id="projects">Projects</h2>
          <div className="glass-card">
  <img src="downloadagain.png" alt="" />
  <div className="card-content">
    <h3>
      {/* <a 
        href="https://github.com/i-taylor/EECS-442-FINAL-PROJECT" 
        target="_blank" 
        rel="noreferrer">
        ASL Finger Spelling ML Classifier
      </a> */}
      ASL Finger Spelling ML Classifier
    </h3>
    <p>
      Developed an ASL Finger Spelling Recognition program using 
      machine learning techniques to facilitate real-time translation 
      of American Sign Language (ASL) gestures into written text. Custom 
      dataset creation, algorithm optimization, and emphasis on accessibility 
      underscored our commitment to inclusive communication solutions. The 
      Developed an ASL Finger Spelling Recognition program using machine 
      learning techniques to facilitate real-time translation of American 
      Sign Language (ASL) gestures into written text.
    </p>
  </div>
  <a 
    href="https://github.com/i-taylor/EECS-442-FINAL-PROJECT" 
    target="_blank" 
    rel="noreferrer" 
    className="github-icon"
  >
    <i className="fab fa-github"></i>
  </a>
</div>

          <br />
          <br />
          <div class="glass-card">
            <img src="Tomato.png" alt=""></img>
            <div><h3>
              {/* <a 
              href="https://github.com/i-taylor/BIOLOGY102_FINAL" 
              target="_blank" 
              rel="noreferrer">
                AI Tomato Disease Classifier
              </a> */}
              AI Tomato Disease Classifier

            </h3>
            <p>
            An artificial intelligence (AI) tool to identify and diagnose diseases 
            affecting tomato plants. By utilizing machine learning algorithms trained 
            on vast datasets of images depicting healthy and diseased tomato plants, 
            the classifier can accurately distinguish between different types of diseases, 
            including blight, leaf mold, early blight, and more.
            </p></div>
            <a 
              href="https://github.com/i-taylor/BIOLOGY102_FINAL" 
              target="_blank" 
              rel="noreferrer" 
              className="github-icon"
            >
              <i className="fab fa-github"></i>
            </a>
            
          </div>
          <br />
          <br />
          <div class="glass-card">
            <img src="logoforcard.png" alt=""></img>
            <div><h3>This website!</h3>
            <p>
              This website has been my biggest project lately as I teach myself 
              react, and touch up my css skills, and is still in progress, 
              if you see this - welcome! 
            </p></div>
            <a 
              href="https://github.com/i-taylor/i-taylor.github.io" 
              target="_blank" 
              rel="noreferrer" 
              className="github-icon"
            >
              <i className="fab fa-github"></i>
            </a>
            
          </div>
          <br />
          <br />
          <div class="glass-card">
            <img src="your-image-url.jpg" alt=""></img>
            <div>
            <h3>Project Title</h3>
            <p>
              Placeholder
            </p>
            </div>
          </div>
          <br />
          <br />
          <div class="glass-card">
            <img src="your-image-url.jpg" alt=""></img>
            <div>
            <h3>Project Title</h3>
            <p>
              Placeholder
            </p>
            </div>
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

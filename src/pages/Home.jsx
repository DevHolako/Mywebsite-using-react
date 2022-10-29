import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./../styles/Home.css";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Marouane</h2>
        <div className="prompt">
          <p>
            A full stack web developer with a passion for learning and creating.
          </p>
          <MailIcon />
          <LinkedInIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>HTML,CSS,ReactJS,BootStrap,JS</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>PHP,Laravel,MySQL,MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Java Script,Python,PHP</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

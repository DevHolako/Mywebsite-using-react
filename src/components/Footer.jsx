import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import "./../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://github.com/HolakoNoob"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/marouane-rguibi"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="mailto: rg.marouane@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <MailIcon />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Holako.tech</p>
    </div>
  );
}

export default Footer;

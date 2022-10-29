import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import "./../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/HolakoNoob">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/marouane-rguibi">
          <LinkedInIcon />
        </a>
        <a href="mailto: rg.marouane@gmail.com">
          <MailIcon />
        </a>
      </div>
      <p>&copy; 2022 holakonoob.tk</p>
    </div>
  );
}

export default Footer;

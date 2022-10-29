import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import "./../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHubIcon />
        <InstagramIcon />
        <LinkedInIcon />
        <TwitterIcon />
        <MailIcon />
      </div>
      <p>&copy; 2022 holakonoob.tk</p>
    </div>
  );
}

export default Footer;

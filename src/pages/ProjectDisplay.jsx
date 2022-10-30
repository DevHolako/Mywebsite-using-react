import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjecList";
import GitHubIcon from "@mui/icons-material/GitHub";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import "./../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="project pic" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="urls">
        <a href={project.url} target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href={project.demo} target="_blank" rel="noreferrer">
          <PlayCircleFilledWhiteIcon />
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;

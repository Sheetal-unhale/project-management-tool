import React from "react";
import ProjectList from "../components/ProjectList"; // Import ProjectList

const Projects = () => {
  return (
    <div className="page-content">
      <h1>Projects</h1>
      {/* <p>Here you can see all your projects.</p> */}
      
      {/* Display projects */}
      <ProjectList />
    </div>
  );
};

export default Projects;
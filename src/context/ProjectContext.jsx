import React, { createContext, useState } from "react";

// Create Context
export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    { name: "Project A", description: "Sample description", status: "In Progress" },
    { name: "Project B", description: "Another sample", status: "Completed" },
  ]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const deleteProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

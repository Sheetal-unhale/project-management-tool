import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  // Fetch projects from backend
  useEffect(() => {
    axios.get("http://localhost:5000/projects")
      .then((response) => {
        console.log("Fetched projects:", response.data);
        setProjects(response.data); // ✅ response.data is an array
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  // Add Project
  const addProject = async (project) => {
    try {
      const response = await axios.post("http://localhost:5000/projects", project);
      setProjects([...projects, response.data]); // ✅ Update with response data
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  // Delete Project
  const deleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/projects/${id}`);
      setProjects(projects.filter((project) => project._id !== id)); // ✅ Use _id
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };
   // **UPDATE Project**
   const updateProject = async (id, updatedData) => {
    try {
      const response = await axios.put(`/projects/${id}`, updatedData);
      const updatedProject = response.data;
  
      // Update projects state with new data
      setProjects((prevProjects) =>
        prevProjects.map((proj) => (proj._id === id ? updatedProject : proj))
      );
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, deleteProject, updateProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
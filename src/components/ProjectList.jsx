import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { Button, ListGroup } from "react-bootstrap";

const ProjectList = () => {
  const { projects, deleteProject } = useContext(ProjectContext);

  return (
    <ListGroup className="mt-3">
      {projects.map((project, index) => (
        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
          <div>
            <h5>{project.name}</h5>
            <p>{project.description}</p>
            <span className={`badge bg-${project.status === "Completed" ? "success" : "warning"}`}>
              {project.status}
            </span>
          </div>
          <Button variant="danger" onClick={() => deleteProject(index)}>
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ProjectList;

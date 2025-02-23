import React, { useState, useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { Form, Button } from "react-bootstrap";

const ProjectForm = () => {
  const { addProject } = useContext(ProjectContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [isAdded, setIsAdded] = useState(false); // 🔹 State for button text change

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;

    addProject({ name, description, status });

    // 🔹 Change button text
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000); // Reset after 2 seconds

    setName("");
    setDescription("");
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3 p-4 border rounded bg-white shadow">
      <h4 className="mb-3 text-primary">Add a New Project</h4>

      <Form.Group>
        <Form.Label>Project Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter project name"
          required
        />
      </Form.Group>

      <Form.Group className="mt-2">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter project description"
          required
        />
      </Form.Group>

      <Form.Group className="mt-2">
        <Form.Label>Status</Form.Label>
        <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </Form.Select>
      </Form.Group>

      {/* Dynamic Button Text */}
      <Button 
        type="submit" 
        className={`mt-3 ${isAdded ? "btn-success" : "btn-primary"}`}
      >
        {isAdded ? "Project Added ✅" : "Add Project"}
      </Button>
    </Form>
  );
};

export default ProjectForm;

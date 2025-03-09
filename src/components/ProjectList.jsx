import React, { useContext, useState } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { Button, Card, Row, Col, Container, Modal, Form } from "react-bootstrap";
import { FaTrash, FaEdit } from "react-icons/fa";

const ProjectList = () => { 
  const { projects, deleteProject, updateProject } = useContext(ProjectContext);
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleEditClick = (project) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  const handleSaveChanges = async () => {
    const updatedProject = {
      title: currentProject.title, 
      description: currentProject.description,
      status: currentProject.status,
    };

    await updateProject(currentProject._id, updatedProject);
    setShowModal(false); // Close modal after updating
  };

  return ( 
    <div className="projects-section">
      <Container>
        <h1 className="text-center mb-4 text-white">Your Projects</h1>
        <Row>
          {Array.isArray(projects) ? (
            projects.map((project, index) => (
              <Col key={index} md={6} lg={4}>
                <Card className="project-card">
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <span className={`badge bg-${project.status === "Completed" ? "success" : "warning"}`}>
                      {project.status}
                    </span>
                    <div className="project-actions">
                      <Button variant="outline-primary" onClick={() => handleEditClick(project)}>
                        <FaEdit /> Edit
                      </Button>
                      <Button variant="outline-danger" onClick={() => deleteProject(project._id)}>
                        <FaTrash /> Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center text-white">Loading projects...</p>
          )}
        </Row>
      </Container>

      {/* Edit Modal */}
      {currentProject && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Project Title</Form.Label>
                <Form.Control
                  type="text"
                  value={currentProject.title}
                  onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={currentProject.description}
                  onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Select
                  value={currentProject.status}
                  onChange={(e) => setCurrentProject({ ...currentProject, status: e.target.value })}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button variant="success" onClick={handleSaveChanges}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default ProjectList;
import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";
import { Container, Row, Col, Card } from "react-bootstrap";

const Dashboard = () => {
  const { projects, addProject, deleteProject } = useContext(ProjectContext);

  return (
    <div className="dashboard-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="dashboard-card">
              <Card.Body>
                <h2 className="dashboard-title">Dashboard</h2>
                <p className="dashboard-subtitle">Manage your projects efficiently</p>
                <ProjectForm addProject={addProject} />
                <ProjectList projects={projects} deleteProject={deleteProject} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;

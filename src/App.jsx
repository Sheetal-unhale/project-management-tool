import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import { ProjectProvider } from "./context/ProjectContext"; // Import the context provider

function App() {
  return (
    <ProjectProvider>
      <Router>
        <Navbar />
        <div className="centered-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </ProjectProvider>
  );
}

export default App;


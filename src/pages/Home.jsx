import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container-fluid home-container d-flex align-items-center justify-content-center">
      <div className="text-center home-content p-5">
        <h1 className="display-4 fw-bold text-uppercase">Welcome <br></br>to <br></br> Project Management Tool</h1>
        <p className="lead mt-3">
          Organize, track, and manage your projects efficiently with our powerful tool.
        </p>
        <Link to="/dashboard" className="btn btn-primary btn-lg mt-4">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Initialize Express App
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB (Using MongoDB Compass)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));
  
// Define Project Schema & Model
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String, // e.g., "Pending", "In Progress", "Completed"
});

const Project = mongoose.model("Project", projectSchema);

// Sample Route
app.get("/", (req, res) => {
  res.send("Welcome to the Project Management Tool Backend!");
});

// API: Get All Projects
app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects" });
  }
});

// API: Add a New Project
app.post("/projects", async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const newProject = new Project({ title, description, status });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: "Error adding project" });
  }
});

// API: Delete a Project
app.delete("/projects/:id", async (req, res) => {
  try {
    const deletedProject =
    await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting project" });
  }
});
   // API: Update a Project
   app.put("/projects/:id", async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { title, description, status },
      { new: true }
    );
    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(updatedProject);
  } catch (error) {
    console.error("error updating project:", error);
    res.status(500).json({ message: "Error updating project" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
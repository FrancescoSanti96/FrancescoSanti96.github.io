import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../../views/home";
import Projects from "../../views/projects";
import Navbar from "../../components/navbar";
import Experience from "../../views/experience";
import AboutMe from "../../views/aboutMe";

export default function RouterApp() {
  return (
    <Router>
      {/* Use component navbar in all the route */}
      <Navbar/>
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="aboutme" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

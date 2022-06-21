import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../../views/home";
import Projects from "../../views/projects";
import Navbar from "../../components/navbar";

export default function RouterApp() {
  return (
    <Router>
       <Navbar/>
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        {/* <Route path="manualy" element={<Experiences />} /> */}
        {/* <Route path="prizes" element={<AboutMe />} /> */}
      </Routes>
    </Router>
  );
}

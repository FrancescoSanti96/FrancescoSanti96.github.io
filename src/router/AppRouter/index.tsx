import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../../views/home";
import Projects from "../../views/projects";

export default function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        {/* <Route path="manualy" element={<Experiences />} /> */}
        {/* <Route path="prizes" element={<AboutMe />} /> */}
      </Routes>
    </Router>
  );
}

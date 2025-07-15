import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Certifications from './components/certifications';
import Projects from './components/projects';
import Project1 from "./components/projectDetails/project1";
import Project2 from "./components/projectDetails/project2";

function App() {
  return (
    <div className="overflow-x-hidden"> {/* <-- Add this wrapper */}
      <Router>
        <Navbar />
        {/* Add padding to avoid content under the fixed navbar */}
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/project1" element={<Project1 />} />
            <Route path="/projects/project2" element={<Project2 />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
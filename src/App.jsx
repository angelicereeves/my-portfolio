import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Certifications from './components/certifications';
import Projects from './components/projects';
import Project1 from "./components/projectDetails/project1";
import Project2 from "./components/projectDetails/project2";
import Project3 from "./components/projectDetails/project3";
import Project4 from "./components/projectDetails/project4";
import Project5 from "./components/projectDetails/project5";
import Project6 from "./components/projectDetails/project6";
import Project7 from "./components/projectDetails/project7";
import Project8 from "./components/projectDetails/project8";

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
            <Route path="/projects/project3" element={<Project3 />} />
            <Route path="/projects/project4" element={<Project4 />} />
            <Route path="/projects/project5" element={<Project5 />} />
            <Route path="/projects/project6" element={<Project6 />} />
            <Route path="/projects/project7" element={<Project7 />} />
            <Route path="/projects/project8" element={<Project8 />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
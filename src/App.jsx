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
import Project9 from "./components/projectDetails/project9";
import Project10 from "./components/projectDetails/project10";
import Project11 from "./components/projectDetails/project11";
import Project12 from "./components/projectDetails/project12";
import AdvancedEcommerce from './components/projectDetails/advancedEcomerce';
import TaskManagementApp from './components/projectDetails/taskManagementApp';
import FirebaseEcommerce from './components/projectDetails/firebaseEcommerce';
import TravelTracker from "./components/projectDetails/travelTracker";
import RestaurantTraining from "./components/projectDetails/restaurantTraining";
import CraveCafe from "./components/projectDetails/craveCafe";



import GoogleCert from "./components/certificationDetails/google-cert";
import HTMLCert from "./components/certificationDetails/html-cert";
import JSFrameworks from "./components/certificationDetails/jsframeworks";
import AdvJSReact from "./components/certificationDetails/advJSReact";
import SinglePageReactApps from "./components/certificationDetails/singlepagereact";
import IntroPython from "./components/certificationDetails/intropython";
import AdvPython from "./components/certificationDetails/advPython";
import RelationalDB from "./components/certificationDetails/relationalDB";
import FrontendFoundations from "./components/certificationDetails/frontendFoundations";
import FrontendCore from "./components/certificationDetails/frontendCore";
import Completion from './components/certificationDetails/completion';
import BackendSpecialist from "./components/certificationDetails/backendSpecialist";
import BackendCore from "./components/certificationDetails/backendCore";
import FrontendSpecialist from "./components/certificationDetails/frontendSpecialist";

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
            <Route path="/projects/project9" element={<Project9 />} />
            <Route path="/projects/project10" element={<Project10 />} />
            <Route path="/projects/project11" element={<Project11 />} />
            <Route path="/projects/project12" element={<Project12 />} />
            <Route path="/projects/advancedEcommerce" element={<AdvancedEcommerce />} />
            <Route path="/projects/taskManagementApp" element={<TaskManagementApp />} />
            <Route path="/projects/firebaseEcommerce" element={<FirebaseEcommerce />} />
            <Route path="/projects/travel-tracker" element={<TravelTracker />} />
            <Route path="/projects/restaurant-training" element={<RestaurantTraining />} />
            <Route path="/projects/craveCafe" element={<CraveCafe />} />


            <Route path="/certifications/google-certification" element={<GoogleCert />} />
            <Route path="/certifications/html-certification" element={<HTMLCert />} />
            <Route path="/certifications/js-frameworks" element={<JSFrameworks />} />
            <Route path="/certifications/adv-js-react" element={<AdvJSReact />} />
            <Route path="/certifications/single-page-react-apps" element={<SinglePageReactApps />} />
            <Route path="/certifications/foundations-of-python" element={<IntroPython />} />
            <Route path="/certifications/adv-python" element={<AdvPython />} />
            <Route path="/certifications/relationalDB" element={<RelationalDB />} />
            <Route path="/certifications/frontendFoundations" element={<FrontendFoundations />} />
            <Route path="/certifications/frontendCore" element={<FrontendCore />} />
            <Route path="/certifications/frontend-specialist"  element={<FrontendSpecialist />}/>
            <Route path="/certifications/backendSpecialist" element={<BackendSpecialist />}/>
            <Route path="/certifications/backend-core" element={<BackendCore />} />
            <Route path="/certifications/completion" element={<Completion />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
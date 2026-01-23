import React from "react";
import { Link } from "react-router-dom";
import googleCert from "../assets/images/google_certification.jpg";
import htmlcsscert from "../assets/images/htmlcsscert.png";
import javascriptCert from "../assets/images/jsframeworks.png";
import AdvJSReact from "../assets/images/advancedjsreact.png";
import Reactimg from "../assets/images/react.png";
import Pythonimg from "../assets/images/python.png";
import AdvPython from "../assets/images/advpython.png";
import RelationalDB from "../assets/images/relationalDB.png";
import FrontendFoundations from "../assets/images/frontendFoundations.png";
import CompletionCertificate from "../assets/images/completioncertificate.png";
import FrontendCore from "../assets/images/frontendCore.png";
import BackendSpecialistBadge from "../assets/images/backendSpecialist.png";
import BackendCoreBadge from "../assets/images/backendCore.png";
import FrontendSpecialistBadge from "../assets/images/frontendSpecialist.png";

const certifications = [
  {
    title: "Software Engineering Certificate",
    issuer: "Coding Temple",
    date: "November 2025",
    Image: CompletionCertificate,
    link: "/certifications/completion",
  },
  {
    title: "Back-End Specialization",
    issuer: "Coding Temple",
    date: "November 2025",
    Image: BackendSpecialistBadge,
    link: "/certifications/backendSpecialist",
  },
  {
    title: "Backend Core",
    issuer: "Coding Temple",
    date: "November 2025",
    Image: BackendCoreBadge,
    link: "/certifications/backend-core",
  },
  {
    title: "Frontend Specialist",
    issuer: "Coding Temple",
    date: "November 2025",
    Image: FrontendSpecialistBadge,
    link: "/certifications/frontend-specialist",
  },
  {
    title: "Frontend Core",
    issuer: "Coding Temple",
    date: "November 2025",
    Image: FrontendCore,
    link: "/certifications/frontendCore",
  },
  {
    title: "Frontend Foundations",
    issuer: "Coding Temple",
    date: "September 2025",
    Image: FrontendFoundations,
    link: "/certifications/frontendFoundations",
  },
  {
    title: "Relational Databases and REST API Development",
    issuer: "Coding Temple",
    date: "August 2025",
    Image: RelationalDB,
    link: "/certifications/relationalDB",
  },
  {
    title: "Advanced Python",
    issuer: "Coding Temple",
    date: "July 2025",
    Image: AdvPython,
    link: "/certifications/adv-python",
  },
  {
    title: "Foundations of Python",
    issuer: "Coding Temple",
    date: "July 2025",
    Image: Pythonimg,
    link: "/certifications/foundations-of-python",
  },
  {
    title: "Single Page Applications with React",
    issuer: "Coding Temple",
    date: "June 2025",
    Image: Reactimg,
    link: "/certifications/single-page-react-apps",
  },
  {
    title: "Advanced JavaScript and React",
    issuer: "Coding Temple",
    date: "June 2025",
    Image: AdvJSReact,
    link: "/certifications/adv-js-react",
  },
  {
    title: "JavaScript Frameworks",
    issuer: "Coding Temple",
    date: "May 2025",
    Image: javascriptCert,
    link: "/certifications/js-frameworks",
  },
  {
    title: "HTML & CSS Fundamentals",
    issuer: "Coding Temple",
    date: "May 2025",
    Image: htmlcsscert,
    link: "/certifications/html-certification",
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    date: "March 2025",
    Image: googleCert,
    link: "/certifications/google-certification",
  },
];

export default function Certifications() {
  return (
    <main className="min-h-screen w-screen bg-gradient-to-br from-purple-50 via-white to-purple-200 px-0 py-20 flex flex-col items-center">
      <div className="w-full max-w-5xl px-6">
        {/* Title + Resume Button Row */}
        <div className="flex items-center justify-between gap-4 flex-wrap mb-6 mt-6 md:mt-0">
          <h1 className="text-5xl font-extrabold text-purple-800">
            Certifications
          </h1>

          <a
            href="/2025AngelicaReevesSEresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow hover:bg-purple-600 transition"
          >
            View Resume
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col"
            >
              <div className="bg-purple-200 rounded-xl h-28 mb-4 flex items-center justify-center">
                <img
                  src={cert.Image}
                  alt={cert.title}
                  className="h-full object-contain"
                />
              </div>

              <h2 className="text-xl font-bold text-purple-800 mb-1">
                {cert.title}
              </h2>
              <p className="text-gray-700 mb-1">{cert.issuer}</p>
              <p className="text-gray-500 mb-4">{cert.date}</p>

              {/* Use Link for internal routes */}
              <Link
                to={cert.link}
                className="inline-block mt-auto text-purple-700 font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

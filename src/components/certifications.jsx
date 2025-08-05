import React from "react";
import { Link } from "react-router-dom";
import googleCert from "../assets/images/google_certification.jpg";
import htmlcsscert from "../assets/images/htmlcsscert.png";
import javascriptCert from "../assets/images/jsframeworks.png";
import AdvJSReact from "../assets/images/advancedjsreact.png";
import Reactimg from "../assets/images/react.png";
import Pythonimg from "../assets/images/python.png";
import AdvPython from "../assets/images/advpython.png";

const certifications = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    date: "March 2025",
    Image: googleCert,
    link: "/certifications/google-certification",
  }, 
  
  {
    title: "HTML & CSS Fundamentals",
    issuer: "Coding Temple",
    date: "May 2025",
    Image: htmlcsscert,
    link: "/certifications/html-certification"
  },

  {
    title: "JavaScript Frameworks",
    issuer: "Coding Temple",
    date: "May 2025",
    Image: javascriptCert,
    link: "/certifications/js-frameworks"
  },

  {
    title: "Advanced JavaScript and React",
    issuer: "Coding Temple",
    date: "June 2025",
    Image: AdvJSReact,
    link: "/certifications/adv-js-react"
  },
    {
    title: "Single Page Applications with React",
    issuer: "Coding Temple",
    date: "June 2025",
    Image: Reactimg,
    link: "/certifications/single-page-react-apps"
  },
  {
    title: "Foundations of Python",
    issuer: "Coding Temple",
    date: "July 2025",
    Image: Pythonimg,
    link: "/certifications/foundations-of-python"
  },
  {
    title: "Advanced Python",
    issuer: "Coding Temple",
    date: "July 2025",
    Image: AdvPython,
    link: "/certifications/adv-python"
  }


];

export default function Certifications() {
  return (
    <main className="min-h-screen w-screen bg-gradient-to-br from-purple-50 via-white to-purple-200 px-0 py-20 flex flex-col items-center">
      <div className="w-full max-w-5xl px-6">
        <h1 className="text-5xl font-extrabold text-purple-800 mb-6 mt-6 md:mt-0">
          Certifications
        </h1>
        <br />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col"
            >
              <div className="bg-purple-200 rounded-xl h-28 mb-4 flex items-center justify-center">
                <img src={cert.Image} alt={cert.title} className="h-full object-contain" />
              </div>
              <h2 className="text-xl font-bold text-purple-800 mb-1">{cert.title}</h2>
              <p className="text-gray-700 mb-1">{cert.issuer}</p>
              <p className="text-gray-500 mb-4">{cert.date}</p>
              <a
                href={cert.link}
                className="inline-block mt-auto text-purple-700 font-semibold hover:underline"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
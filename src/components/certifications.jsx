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
    link: "https://www.credential.net/3d25e987-11af-464d-83b2-dc76fdeb9abb#acc.mSjqoGcg"
  },

  {
    title: "JavaScript Frameworks",
    issuer: "Coding Temple",
    date: "May 2025",
    Image: javascriptCert,
    link: "https://www.credential.net/baa4deb0-adc3-4707-8cd6-976574847201#acc.zAcltQuJ"
  },

  {
    title: "Advanced JavaScript and React",
    issuer: "Coding Temple",
    date: "June 2025",
    Image: AdvJSReact,
    link: "https://www.credential.net/b25f6793-7941-44c8-9642-6119ca6c2980#acc.4iR6oCqc"
  },
    {
    title: "Single Page Applications with React",
    issuer: "Coding Temple",
    date: "June 2025",
    Image: Reactimg,
    link: "https://www.credential.net/68f349b1-3bb8-4ed9-94b3-ce94013fc220#acc.5BT4JdjM"
  },
  {
    title: "Foundations of Python",
    issuer: "Coding Temple",
    date: "July 2025",
    Image: Pythonimg,
    link: "https://www.credential.net/6bc4665a-851b-4f09-b70b-f04aafd3c815#acc.dZ0xMnbR"
  },
  {
    title: "Advanced Python",
    issuer: "Coding Temple",
    date: "July 2025",
    Image: AdvPython,
    link: "https://www.credential.net/5a8f1be4-e621-48d1-8a46-9af52dc818b5#acc.fAmBCEvF"
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
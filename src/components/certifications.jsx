import React from "react";
import { Link } from "react-router-dom";
import googleCert from "../assets/images/google_certification.jpg";

const certifications = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    date: "March 2025",
    Image: googleCert,
    link: "/certifications/google-certification",
  }, 
  
  {
    title: "title",
    issuer: "issuer",
    date: "date",
    Image: "",
    link: "#"
  },

  {
    title: "title",
    issuer: "issuer",
    date: "date",
    Image: "",
    link: "#"
  },

  {
    title: "title",
    issuer: "issuer",
    date: "date",
    Image: "",
    link: "#"
  },


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
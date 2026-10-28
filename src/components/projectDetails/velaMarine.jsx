import React from "react";

import velaMarineVideo from "../../assets/images/velaMarine.mp4";

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Responsive Design",
  "UI/UX Design",
  "AI-Assisted Development",
  "Lovable",
  "Vercel",
];

export default function VelaMarine() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-sky-50 via-cyan-100 to-blue-400 flex items-center justify-center px-6 py-6">
      <div className="w-full flex flex-col md:flex-row items-stretch">

        {/* Left: Video */}
        <div className="flex-1 flex items-center justify-center bg-sky-100 min-h-[350px] md:min-h-[500px]">
          <video
            src={velaMarineVideo}
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[350px] md:h-[500px] object-contain rounded-xl shadow-xl"
          >
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>

        {/* Right: Project Info */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 bg-white/90">

          <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
            Vela Marine Restaurant
          </h1>

          <p className="text-gray-700 text-lg mb-8">
            A modern, responsive restaurant website developed for
            Vela Marine, a dining establishment located in the
            coastal city of Sarandë, Albania.
            <br /><br />
            Designed to reflect the restaurant's Mediterranean
            atmosphere, the website combines coastal-inspired
            visuals, elegant typography, and intuitive navigation
            to create an engaging digital experience for visitors.
            <br /><br />
            Developed using React, Tailwind CSS, and AI-assisted
            development tools, the project demonstrates the
            integration of modern frontend technologies with
            efficient development workflows. The responsive
            design ensures a consistent browsing experience
            across desktop, tablet, and mobile devices.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mb-8">
            <p className="text-lg text-blue-800 font-semibold w-full">
              Languages & Tools:
            </p>

            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-tr from-sky-100 via-cyan-100 to-blue-200 text-blue-900 font-semibold shadow-md border border-blue-300 hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap justify-center gap-3">

            <a
              href="https://velamarine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-900 text-white font-semibold rounded-md shadow hover:bg-blue-800 hover:scale-105 transition text-sm"
            >
              Visit Live Website ↗
            </a>

          </div>

        </div>
      </div>
    </main>
  );
}
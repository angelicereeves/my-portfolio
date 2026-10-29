import React from "react";

import ionianVideo from "../../assets/images/ionian2.mp4";

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Responsive Design",
  "UI/UX Design",
  "Frontend Development",
  "Component-Based Architecture",
  "Interactive Animations",
  "Contact Form Integration",
  "SEO Optimization",
];

export default function IonianDigital() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-800 flex items-center justify-center px-6 py-6">
      <div className="w-full flex flex-col md:flex-row items-stretch">

        {/* Left: Video */}
        <div className="flex-1 flex items-center justify-center bg-slate-900 min-h-[350px] md:min-h-[500px]">
          <video
            src={ionianVideo}
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[350px] md:h-[500px] object-contain rounded-xl shadow-2xl"
          >
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>

        {/* Right: Project Info */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 bg-white/95">

          <h1 className="text-4xl font-extrabold text-blue-950 mb-4">
            Ionian Digital
          </h1>

          <p className="text-gray-700 text-lg mb-8">
            A modern, fully responsive website designed and developed for
            Ionian Digital, my independent web development and digital
            solutions agency. The website serves as the agency's primary
            online presence, showcasing professional web development
            services, custom website solutions, and digital experiences
            tailored to businesses of all sizes.

            <br /><br />

            Built with a strong emphasis on clean design, intuitive
            navigation, and engaging user experiences, the website
            features interactive service sections, smooth animations,
            responsive layouts, and streamlined contact functionality
            to help potential clients explore services and initiate
            new projects.

            <br /><br />

            This project demonstrates my ability to independently
            design, develop, and launch a complete business website,
            combining modern frontend technologies with practical
            business objectives, performance considerations, and
            user-centered design principles.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mb-8">

            <p className="text-lg text-blue-900 font-semibold w-full">
              Languages & Tools:
            </p>

            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-tr from-blue-100 via-cyan-100 to-sky-200 text-blue-950 font-semibold shadow-md border border-cyan-300 hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}

          </div>

          {/* Project Links */}
          <div className="flex flex-wrap justify-center gap-3">

            <a
              href="https://www.ionian-digital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-950 text-white font-semibold rounded-md shadow hover:bg-cyan-700 hover:scale-105 transition text-sm"
            >
              Visit Live Website ↗
            </a>

          </div>

        </div>
      </div>
    </main>
  );
}
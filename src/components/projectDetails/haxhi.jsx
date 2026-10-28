import React from "react";

import haxhiVideo from "../../assets/images/haxhi.mp4";

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

export default function Haxhi() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-stone-100 via-orange-100 to-amber-300 flex items-center justify-center px-6 py-6">
      <div className="w-full flex flex-col md:flex-row items-stretch">

        {/* Left: Video */}
        <div className="flex-1 flex items-center justify-center bg-stone-200 min-h-[350px] md:min-h-[500px]">
          <video
            src={haxhiVideo}
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

          <h1 className="text-4xl font-extrabold text-amber-900 mb-4">
            Haxhi Restaurant Website
          </h1>

          <p className="text-gray-700 text-lg mb-8">
            A modern, responsive restaurant website designed to
            showcase the identity and atmosphere of a Mediterranean
            and Albanian dining experience.
            <br /><br />
            Developed using React, Tailwind CSS, and AI-assisted
            development tools, the project focuses on creating
            an engaging digital presence through clean layouts,
            thoughtful typography, and intuitive navigation.
            <br /><br />
            This project demonstrates the practical application
            of AI-powered development workflows to create and
            deploy professional, customer-facing websites.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mb-8">
            <p className="text-lg text-amber-800 font-semibold w-full">
              Languages & Tools:
            </p>

            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-tr from-orange-100 via-amber-100 to-orange-200 text-amber-900 font-semibold shadow-md border border-amber-300 hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap justify-center gap-3">

            <a
              href="https://haxhi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-amber-800 text-white font-semibold rounded-md shadow hover:bg-amber-700 hover:scale-105 transition text-sm"
            >
              Visit Live Website ↗
            </a>

          </div>

        </div>
      </div>
    </main>
  );
}
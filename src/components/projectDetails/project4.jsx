import React from "react";
import project4Video from "../../assets/images/project4video.mp4";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
];

export default function Project4() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-white via-purple-100 to-purple-300 flex items-center justify-center px-6 py-6">
      <div className="w-full flex flex-col md:flex-row items-stretch">
        {/* Left: Video */}
        <div className="flex-1 flex items-center justify-center bg-purple-100 min-h-[350px] md:min-h-[500px]">
          <video
            src={project4Video}
            controls
            className="w-full h-[350px] md:h-[500px] object-contain rounded-xl shadow-xl"
            poster=""
          >
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
        {/* Right: Project Info */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 bg-white/90">
          <h1 className="text-4xl font-extrabold text-purple-800 mb-4">Pokemon API</h1>
          <p className="text-gray-700 text-lg mb-8">
            {/* Project blurb goes here */}
            This is a Pokemon API project. It is a simple application built using React, Javascript, and CSS. The site features a search feature to look up Pokemon by their name or number. It showcases skills in front-end development, responsive design, and user interaction.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <p className=" text-lg text-purple-700 font-semibold">Languages Used:</p>
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-tr from-purple-200 via-purple-100 to-purple-300 text-purple-800 font-semibold shadow-md border border-purple-300 hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex justify-center">
            <a
              href="https://github.com/angelicereeves/Pokemon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-purple-700 text-white font-semibold rounded-md shadow hover:bg-purple-600 transition text-sm"
            >
              View on GitHub
            </a>
          </div>
        </div>  
      </div>
    </main>
  );
}
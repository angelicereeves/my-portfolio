import React from "react";

import paddleVideo from "../../assets/images/bistricapaddlevideo.mp4";

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Responsive Design",
  "UI/UX Design",
  "Multilingual Support",
  "WhatsApp Integration",
];

export default function BistricaPaddle() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-cyan-50 via-sky-200 to-teal-400 flex items-center justify-center px-6 py-6">
      <div className="w-full flex flex-col md:flex-row items-stretch">

        {/* Left: Video */}
        <div className="flex-1 flex items-center justify-center bg-cyan-100 min-h-[350px] md:min-h-[500px]">
          <video
            src={paddleVideo}
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

          <h1 className="text-4xl font-extrabold text-teal-800 mb-4">
            Bistrica Paddle
          </h1>

          <p className="text-gray-700 text-lg mb-8">
            A modern, responsive, multilingual website developed for a
            paddleboard rental business in Sarandë, Albania. Designed to
            showcase paddleboarding experiences, rental options, and pricing
            while making it easy for tourists to explore services and
            connect directly with the business.
            <br /><br />
            The website features intuitive navigation, multilingual
            accessibility, WhatsApp booking integration, and Google Maps
            integration. Built with a focus on mobile-first design,
            user experience, and practical business functionality.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mb-8">
            <p className="text-lg text-teal-700 font-semibold w-full">
              Languages & Tools:
            </p>

            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-tr from-cyan-200 via-teal-100 to-sky-300 text-teal-900 font-semibold shadow-md border border-teal-300 hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap justify-center gap-3">

            <a
              href="https://www.bistricapaddleboard.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-teal-700 text-white font-semibold rounded-md shadow hover:bg-teal-600 hover:scale-105 transition text-sm"
            >
              Visit Live Website ↗
            </a>

            {/*
            <a
              href="YOUR-GITHUB-REPOSITORY-URL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-white text-teal-800 font-semibold rounded-md shadow border border-teal-300 hover:bg-teal-50 transition text-sm"
            >
              View on GitHub
            </a>
            */}

          </div>

        </div>
      </div>
    </main>
  );
}
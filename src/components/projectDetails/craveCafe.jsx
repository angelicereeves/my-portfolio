import React from "react";
import cafeVideo from "../../assets/images/craveCafe.mp4";

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Responsive Design",
  "UI/UX",
];

export default function CafeWebsite() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-white via-amber-100 to-amber-300 flex items-center justify-center px-6 py-6">
      <div className="w-full flex flex-col md:flex-row items-stretch">
        
        {/* Left: Video */}
        <div className="flex-1 flex items-center justify-center bg-amber-100 min-h-[350px] md:min-h-[500px]">
          <video
            src={cafeVideo}
            controls
            className="w-full h-[350px] md:h-[500px] object-contain rounded-xl shadow-xl"
            poster=""
          >
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>

        {/* Right: Project Info */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 bg-white/90">
          <h1 className="text-4xl font-extrabold text-amber-800 mb-4">
            Cafe Website
          </h1>

          <p className="text-gray-700 text-lg mb-8">
            A modern, mobile-first cafe website designed to showcase a menu,
            highlight featured items, and make it easy for customers to find
            location details and contact information. Built with a strong focus
            on responsive layout, clean UI, and real-world business needs.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <p className="text-lg text-amber-700 font-semibold">
              Languages & Tools:
            </p>

            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-tr from-amber-200 via-amber-100 to-amber-300 text-amber-800 font-semibold shadow-md border border-amber-300 hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-3">
            <a
              href="https://github.com/angelicereeves/crave-website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-amber-700 text-white font-semibold rounded-md shadow hover:bg-amber-600 transition text-sm"
            >
              View on GitHub
            </a>

            {/* Optional: add live link if you have it */}
            {/* 
            <a
              href="https://YOUR-LIVE-URL.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-white text-amber-800 font-semibold rounded-md shadow border border-amber-300 hover:bg-amber-50 transition text-sm"
            >
              Live Demo
            </a>
            */}
          </div>
        </div>
      </div>
    </main>
  );
}

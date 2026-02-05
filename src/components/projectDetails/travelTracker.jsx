import React from "react";
import travelTrackerVideo from "../../assets/images/travelTrackerVideo.mp4";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Leaflet",
  "Map APIs",
];

export default function TravelTracker() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-white via-blue-100 to-blue-300 flex items-center justify-center px-6 py-6">
      <div className="w-full flex flex-col md:flex-row items-stretch">
        
        {/* Left: Video */}
        <div className="flex-1 flex items-center justify-center bg-blue-100 min-h-[350px] md:min-h-[500px]">
          <video
            src={travelTrackerVideo}
            controls
            className="w-full h-[350px] md:h-[500px] object-contain rounded-xl shadow-xl"
            poster=""
          >
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>

        {/* Right: Project Info */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 bg-white/90">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
            Travel Tracker
          </h1>

          <p className="text-gray-700 text-lg mb-8">
            A personal travel tracking application that visualizes visited
            locations on an interactive map and organizes travel experiences in
            one place. Built with Next.js and React, the app focuses on dynamic
            rendering, responsive UI, and real-world data structure design for
            managing locations, media, and travel notes.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <p className="text-lg text-blue-700 font-semibold">
              Languages & Tools:
            </p>

            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-tr from-blue-200 via-blue-100 to-blue-300 text-blue-800 font-semibold shadow-md border border-blue-300 hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href="https://github.com/angelicereeves/travel-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-700 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition text-sm"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

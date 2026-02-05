import React from "react";
import restaurantVideo from "../../assets/images/restaurantTraining.mp4";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Firebase",
  "Authentication",
  "Dynamic Routing",
];

export default function RestaurantTraining() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-white via-emerald-100 to-emerald-300 flex items-center justify-center px-6 py-6">
      <div className="w-full flex flex-col md:flex-row items-stretch">
        
        {/* Left: Video */}
        <div className="flex-1 flex items-center justify-center bg-emerald-100 min-h-[350px] md:min-h-[500px]">
          <video
            src={restaurantVideo}
            controls
            className="w-full h-[350px] md:h-[500px] object-contain rounded-xl shadow-xl"
          />
        </div>

        {/* Right: Info */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 bg-white/90">
          <h1 className="text-4xl font-extrabold text-emerald-800 mb-4">
            Restaurant Training Platform
          </h1>

          <p className="text-gray-700 text-lg mb-8">
            A scalable training platform designed for restaurants to onboard and
            educate staff through interactive lessons, quizzes, and role-based
            learning paths. Built as a real-world product concept focused on
            usability, modular architecture, and future SaaS deployment.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <p className="text-lg text-emerald-700 font-semibold">
              Languages & Tools:
            </p>

            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-tr from-emerald-200 via-emerald-100 to-emerald-300 text-emerald-800 font-semibold shadow-md border border-emerald-300 hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href="https://github.com/angelicereeves/restaurant-training-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-emerald-700 text-white font-semibold rounded-md shadow hover:bg-emerald-600 transition text-sm"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

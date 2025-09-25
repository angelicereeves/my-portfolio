import React from "react";
import AdvancedEcommerceVideo from "../../assets/images/advancedEcommerce.mp4";

const skills = [
  "React",
  "React Query",
  "JavaScript",
  "TypeScript",
  "Redux Toolkit",
];

export default function AdvancedEcommerce() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-white via-purple-100 to-purple-300 flex items-center justify-center px-6 py-6">
      <div className="w-full flex flex-col md:flex-row items-stretch">
        {/* Left: Video */}
        <div className="flex-1 flex items-center justify-center bg-purple-100 min-h-[350px] md:min-h-[500px]">
          <video
            src={AdvancedEcommerceVideo}
            controls
            className="w-full h-[350px] md:h-[500px] object-contain rounded-xl shadow-xl"
            poster=""
          >
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
        {/* Right: Project Info */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 bg-white/90">
          <h1 className="text-4xl font-extrabold text-purple-800 mb-4">Advanced Ecommerce Site</h1>
          <p className="text-gray-700 text-lg mb-8">
            {/* Project blurb goes here */}
            This is an E-Commerce Storefront project. It was built using React and React Query with data sourced from the FakeStore API. I focused on implementing real-time data fetching, managing global state, and creating reusable components. The site features dynamic product listings, detailed product pages, and a shopping cart experience. It highlights skills in modern frontend development, API integration, and building scalable, user-friendly interfaces.
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
              href="https://github.com/angelicereeves/advanced-ecommerce"
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
import React from "react";
import FrontendSpecialistImg from "../../assets/images/frontendSpecialist.png";

const skills = [
  "Algorithms",
  "Asynchronous Programming",
  "Authentication",
  "Bootstrap",
  "CI/CD",
  "CSS",
  "CSS Flexible Box Layout (Flexbox)",
  "CSS Grid",
  "CSS3",
  "Compiling",
  "Developer Tools",
  "Dynamic Routing",
  "Functional Programming",
  "Git",
  "GitHub",
  "GitHub Actions",
  "GitHub Pages",
  "HTML",
  "HTML DOM",
  "Higher-Order Functions",
  "JSON",
  "JavaScript",
  "Linked Lists",
  "NPM",
  "Object Oriented Programming (OOP)",
  "Promises",
  "Prototyping",
  "React",
  "React Hooks",
  "TypeScript",
  "User Interfaces",
  "Visual Studio",
  "Vite",
  "Web APIs",
];

export default function FrontendSpecialist() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-white via-purple-100 to-purple-300 flex items-center justify-center px-6 py-6">
      <div className="w-full flex flex-col md:flex-row-reverse items-stretch">
        {/* Right side: Image */}
        <div className="flex-1 flex items-center justify-center bg-purple-100 min-h-[350px] md:min-h-[500px]">
          <img
            src={FrontendSpecialistImg}
            alt="Frontend Specialist Certificate Badge"
            className="w-full h-[350px] md:h-[500px] object-contain rounded-xl shadow-xl"
          />
        </div>

        {/* Left: Certification Info */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 bg-white/90">
          <h1 className="text-4xl font-extrabold text-purple-800 mb-4">
            Frontend Specialist Certification
          </h1>

          <p className="text-gray-700 text-lg mb-8">
            This badge signifies completion of Coding Temple&apos;s Front-End
            Specialization Curriculum. Earners have demonstrated proficiency in
            web application development using HTML, CSS, JavaScript, TypeScript,
            and React. The program emphasizes modern front-end architecture,
            state management, authentication, Web APIs, CI/CD with GitHub
            Actions, and deployment workflows, highlighting mastery in building,
            testing, and hosting scalable, production-ready applications.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <p className="text-lg text-purple-700 font-semibold">
              Skills / Knowledge:
            </p>

            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-tr from-purple-200 via-purple-100 to-purple-300 text-purple-900 font-semibold shadow-md border border-purple-300 hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.credential.net/f80e68ab-2b13-430b-83a8-27817914ab18#acc.MQT7UFsC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-purple-700 text-white font-semibold rounded-md shadow hover:bg-purple-600 transition text-sm"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

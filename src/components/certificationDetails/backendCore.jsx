import React from "react";
import BackendCoreImg from "../../assets/images/backendCore.png";

const skills = [
  "Python",
  "RESTful APIs",
  "SQL",
];

export default function BackendCore() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-white via-purple-100 to-purple-300 flex items-center justify-center px-6 py-6">
      <div className="w-full flex flex-col md:flex-row-reverse items-stretch">
        {/* Right side: Image */}
        <div className="flex-1 flex items-center justify-center bg-purple-100 min-h-[350px] md:min-h-[500px]">
          <img
            src={BackendCoreImg}
            alt="Backend Core Certificate Badge"
            className="w-full h-[350px] md:h-[500px] object-contain rounded-xl shadow-xl"
          />
        </div>

        {/* Left: Certification Info */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 bg-white/90">
          <h1 className="text-4xl font-extrabold text-purple-800 mb-4">
            Backend Core Certification
          </h1>

          <p className="text-gray-700 text-lg mb-8">
            This badge recognizes the completion of Coding Temple&apos;s Core
            Back-End modules. Learners have acquired fundamental skills in
            Python programming, database management with SQL, and the basics of
            API development. The curriculum includes Python syntax, data
            structures, file handling, SQL essentials, and an introduction to
            building RESTful APIs, reinforced through mini-projects and hands-on
            practice.
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
              href="https://www.credential.net/d0cfeea4-8db7-4ce1-ade5-3c318df8567b#acc.XiuwCZTS"
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

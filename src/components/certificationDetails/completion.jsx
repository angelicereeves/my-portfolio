import React from "react";
import CompletionImg from "../../assets/images/completioncertificate.png";

const skills = [
  "CSS",
  "Flask",
  "Full-Stack Web Development",
  "Git",
  "GitHub",
  "GraphQL",
  "HTML5",
  "JavaScript",
  "NodeJS",
  "Python",
  "React",
  "SQL",
  "Figma",
  "Responsive Web Design",
];

export default function Completion() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-white via-purple-100 to-purple-300 flex items-center justify-center px-6 py-6">
      <div className="w-full flex flex-col md:flex-row-reverse items-stretch">
        {/* Right side: Image */}
        <div className="flex-1 flex items-center justify-center bg-purple-100 min-h-[350px] md:min-h-[500px]">
          <img
            src={CompletionImg}
            alt="Software Engineering Certificate"
            className="w-full h-[350px] md:h-[500px] object-contain rounded-xl shadow-xl"
          />
        </div>

        {/* Left: Certification Info */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 bg-white/90">
          <h1 className="text-4xl font-extrabold text-purple-800 mb-4">
            Software Engineering Certificate
          </h1>

          <p className="text-gray-700 text-lg mb-8">
            This certificate, issued by Coding Temple on November 18, 2025,
            recognizes completion of a comprehensive Software Engineering
            program covering modern full-stack development, UI/UX design,
            backend systems, and collaborative development workflows.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <p className="text-lg text-purple-700 font-semibold">
              Skills Learned:
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
              href="https://www.credential.net/af70d2a8-d03d-4daa-9883-10a7cae7613e#acc.wm0EOGha"
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

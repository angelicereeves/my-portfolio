import React from "react";
import FrontendFoundationsImg from "../../assets/images/frontendFoundations.png";


const skills = [
    "React",
    "TypeScript",
    "Redux",
    "State Management",
    "Authentication",
    "Firebase"
]


export default function CertificationShowcase() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-white via-purple-100 to-purple-300 flex items-center justify-center px-6 py-6">
      <div className="w-full flex flex-col md:flex-row-reverse items-stretch">
        {/* Right side: Image */}
        <div className="flex-1 flex items-center justify-center bg-purple-100 min-h-[350px] md:min-h-[500px]">
          <img
            src={FrontendFoundationsImg}
            alt="Frontend Foundations"
            className="w-full h-[350px] md:h-[500px] object-contain rounded-xl shadow-xl"
          />
        </div>

        {/* Left: Certification Info */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 bg-white/90">
          <h1 className="text-4xl font-extrabold text-purple-800 mb-4">Frontend Foundations</h1>
          <p className="text-gray-700 text-lg mb-8">
            This certificate, issued by Coding Temple in September 2025, demonstrates proficiency in frontend development using modern technologies. It covers topics such as React with TypeScript, state management with Redux, authentication with Auth0, and data fetching with React Query, alongside best practices for scalable and maintainable application architecture.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <p className="text-lg text-purple-700 font-semibold">Skills Learned:</p>
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
              href="https://www.credential.net/6b0cb0f1-0885-4475-b95c-6b62aec5b1c2#acc.yWUwVpN4"
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

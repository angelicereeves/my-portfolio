import React from "react";
import JSFrameworks from "../../assets/images/jsframeworks.png";


const skills = [
    "Responsive Web Design",
    "JavaScript Development",
    "Bootstrap Frameworks",
    "Form Validation",
    "User Interaction Design",
    "API Integration",
    "Version Control with Git",

];

export default function CertificationShowcase() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-white via-purple-100 to-purple-300 flex items-center justify-center px-6 py-6">
      <div className="w-full flex flex-col md:flex-row-reverse items-stretch">
        {/* Right side: Image */}
        <div className="flex-1 flex items-center justify-center bg-purple-100 min-h-[350px] md:min-h-[500px]">
          <img
            src={JSFrameworks}
            alt="JavaScript Frameworks Certificate"
            className="w-full h-[350px] md:h-[500px] object-contain rounded-xl shadow-xl"
          />
        </div>

        {/* Left: Certification Info */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 bg-white/90">
          <h1 className="text-4xl font-extrabold text-purple-800 mb-4">JavaScript Frameworks</h1>
          <p className="text-gray-700 text-lg mb-8">
            This certificate, issued by Coding Temple in May 2025, demonstrates foundational skills in JavaScript frameworks. It covers topics such as React, Angular, and Vue.js.
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
              href="https://www.credential.net/baa4deb0-adc3-4707-8cd6-976574847201#acc.zAcltQuJ"
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

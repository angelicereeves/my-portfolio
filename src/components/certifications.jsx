import React from "react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "June 2024",
    icon: "☁️",
    link: "#"
  },
  {
    title: "Google Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "March 2024",
    icon: "🌐",
    link: "#"
  },
  {
    title: "Certified ScrumMaster",
    issuer: "Scrum Alliance",
    date: "January 2024",
    icon: "🏆",
    link: "#"
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "August 2023",
    icon: "🔷",
    link: "#"
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta",
    date: "May 2023",
    icon: "💻",
    link: "#"
  },
  {
    title: "Udemy Modern React Bootcamp",
    issuer: "Udemy",
    date: "April 2023",
    icon: "📚",
    link: "#"
  },
];

export default function Certifications() {
  return (
    <main className="min-h-screen w-screen bg-gradient-to-br from-purple-50 via-white to-purple-200 px-0 py-20 flex flex-col items-center">
      <div className="w-full max-w-5xl px-6">
        <h1 className="text-5xl font-extrabold text-purple-800 mb-6 mt-6 md:mt-0">
          Certifications
        </h1>
        <br />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col"
            >
              <div className="bg-purple-200 rounded-xl h-28 mb-4 flex items-center justify-center">
                <span className="text-4xl text-purple-700">{cert.icon}</span>
              </div>
              <h2 className="text-xl font-bold text-purple-800 mb-1">{cert.title}</h2>
              <p className="text-gray-700 mb-1">{cert.issuer}</p>
              <p className="text-gray-500 mb-4">{cert.date}</p>
              <a
                href={cert.link}
                className="inline-block mt-auto text-purple-700 font-semibold hover:underline"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
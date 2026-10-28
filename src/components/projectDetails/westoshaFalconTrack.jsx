import React from "react";

import westoshaVideo from "../../assets/images/westoshaTrack.mp4";

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Responsive Design",
  "UI/UX Design",
  "AI-Assisted Development",
  "Lovable",
  "Vercel",
];

export default function WestoshaFalconTrack() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-100 via-blue-200 to-red-300 flex items-center justify-center px-6 py-6">
      <div className="w-full flex flex-col md:flex-row items-stretch">

        {/* Left: Video */}
        <div className="flex-1 flex items-center justify-center bg-slate-200 min-h-[350px] md:min-h-[500px]">
          <video
            src={westoshaVideo}
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[350px] md:h-[500px] object-contain rounded-xl shadow-xl"
          >
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>

        {/* Right: Project Info */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 bg-white/90">

          <h1 className="text-4xl font-extrabold text-blue-950 mb-4">
            Westosha Falcon Track & Field
          </h1>

          <p className="text-gray-700 text-lg mb-8">
            A modern, responsive athletics website developed for
            Westosha Central's track and field program.
            <br /><br />
            Designed to create a centralized digital presence
            for the program, the website focuses on presenting
            athletic information through a clean, organized,
            and accessible interface.
            <br /><br />
            The project emphasizes intuitive navigation,
            responsive layouts, and a visually engaging
            design that reflects the energy and competitive
            spirit of high school athletics.
            <br /><br />
            Built using modern frontend technologies and
            deployed through Vercel, the website demonstrates
            practical experience developing user-friendly
            web applications for specialized audiences.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mb-8">
            <p className="text-lg text-blue-900 font-semibold w-full">
              Languages & Tools:
            </p>

            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-tr from-blue-100 via-slate-100 to-red-100 text-blue-950 font-semibold shadow-md border border-blue-300 hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap justify-center gap-3">

            <a
              href="https://westosha-falcon-track.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-950 text-white font-semibold rounded-md shadow hover:bg-blue-800 hover:scale-105 transition text-sm"
            >
              Visit Live Website ↗
            </a>

          </div>

        </div>
      </div>
    </main>
  );
}
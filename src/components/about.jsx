import React, { useEffect, useState } from "react";
import profileImg from "../assets/images/profile.jpg";
import vicsPic from "../assets/images/vicspic-drinks.jpg";
import vicPic from "../assets/images/vicspic.jpg";
import travelPic from "../assets/images/travel.jpg";

const images = [
  { src: profileImg, alt: "Angelica" },
  { src: vicsPic, alt: "Angelica serving drinks" },
  { src: travelPic, alt: "Pictured Rocks Park" },
  { src: vicPic, alt: "Angelica working" },
];

const skills = [
  "JavaScript",
  "Python",
  "React",
  "Node.js",  
  "SQL",
  "CSS",
  "HTML",
  "Linux",
  "Tailwind",
  "Git",
];

function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[520px] flex items-center justify-center">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={img.alt}
          className={`absolute w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white transition-all duration-700
            ${idx === current ? "opacity-100 scale-100 z-20" : "opacity-0 scale-95 z-10"}`}
        />
      ))}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition bg-purple-400 ${
              current === idx ? "scale-125 bg-purple-700" : "opacity-50"
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main className="flex flex-col md:flex-row items-stretch min-h-screen w-full bg-gradient-to-br from-purple-50 via-white to-purple-200">
      {/* Left Side: Text */}
      <section className="flex-1 h-full flex flex-col justify-center px-4 md:px-12 lg:px-20 py-8 md:py-12">
        {/* Removed max-w-2xl below */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-purple-800 mb-4 drop-shadow">About Me</h1>
        <p className="text-base md:text text-gray-800 mb-8 leading-relaxed">
          Hello! I’m <span className="font-bold text-purple-700">Angelica Reeves</span>, a passionate Full Stack Developer who enjoys building beautiful, performant web apps and solving tough backend challenges.
          <br /><br />
          My background spans Python, JavaScript, CSS, React, and cybersecurity and more. I love creating scalable APIs and working with cloud technologies. I’m always eager to learn new skills and take on exciting projects.
          <br /><br />
          Before I got into tech, I worked in the service industry, which taught me the value of hard work, good communication skills, customer service, and teamwork. Now, I bring that same dedication to my coding projects.
        </p>
        <h2 className="text-lg md:text-xl font-semibold text-purple-700 mb-3 mt-4">Skills &amp; Technologies</h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-tr from-purple-200 via-purple-100 to-purple-300 text-purple-800 font-semibold shadow-md border border-purple-300 hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="text-base md:text text-gray-700 mb-8">
          <p>
            When I’m not coding, you’ll find me exploring nature, hanging out with my dogs, playing the guitar, tasting wines, and traveling around the world.
          </p>
        </div>
        <div>
          <a
            href="/contact"
            className="inline-block mt-2 px-6 py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 font-bold shadow hover:from-purple-700 hover:to-purple-800 hover:scale-105 transition"
          >
            Contact me!
          </a>
        </div>
      </section>
      {/* Right Side: Carousel */}
      <section className="flex-1 flex items-center justify-center overflow-hidden px-10">
        <ImageCarousel />
      </section>
    </main>
  );
}
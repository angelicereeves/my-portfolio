import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import eappGif from '../assets/images/eapp.gif';
import scrollcodeOriginalGif from '../assets/images/scrollcode_original.gif';
import rocknrollGif from '../assets/images/rocknroll.gif';

// List your GIFs and their durations (in seconds)
const gifData = [
  { src: scrollcodeOriginalGif, alt: "Scrolling code animation", duration: 3.5 },
  { src: eappGif, alt: "Eapp animation", duration: 2.7 },
  { src: rocknrollGif, alt: "Rock n Roll Website animation", duration: 4.2 },
];

export default function Home() {
  // State to track the current gif order (by index)
  const [order, setOrder] = useState([0, 1, 2]);

  useEffect(() => {
    // Get the max duration from the current set
    const maxDuration = Math.max(
      ...order.map(i => gifData[i].duration)
    );
    // Wait for 2 cycles of the longest gif, then rotate
    const timeout = setTimeout(() => {
      setOrder(([a, b, c]) => [b, c, a]);
    }, maxDuration * 2 * 500);

    // Cleanup on order change/unmount
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-100 to-purple-300 flex items-center px-12">
      <div className="max-w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
        {/* LEFT: GIFs in 2 columns, larger sizes */}
        <div className="flex w-full max-w-2xl h-[700px]">
          {/* Column 1 */}
          <div className="flex flex-col justify-between flex-1">
            {/* Top GIF */}
            <img
              src={gifData[order[0]].src}
              alt={gifData[order[0]].alt}
              className="w-[300px] rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 mb-2"
            />
            {/* Bottom GIF */}
            <img
              src={gifData[order[1]].src}
              alt={gifData[order[1]].alt}
              className="w-[300px] h-[350px] rounded-2xl shadow-2xl mb-2 hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Column 2 */}
          <div className="flex flex-col justify-center items-center flex-1 hover:scale-105 transition-transform duration-300">
            {/* Middle GIF */}
            <img
              src={gifData[order[2]].src}
              alt={gifData[order[2]].alt}
              className="w-[350px] h-[350px] rounded-2xl shadow-2xl"
            />
          </div>
        </div>
        {/* RIGHT: Cards and Info */}
        <div className="flex flex-col items-center lg:items-start w-full px-2">
          {/* Name/Title/Tagline */}
          <div className="mb-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-1">Angelica Reeves</h1>
            <h2 className="text-xl md:text-2xl text-purple-700 font-semibold mb-2">
              Full Stack Developer <span className="text-gray-500">(Back End Focus)</span>
            </h2>
            <p className="text-gray-700 max-w-md mx-auto lg:mx-0">
              Passionate about building robust APIs and scalable web applications. As a full stack developer with a strong back end focus, I specialize in JavaScript, Python, Node.js, and cloud technologies, while also crafting intuitive front end experiences.
            </p>
          </div>
          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
            {/* About Card */}
            <div className="bg-white/90 border border-purple-200 shadow-xl rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition">
              <h3 className="text-lg font-bold mb-2 text-purple-700">About Me</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Experienced in JavaScript, Node.js, Python, and cloud platforms. I thrive on solving challenging problems and collaborating with creative teams.
              </p>
              <Link to="/about" className="text-purple-700 hover:underline font-semibold">
                Learn more &rarr;
              </Link>
            </div>
            {/* Projects Card */}
            <div className="bg-white/90 border border-purple-200 shadow-xl rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition">
              <h3 className="text-lg font-bold mb-2 text-purple-700">Projects</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Explore my portfolio of web apps, APIs, and automation tools. I love bringing ideas to life through code!
              </p>
              <Link to="/projects" className="text-purple-700 hover:underline font-semibold">
                See projects &rarr;
              </Link>
            </div>
            {/* Contact Card */}
            <div className="bg-white/90 border border-purple-200 shadow-xl rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition">
              <h3 className="text-lg font-bold mb-2 text-purple-700">Get in Touch</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Interested in working together or just want to connect? I’d love to hear from you!
              </p>
              <Link to="/contact" className="text-purple-700 hover:underline font-semibold">
                Contact me &rarr;
              </Link>
            </div>
            {/* Certifications Card */}
            <div className="bg-white/90 border border-purple-200 shadow-xl rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition">
              <h3 className="text-lg font-bold mb-2 text-purple-700">Certifications</h3>
              <p className="text-gray-600 mb-4 text-sm">
                I hold several certifications in web development and cloud technologies.
              </p>
              <Link to="/certifications" className="text-purple-700 hover:underline font-semibold">
                View certifications &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
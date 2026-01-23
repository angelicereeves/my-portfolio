import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MauritiusGif from '../assets/images/project11.gif';
import VicsGif from '../assets/images/project12.gif';
import ScoobyDooGif from '../assets/images/project9.gif';
import Project10Gif from '../assets/images/project10.gif';

const gifData = [
  { src: VicsGif, alt: "Vic's Training App", duration: 3.5 },
  { src: MauritiusGif, alt: "Moving to Mauritius", duration: 2.7 },
  { src: ScoobyDooGif, alt: "Scooby Doo Game", duration: 4.2 },
  { src: Project10Gif, alt: "Project 10", duration: 3.0 },
];

export default function Home() {
  const [order, setOrder] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const maxDuration = Math.max(...order.map(i => gifData[i].duration));
    const timeout = setTimeout(() => {
      setOrder(([a, b, c, d]) => [b, c, d, a]);
    }, maxDuration * 2 * 500);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-100 to-purple-300 flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-12 py-12 gap-12">

      {/* LEFT: Cards and Info */}
      <div className="flex flex-col items-center lg:items-start w-full px-2">
        {/* Name + Resume Button */}
        <div className="mb-8 text-center lg:text-left w-full">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700">
              Angelica Reeves
            </h1>

            <a
              href="/2025AngelicaReevesSEresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow hover:bg-purple-600 transition"
            >
              View Resume
            </a>
          </div>

          <h2 className="text-xl md:text-2xl text-purple-700 font-semibold mb-2">
            Full Stack Developer
          </h2>

          <p className="text-gray-700 max-w-md mx-auto lg:mx-0">
            I build web applications that combine functionality, performance, and great design. As a full stack developer, I leverage JavaScript, Python, Node.js, and cloud technologies to deliver seamless, responsive, and impactful digital solutions.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
          <div className="bg-white/90 border border-purple-200 shadow-xl rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition">
            <h3 className="text-lg font-bold mb-2 text-purple-700">About Me</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Experienced in JavaScript, Node.js, Python, and cloud platforms. I thrive on solving challenging problems and collaborating with creative teams.
            </p>
            <Link to="/about" className="text-purple-700 hover:underline font-semibold">
              Learn more &rarr;
            </Link>
          </div>

          <div className="bg-white/90 border border-purple-200 shadow-xl rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition">
            <h3 className="text-lg font-bold mb-2 text-purple-700">Projects</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Explore my portfolio of web apps, APIs, and automation tools. I love bringing ideas to life through code!
            </p>
            <Link to="/projects" className="text-purple-700 hover:underline font-semibold">
              See projects &rarr;
            </Link>
          </div>

          <div className="bg-white/90 border border-purple-200 shadow-xl rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition">
            <h3 className="text-lg font-bold mb-2 text-purple-700">Get in Touch</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Interested in working together or just want to connect? I’d love to hear from you!
            </p>
            <Link to="/contact" className="text-purple-700 hover:underline font-semibold">
              Contact me &rarr;
            </Link>
          </div>

          <div className="bg-white/90 border border-purple-200 shadow-xl rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition">
            <h3 className="text-lg font-bold mb-2 text-purple-700">Certifications</h3>
            <p className="text-gray-600 mb-4 text-sm">
              I hold several certifications in web development, cybersecurity, and cloud technologies.
            </p>
            <Link to="/certifications" className="text-purple-700 hover:underline font-semibold">
              View certifications &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT: Rotating GIFs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-3xl mx-auto">
        {order.map((i, index) => (
          <img
            key={index}
            src={gifData[i].src}
            alt={gifData[i].alt}
            className="w-full aspect-[320/250] object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

    </main>
  );
}


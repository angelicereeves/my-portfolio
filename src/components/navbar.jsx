import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/certifications", label: "Certifications" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-800 via-purple-600 to-gray-900 text-white px-8 py-5 shadow-lg opacity-75">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-300 via-white to-purple-400 bg-clip-text text-transparent drop-shadow">
          Angelica Reeves - Full Stack Developer
        </div>
        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-4 md:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-lg transition 
                ${
                  location.pathname === link.to
                    ? "bg-white/20 text-purple-300 font-bold shadow-inner"
                    : "hover:bg-purple-900 hover:text-purple-200"
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Hamburger Button */}
        <button
          className="md:hidden ml-4 p-2"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 text-purple-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              // X icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu - right aligned */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-end px-4 pt-2 pb-4 bg-gradient-to-r from-purple-800 via-purple-600 to-gray-900 shadow-lg rounded-b-2xl">
          <div className="flex flex-col space-y-1 w-fit ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-3 py-2 rounded-lg text-lg transition mb-1 ${
                  location.pathname === link.to
                    ? "bg-white/20 text-purple-300 font-bold shadow-inner"
                    : "hover:bg-purple-700 hover:text-purple-200"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
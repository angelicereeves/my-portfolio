import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen w-screen bg-gradient-to-br from-white via-purple-100 to-purple-300 flex items-center justify-center px-4">
      <section className="flex flex-col gap-10 w-full max-w-3xl px-6">
        <h1 className="text-5xl font-extrabold text-purple-800 mb-2 mt-0 md:mt-1 md:mb-1 text-left">
          Contact Me
        </h1>
        <p className="text-2xl text-purple-900 font-medium mb-2 max-w-xl text-left">
          I'd love to hear from you! Reach out for projects, collaborations, or just to connect.
        </p>

        <div className="flex flex-col gap-5">
          {[
            {
              icon: <FaEnvelope className="text-2xl text-purple-700" />,
              text: "angelica.a.j.reeves@gmail.com",
              href: "mailto:angelica.a.j.reeves@gmail.com",
            },
            {
              icon: <FaPhoneAlt className="text-2xl text-purple-700" />,
              text: "(702) 677-2556",
              href: "tel:7026772556",
            },
            {
              icon: <FaLinkedin className="text-2xl text-purple-700" />,
              text: "LinkedIn",
              href: "https://www.linkedin.com/in/angelica-reeves-461350365/",
            },
            {
              icon: <FaGithub className="text-2xl text-purple-700" />,
              text: "GitHub",
              href: "https://github.com/angelicereeves",
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 bg-white/80 px-5 py-4 rounded-xl shadow-md hover:shadow-lg hover:bg-white transition duration-300 group"
            >
              {item.icon}
              <span className="text-purple-700 text-xl font-semibold group-hover:underline">
                {item.text}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen w-screen bg-gradient-to-br from-white via-purple-100 to-purple-300 flex items-center justify-center px-0">
      <section className="flex flex-col gap-10 w-full max-w-3xl px-6">
        <h1 className="text-5xl font-extrabold text-purple-800 mb-2 mt-0 md:mt-1 md:mb-6 text-left">
          Contact Me
        </h1>
        <p className="text-2xl text-purple-900 font-medium mb-2 max-w-xl text-left">
          I'd love to hear from you! Reach out for projects, collaborations, or just to connect.
        </p>
        <div className="flex flex-col gap-7 items-start text-left text-2xl">
          <a
            className="text-purple-700 flex items-center gap-3 hover:underline"
            href="mailto:angelica.a.j.reeves@gmail.com"
          >
            <span role="img" aria-label="Email">📧</span>
            angelica.a.j.reeves@gmail.com
          </a>
          <a
            className="text-purple-700 flex items-center gap-3 hover:underline"
            href="tel:2623313340"
          >
            <span role="img" aria-label="Phone">📱</span>
            (262) 331-3340
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 flex items-center gap-3 hover:underline"
          >
            <span role="img" aria-label="LinkedIn">🔗</span>
            LinkedIn
          </a>
          <a
            href="https://github.com/angelicereeves"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 flex items-center gap-3 hover:underline"
          >
            <span role="img" aria-label="GitHub">💻</span>
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
import React from "react";
import {Link} from "react-router-dom";


// Put your GIFs in src/assets/gifs and import them here:
import projectGif1 from "../assets/images/eventCenterSite.gif";
import projectGif2 from "../assets/images/rockfansite.gif";
import projectGif3 from "../assets/images/ecommerce.gif";
import projectGif4 from "../assets/images/pokemon.gif";
import projectGif5 from "../assets/images/fakestore.gif";
import projectGif6 from "../assets/images/quizapp.gif";
import projectGif7 from "../assets/images/todolist.gif";
import projectGif8 from "../assets/images/evilwizard.gif";
//import projectGif9 from "../assets/images/project9.gif";
//import projectGif10 from "../assets/images/project10.gif";
//import projectGif11 from "../assets/images/project11.gif";
//import projectGif12 from "../assets/images/project12.gif";

// Array of project data with gif references
const projectData = [
  {
    title: "Event Center Site",
    description: "Simple website designed for an event center, showcasing HTML and CSS skills.",
    gif: projectGif1,
    link: "/projects/project1"
  },
  {
    title: "Recreated Fan Site",
    description: "A mock fan site for a rock and roll lovers, built with React and CSS.",
    gif: projectGif2,
    link: "/projects/project2"
  },
  
  {
    title: "E-commerce Site",
    description: "A simple online store built with React, showcasing product listings, categories, and a shopping cart.",
    gif: projectGif3,
    link: "/projects/project3"
  },
 
  {
    title: "Pokemon API",
    description: "An application that allows users to search for Pokemon by name or number, built with React.",
    gif: projectGif4,
    link: "/projects/project4"
  },
 
  {
    title: "Fake Store App",
    description: "Simple online store application using React. It features product listings, a shopping cart, and an edit, delete, or add a product feature.",
    gif: projectGif5,
    link: "/projects/project5"
  },
    
  {
    title: "Quiz App",
    description: "A simple and interactive quiz application built with React. The app fetches multiple-choice questions of varying difficulty and topics from an external API.",
    gif: projectGif6,
    link: "/projects/project6"
  },
 
  {
    title: "To Do List App",
    description: "Command line interface to do list allowing users to manage their daily tasks easily.",
    gif: projectGif7,
    link: "/projects/project7"
  },

  {
    title: "Evil Wizard Game",
    description: "A CLI turn based game where players can choose their character and battle against an evil wizard. Built with Python.",
    gif: projectGif8,
    link: "/projects/project8"
  },
     /* Uncomment and fill in more projects as needed
  {
    title: "Project Title 9",
    description: "Short project description goes here. Summarize what it is, or what makes it special.",
    gif: projectGif9,
    link: "#"
  },
  {
    title: "Project Title 10",
    description: "Short project description goes here. Summarize what it is, or what makes it special.",
    gif: projectGif10,
    link: "#"
  },
  {
    title: "Project Title 11",
    description: "Short project description goes here. Summarize what it is, or what makes it special.",
    gif: projectGif11,
    link: "#"
  },
  {
    title: "Project Title 12",
    description: "Short project description goes here. Summarize what it is, or what makes it special.",
    gif: projectGif12,
    link: "#"
  },*/
];

export default function Projects() {
  return (
    <main className="min-h-screen w-screen bg-gradient-to-br from-purple-50 via-white to-purple-200 px-0 py-20 flex flex-col items-center">
      <div className="w-full max-w-6xl px-6">
        <h1 className="text-5xl font-extrabold text-purple-800 mb-6 mt-6 md:mt-0">
          Projects
        </h1>
        <p className="text-xl text-gray-700 mb-12 max-w-2xl">
          Here are some of the projects I've built, contributed to, or dreamt up. Click on any project to learn more!
        </p>
        {/* Grid of project cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col"
            >
              <div className="bg-purple-200 rounded-xl h-44 mb-4 flex items-center justify-center overflow-hidden">
                {/* Project GIF */}
                <img
                  src={project.gif}
                  alt={project.title + " preview"}
                  className="object-cover h-full w-full rounded-xl"
                />
              </div>
              <h2 className="text-2xl font-bold text-purple-800 mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4 flex-1">
                {project.description}
              </p>
              <a
                href={project.link}
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
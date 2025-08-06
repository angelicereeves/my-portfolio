import React from "react";
import { Link } from "react-router-dom";

import projectGif1 from "../assets/images/eventCenterSite.gif";
import projectGif2 from "../assets/images/rockfansite.gif";
import projectGif3 from "../assets/images/ecommerce.gif";
import projectGif4 from "../assets/images/pokemon.gif";
import projectGif5 from "../assets/images/fakestore.gif";
import projectGif6 from "../assets/images/quizapp.gif";
import projectGif7 from "../assets/images/todolist.gif";
import projectGif8 from "../assets/images/evilwizard.gif";
import projectGif9 from "../assets/images/project9.gif";
import projectGif10 from "../assets/images/project10.gif";
import projectGif11 from "../assets/images/project11.gif";
import projectGif12 from "../assets/images/project12.gif";

const projectData = [
  { title: "Vic's Training App", description: "Built with React for a restaurant, this project showcases a virtual training environment for users to improve their skills.", gif: projectGif12, link: "/projects/project12" },
  { title: "Explore Mauritius", description: "Built with React, this project showcases a virtual tour of Mauritius, highlighting its beautiful landscapes, culture, and attractions.", gif: projectGif11, link: "/projects/project11" },
  { title: "Harry Potter Sorting Quiz", description: "Built with React, this interactive quiz allows users to answer questions and get sorted into one of the four Hogwarts houses.", gif: projectGif10, link: "/projects/project10" },
  { title: "Scooby Doo Battle Game", description: "A multi-player turn based game based on the Scooby Doo universe. Players can choose their character and unmask the masked villan. Built with Python.", gif: projectGif9, link: "/projects/project9" },
  { title: "Evil Wizard Game", description: "A CLI turn based game where players can choose their character and battle against an evil wizard. Built with Python.", gif: projectGif8, link: "/projects/project8" },
  { title: "To Do List App", description: "Command line interface to do list allowing users to manage their daily tasks easily.", gif: projectGif7, link: "/projects/project7" },
  { title: "Quiz App", description: "A simple and interactive quiz application built with React. The app fetches multiple-choice questions of varying difficulty and topics from an external API.", gif: projectGif6, link: "/projects/project6" },
  { title: "Fake Store App", description: "Simple online store application using React. It features product listings, a shopping cart, and an edit, delete, or add a product feature.", gif: projectGif5, link: "/projects/project5" },
  { title: "Pokemon API", description: "An application that allows users to search for Pokemon by name or number, built with React.", gif: projectGif4, link: "/projects/project4" },
  { title: "E-commerce Site", description: "A simple online store built with React, showcasing product listings, categories, and a shopping cart.", gif: projectGif3, link: "/projects/project3" },
  { title: "Recreated Fan Site", description: "A mock fan site for a rock and roll lovers, built with React and CSS.", gif: projectGif2, link: "/projects/project2" },
  { title: "Event Center Site", description: "Simple website designed for an event center, showcasing HTML and CSS skills.", gif: projectGif1, link: "/projects/project1" }
];

export default function Projects() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-gradient-to-br from-purple-50 via-white to-purple-200 py-[5rem] flex flex-col items-center">
      <div className="w-full max-w-[96rem] px-[1.5rem]">
        <h1 className="text-[3rem] font-extrabold text-purple-800 mb-[1.5rem] mt-[1.5rem] md:mt-0">
          Projects
        </h1>
        <p className="text-[1.25rem] text-gray-700 mb-[3rem] max-w-[42rem]">
          Here are some of the projects I've built, contributed to, or dreamt up. Click on any project to learn more!
        </p>
        <div className="grid gap-[2rem] sm:grid-cols-2 lg:grid-cols-3 w-full">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white/90 rounded-[1rem] shadow-md hover:shadow-2xl transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out p-[1.5rem] flex flex-col w-full"
            >
              <div className="bg-purple-200 rounded-[0.75rem] h-[11rem] mb-[1rem] flex items-center justify-center overflow-hidden w-full">
                <img
                  src={project.gif}
                  alt={`${project.title} preview`}
                  className="object-cover h-full w-full rounded-[0.75rem] transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>
              <h2 className="text-[1.5rem] font-bold text-purple-800 mb-[0.5rem]">
                {project.title}
              </h2>
              <p className="text-gray-700 mb-[1rem] flex-1">{project.description}</p>
              <Link
                to={project.link}
                className="inline-block mt-auto text-purple-700 font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

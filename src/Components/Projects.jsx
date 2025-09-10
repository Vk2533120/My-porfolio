import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export const PROJECTS = [
    {
        title: "Recipe Discovery App",
        image: "/images/recipes.png",
        description: "A recipe search and filter application where users can explore delicious recipes, filter by category or ingredient, and mark favorites. Features a responsive layout and user-friendly design for food lovers.",
        technologies: ["React", "Tailwind CSS","MongoDB","Express",],
        url: "https://recipe123-app.netlify.app/"
    },
    {
      "title": "FitnessHub – Fitness Class Booking Dashboard",
      image: "/images/dashboard.png",
      "url": "https://fitness123app.netlify.app/",
      "description": "A fitness management web app that allows users to explore classes, make bookings, add new classes, view trainer profiles, and provide feedback. Built for both trainers and fitness enthusiasts with a colorful, intuitive interface.",
      "technologies": ["MongoDB", "Express", "React", "Node.js"]
    },
    {
      "title": "Secure Account Management System",
      image: "/images/login-page.png",
      "url": "https://password-123reset-frontend.netlify.app/",
      "description": "A secure user authentication platform with features for account registration, login, and password reset. Designed with a clean UI to ensure a seamless and safe user experience for account management.",
      "technologies": ["MongoDB", "Express", "React", "Node.js"]
    },
    {
      "title": "Blog Website",
      image: "/images/blog.PNG",
      "url": "https://blog123-site.netlify.app/",
      "description": "A blogging platform where logged-in users can create and manage their blogs. Users can edit only their own blogs, ensuring secure and personalized content management.",
      "technologies": ["MongoDB", "Express", "React", "Node.js"]
    },
    {
      "title": "Chat App",
      image: "/images/chatapp.png",
      "url": "https://chat1230app.netlify.app/",
      "description": "The 'Chat Website' project is a dynamic web application that is used for real-time communication. The MERN stack, comprised of MongoDB, Express.js, React.js, and Node.js, is a powerful combination of technologies for developing robust and scalable web applications. In this article, we'll explore the process of building a real-time chat website using the MERN stack, allowing users to do instant conversations.",
      "technologies": ["MongoDB", "Express", "React", "Node.js"]
    }
  ]
  

const Projects = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return(
        <section >
          <h2 className="mb-8 text-center text-4xl font-bold">Projects</h2>
          <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className="rounded-lg p-4 shadow-lg transform transition duration-500 hover:scale-105"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-4 h-40 w-full rounded object-cover"
                  />
                </a>
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((item, index) => (
                    <span
                      key={index}
                      className="rounded bg-gray-700 px-2 py-1 text-sm text-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-blue-500"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>
      );
    };
    
export default Projects;

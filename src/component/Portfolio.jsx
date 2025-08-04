import React, { useState } from "react";

function Portfolio() {

  const projects = [
    { src: "https://i.pinimg.com/1200x/d9/ef/49/d9ef49255cce5efa001424eda0cf64d9.jpg", label: "Kind Heart Charity", description: "Heart Charity Organization website using HTML and Tailwind CSS", github: "https://github.com/rishikesh094/w3villa-intern-projects/tree/main/Charity%20Organisation", demo: "https://heart-charity.netlify.app/" },
    { src: "https://i.pinimg.com/736x/95/27/90/952790a5db56061e9fb56c78ec90a9c8.jpg", label: "Expense Tracker", description: "A Full Stack Expense Tracker Web Application using MERN Stack", github: "https://github.com/rishikesh094/expense-tracker", demo: "https://expense-tracker-pz8m.onrender.com" },
    { src: "https://i.pinimg.com/1200x/96/13/8d/96138d13188d756e853f0825a1ffdddd.jpg", label: "Task Manager Application", description: "A React-based Task Manager application using Appwrite (a BaaS – Backend as a Service) for backend operations.", github: "https://github.com/rishikesh094/w3villa-intern-projects/tree/main/react-task", demo: "https://task-manager-app-522j.onrender.com/" },
    { src: "assets/portfolio/textifyit.png", label: "TextifyIt", description: "TextifyIt: Simplifying text transformation and enhancement tool.", github: "https://github.com/rishikesh094/TextifyIt", demo: "https://textifyit-app.netlify.app/" },
    { src: "https://i.pinimg.com/736x/2b/6c/51/2b6c5188f1db3427ffa4d4e6940d656c.jpg", label: "Password Generator", description: "A React-based password generator that creates customizable, secure passwords.", github: "https://github.com/rishikesh094/Password-Generator" },


  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleOverlay = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="portfolio" className="w-full flex flex-col justify-center items-center">

      <div className="bg-[url('assets/portfolio/PortfolioBG.jpg')] flex justify-center items-center w-full bg-cover bg-no-repeat">
        <h1 className="uppercase text-2xl tracking-widest border-b-4 border-gray-500 font-bold px-10 py-4 my-10">
          Portfolio
        </h1>
      </div>

      {/* Project Grid Section */}
      <div className="bg-gray-900 flex flex-col items-center md:space-y-10 py-4">
        <div className="w-full h-[70%] grid grid-cols-1 md:grid-cols-2 gap-2 bg-black p-1">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden group cursor-pointer"
              onClick={() => toggleOverlay(index)}
            >
              <img
                src={project.src}
                alt={project.label}
                className="w-full h-full object-cover"
              />

               <div
                className={`absolute inset-0 bg-[rgba(0,0,0,0.85)] text-white flex justify-center flex-col items-center text-center px-4 transition-opacity duration-300
                ${activeIndex === index ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}`}
              >
                <span className="text-sm my-2">Coded</span>
                <h2 className="md:text-4xl text-2xl font-bold tracking-widest my-2">
                  {project.label}
                </h2>
                <p className="md:text-md text-sm my-2 w-full md:w-3/4 text-center">
                  {project.description}
                </p>
                <div className="w-3/4 flex justify-center gap-14 mt-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="border-x-2 px-4 hover:bg-white hover:text-black transition-all duration-200"
                    >
                      Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    className="border-x-2 px-4 hover:bg-white hover:text-black transition-all duration-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-white flex justify-center items-center w-full">And many more to come! 😊</p>
      </div>
    </div>
  );
}

export default Portfolio;

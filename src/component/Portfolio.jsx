import React, { useState } from "react";

function Portfolio() {
  const projects = [
    { src: "assets/portfolio/geolocation.jpg", label: "Current Location", description: "Basic JavaScript application using API" },
    { src: "assets/portfolio/geolocation.jpg", label: "Current Location", description: "Basic JavaScript application using API" },
    { src: "assets/portfolio/geolocation.jpg", label: "Current Location", description: "Basic JavaScript application using API" },
    { src: "assets/portfolio/geolocation.jpg", label: "Current Location", description: "Basic JavaScript application using API" },
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
                className={`absolute inset-0 bg-[rgba(0,0,0,0.9)] text-white flex justify-center flex-col items-center transition-opacity duration-300
                ${activeIndex === index ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}`}
              >
                <span className="text-sm my-2">Coded</span>
                <h2 className="md:text-4xl text-2xl font-bold tracking-widest my-2">{project.label}</h2>
                <p className="md:text-md text-sm my-2">{project.description}</p>
                <div className="w-1/2 flex justify-between my-8">
                  <button className="border-x-2 px-4 hover:bg-white hover:text-black">Demo</button>
                  <button className="border-x-2 px-4 hover:bg-white hover:text-black">Github</button>
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

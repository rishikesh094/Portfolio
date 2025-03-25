import React, { useState, useEffect } from "react";
import navLogo from '../assets/navLogo.png';

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className={`fixed w-full text-white top-0 z-10 md:h-18 h-14 transition-all duration-300 
            ${isScrolled ? "bg-black" : "md:bg-transparent bg-[rgba(0,0,0,0.5)]"}`}>

            <div className="container flex justify-between mx-auto items-center">
                <img 
                    src={navLogo} 
                    alt="Logo" 
                    className={`md:h-20 h-14 transition-all duration-300 invert`} 
                />

                <div className="hidden md:flex w-1/2 justify-center items-center space-x-14 pl-10">
                    <button onClick={() => scrollToSection("about")} className="hover:scale-105 hover:text-gray-200 transition">About</button>
                    <button onClick={() => scrollToSection("skills")} className="hover:scale-105 hover:text-gray-200 transition">Skills</button>
                    <button onClick={() => scrollToSection("portfolio")} className="hover:scale-105 hover:text-gray-200 transition">Portfolio</button>
                    <button onClick={() => scrollToSection("contact")} className="bg-white py-2 px-4 rounded-3xl font-bold text-black hover:bg-gray-100 transition">CONTACT ME</button>
                </div>

                <button className="md:hidden text-2xl mx-4" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </div>

            {isOpen && (
                <div className={`md:hidden flex flex-col items-center py-4 space-y-10 text-white w-full ${isScrolled ? "bg-black" : "bg-[rgba(0,0,0,0.5)]"}`}>
                    <button onClick={() => scrollToSection("about")} className="hover:text-gray-400 py-2">About</button>
                    <button onClick={() => scrollToSection("skills")} className="hover:text-gray-400 py-2">Skills</button>
                    <button onClick={() => scrollToSection("portfolio")} className="hover:text-gray-400 py-2">Portfolio</button>
                    <button onClick={() => scrollToSection("contact")} className="hover:text-gray-400 py-2 text-black bg-white w-full text-center font-bold">Contact</button>
                </div>
            )}
        </nav>
    );
}

export default NavBar;

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-800 text-white p-6 flex flex-col justify-center items-center relative">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="text-white py-8 flex flex-col justify-center items-center cursor-pointer"
        >
          <MdKeyboardDoubleArrowUp size={20} />
          <span className="uppercase tracking-widest">Back to top</span>
        </button>
      )}
      <div className="flex justify-center gap-4 mb-4">
        <a href="#" className="text-gray-300 hover:text-white text-xl"><FaFacebook size={30}/></a>
        <a href="#" className="text-gray-300 hover:text-white text-xl"><FaXTwitter size={30}/></a>
        <a href="#" className="text-gray-300 hover:text-white text-xl"><FaInstagram size={30}/></a>
        <a href="#" className="text-gray-300 hover:text-white text-xl"><FaLinkedin size={30}/></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Rishikesh Singh. All rights reserved.</p>
    </footer>
  );
}

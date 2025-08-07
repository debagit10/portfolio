import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-[15px] m-2 px-6 py-3 text-white">
      <div className="flex justify-between items-center h-[70px] md:h-[100px]">
        {/* Logo */}
        <img
          src="/deba_logo.png"
          alt="Logo"
          className="w-[10rem] md:w-[12rem]"
        />

        {/* Hamburger menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex space-x-6 items-center text-xl">
          {["about", "projects", "contact"].map((item) => (
            <a key={item} href={`#${item}`}>
              <li className="group relative cursor-pointer capitalize">
                {item}
                <span className="absolute -bottom-[5px] left-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:-translate-x-1/2"></span>
              </li>
            </a>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col mt-4 space-y-4 text-center text-lg">
          {["about", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsOpen(false)}
              className="hover:underline"
            >
              <li className="capitalize">{item}</li>
            </a>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

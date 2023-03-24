import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const links = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Portfolio" },
    { id: 4, name: "Projects" },
    { id: 5, name: "Contact" },
  ];
  const [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between items-center h-20 w-full px-4 text-white bg-black">
      <div className="font-signature text-4xl px-4">Roshan</div>
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer font-medium hover:text-white text-gray-300 hover:scale-105 duration-200"
          >
            {link.name}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="text-gray-300 z-10 pr-4 cursor-pointer flex md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-[50%] h-screen bg-gradient-to-b from-black to-gray-700 text-gray-400">
          {links.map((link) => (
            <li
              key={link.id}
              className="px-4 py-6 text-xl cursor-pointer font-semibold "
            >
              {link.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

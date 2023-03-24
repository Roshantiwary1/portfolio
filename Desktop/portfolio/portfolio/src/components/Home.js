import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center  h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-10 md:mt-0">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am an passionate and self learned programmer. I am interested in
            working with new technology and building projects. I have experince
            in making many industry level projects by using React.js, Tailwind,
            Firebase and others.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mx-auto mb-5 md:mx-0"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl md:mx-[30%] mx-[20%] w-2/3 md:w-[90%] mb-10 hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

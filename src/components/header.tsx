import { NavLink } from "react-router-dom";
import logo from "../assets/favicon.png";
import cv from "../assets/cv.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function setbg() {
    if (window.scrollY >= 5) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  }

  window.addEventListener("scroll", setbg);
  return (
    <div
      className={`${navBg ? "bg-black" : "bg-transparent"} ${
        open && navBg ? "bg-black" : null
      } text-white lg:flex justify-between p-5 px-[2rem] items-center transition-all duration-500`}
    >
      <div className="left cursor-pointer">
        <NavLink
          to={"/"}
          className=" flex items-center hover:scale-95 transition-all duration-500"
        >
          <img src={logo} alt="logo" className="w-20 h-auto mr-5" />
          <span className="text-xl">KENNEDY MUINDE</span>{" "}
        </NavLink>
      </div>{" "}
      <div
        className="absolute right-10 top-10 lg:hidden"
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={open ? faXmark : faBars} />
      </div>
      <div className="right">
        <ul
          className={` lg:flex lg:space-x-10 text-lg z-[-1] lg:z-auto absolute top-0 pt-[90px] lg:pt-0 lg:static lg:mt-0 w-full lg:w-auto left-0 pl-5 lg:pl-0 opacity-0 lg:opacity-100 bg-black lg:bg-transparent transition-all duration-500 ${
            open ? "opacity-100" : null
          }`}
        >
          <li className="my-4 px-3 rounded-md hover:bg-orange-500 hover:text-black transition-all duration-500">
            <NavLink to={"/"} className="inline">
              <button onClick={scrollToTop}>HOME</button>
            </NavLink>
          </li>
          <li className="my-4 px-3 rounded-md hover:bg-orange-500 hover:text-black transition-all duration-500">
            <a href="#projects">PROJECTS</a>
          </li>
          <li className="my-4 px-3 rounded-md hover:bg-orange-500 hover:text-black transition-all duration-500">
            <a href="#contacts">CONTACTS</a>
          </li>
          <li className="bg-orange-500 p-2 m-2 rounded-md hover:bg-orange-400 hover:scale-95 transition-all duration-300 inline">
            <a href={cv} download>
              DOWNLOAD CV
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

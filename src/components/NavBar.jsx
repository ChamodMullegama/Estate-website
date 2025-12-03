import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        {/* LOGO */}
        <img src={assets.logo} alt="logo" />

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#project" className="cursor-pointer hover:text-gray-400">
            Project
          </a>
          <a
            href="#testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </a>
        </ul>

        {/* DESKTOP BUTTON */}
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>

        {/* MOBILE MENU ICON */}
        <img
          src={assets.menu_icon}
          alt="menu"
          className="md:hidden w-6 h-6 cursor-pointer"
          onClick={() => setShowMobileMenu(true)}
        />
      </div>

      {/* MOBILE SLIDE MENU */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 bg-white overflow-hidden transition-all duration-300
        ${showMobileMenu ? "w-full" : "w-0"}`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt="close"
          />
        </div>

        {/* MOBILE LINKS */}
        <ul className="flex flex-col items-center gap-4 mt-5 mx-5 text-lg font-medium">
          <a
            onClick={() => setShowMobileMenu(true)}
            href="#header"
            className="px-4 py-2 rounded-full"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(true)}
            href="#about"
            className="px-4 py-2 rounded-full"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(true)}
            href="#project"
            className="px-4 py-2 rounded-full"
          >
            Project
          </a>
          <a
            onClick={() => setShowMobileMenu(true)}
            href="#testimonials"
            className="px-4 py-2 rounded-full"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

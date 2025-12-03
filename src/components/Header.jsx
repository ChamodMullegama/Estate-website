import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center width-full overflow-hidden"
      style={{ backgroundImage: "url(/header_img.png)" }}
      id="Header"
    >
      <NavBar />
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-[900px] font-semibold placeholder-slate-200">
          Explore homes that fit your dreames
        </h2>
        <div className="space-x-6 mt-16">
          <a href="" className="border border-white px-8 py-3 rounded">
            Projects
          </a>
          <a href="" className="bg-blue-500 px-8 py-3 rounded">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

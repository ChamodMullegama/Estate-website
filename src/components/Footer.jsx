import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="footer"
    >
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo & Description */}
        <div className="w-full md:w-1/3">
          <img src={assets.logo_dark} alt="Estate Logo" />
          <p className="text-gray-400 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cum
            obcaecati voluptate, ipsam impedit consequuntur doloribus adipisci
            nobis, earum fugiat minus porro, dolore quam nemo cumque? Laborum
            quod nemo culpa.
          </p>
        </div>

        {/* Company Links */}
        <div className="w-full md:w-1/5">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col space-y-2 text-gray-400">
            <li>
              <a href="#header" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-white transition">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-sm">
            The latest news, articles, and resources will be sent to your inbox
            weekly.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none focus:border-blue-500 w-full"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-medium transition w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        © 2025 Estate. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

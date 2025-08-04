"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaCube,
  FaSearch,
  FaTshirt,
  FaMobileAlt,
  FaGamepad,
  FaPalette,
  FaBoxOpen,
  FaMagic,
  FaFont,
  FaIcons,
  FaFilm,
  FaSlidersH,
  FaPlayCircle,
  FaHeadset,
  FaTrophy,
  FaBars,
  FaChevronDown,
  FaHome,
} from "react-icons/fa";

const sections = [
  {
    title: "Mockups",
    iconMap: {
      Apparel: <FaTshirt />,
      "Tech Devices": <FaMobileAlt />,
      "Home & Living": <FaHome />,
    },
  },
  {
    title: "Designs",
    iconMap: {
      "Graphic Templates": <FaPalette />,
      "Apparel Designs": <FaTshirt />,
      Packaging: <FaBoxOpen />,
    },
  },
  {
    title: "Logos",
    iconMap: {
      "AI Logo Maker": <FaMagic />,
      "Text Logos": <FaFont />,
      "Icon Logos": <FaIcons />,
    },
  },
  {
    title: "Videos",
    iconMap: {
      "Video Mockups": <FaFilm />,
      Slideshows: <FaSlidersH />,
      "Intros/Outros": <FaPlayCircle />,
    },
  },
  {
    title: "Gaming",
    iconMap: {
      "Stream Overlays": <FaGamepad />,
      "Gaming Logos": <FaHeadset />,
      "Esports Branding": <FaTrophy />,
    },
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <FaCube className="text-white text-lg" />
            </div>
            <span className="text-xl font-bold">
              MOCKUP
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                PRO
              </span>
            </span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8 relative">
            <input
              type="text"
              placeholder="Search for mockups (t-shirts, logos, phones...)"
              className="w-full pl-5 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400"
            />
            <button className="absolute right-3 top-3 text-gray-500 hover:text-indigo-500">
              <FaSearch />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {sections.map((sec) => (
              <div key={sec.title} className="group relative">
                <button className="flex items-center text-gray-800 hover:text-indigo-500 font-medium transition">
                  {sec.title}
                  <FaChevronDown className="ml-2 text-xs mt-0.5" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl z-50 border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                  <div className="p-2">
                    {Object.entries(sec.iconMap).map(([label, icon]) => (
                      <Link
                        key={label}
                        href="#"
                        className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-100 rounded-lg flex items-center transition"
                      >
                        {/* {React.cloneElement(icon, {
                          className: "text-indigo-500 mr-3",
                        })} */}
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Right Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="text-gray-800 hover:text-indigo-500 font-medium transition"
              >
                Log In
              </Link>
              <Link
                href="#"
                className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium transition shadow-md hover:opacity-90 hover:shadow-lg"
              >
                Sign Up Free
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-800 hover:text-indigo-500 focus:outline-none"
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute top-full left-0 right-0 z-50 border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative mb-2">
              <input
                type="text"
                placeholder="Search mockups..."
                className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400"
              />
              <button className="absolute right-3 top-3 text-gray-500">
                <FaSearch />
              </button>
            </div>

            {/* Mobile Accordion Menus */}
            {sections.map((sec) => (
              <Accordion
                key={sec.title}
                title={sec.title}
                items={sec.iconMap}
              />
            ))}

            <div className="pt-4 border-t border-gray-200">
              <Link
                href="#"
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-800 hover:bg-gray-100 transition"
              >
                Log In
              </Link>
              <Link
                href="#"
                className="block px-4 py-3 rounded-lg text-base font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 mt-2 text-center shadow-md hover:shadow-lg transition"
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function Accordion({ title, items }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium text-gray-800 hover:bg-gray-100 transition"
      >
        <span>{title}</span>
        <FaChevronDown
          className={`text-xs transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="pl-6 pr-4">
          {Object.keys(items).map((label) => (
            <Link
              key={label}
              href="#"
              className="block py-2 text-sm text-gray-600 hover:text-indigo-500"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

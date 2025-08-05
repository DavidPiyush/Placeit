"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  FaCube,
  FaSearch,
  FaTshirt,
  FaMobileAlt,
  FaGamepad,
  FaMagic,
  FaFont,
  FaIcons,
  FaPlayCircle,
  FaHeadset,
  FaTrophy,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaHome,
  FaGem,
  FaCoffee,
  FaDollarSign,
  FaUsers,
  FaBook,
  FaLightbulb,
  FaEnvelope,
} from "react-icons/fa";

const popularSearches = [
  {
    term: "T-Shirt Mockups",
    icon: <FaTshirt className="text-indigo-500 mr-2" />,
  },
  { term: "Mug Designs", icon: <FaCoffee className="text-indigo-500 mr-2" /> },
  {
    term: "Phone Cases",
    icon: <FaMobileAlt className="text-indigo-500 mr-2" />,
  },
  {
    term: "Gaming Assets",
    icon: <FaGamepad className="text-indigo-500 mr-2" />,
  },
];

const navSections = [
  {
    title: "Products",
    items: [
      { label: "Apparel", icon: <FaTshirt className="text-indigo-500 mr-3" /> },
      {
        label: "Tech Devices",
        icon: <FaMobileAlt className="text-indigo-500 mr-3" />,
      },
      {
        label: "Home & Living",
        icon: <FaHome className="text-indigo-500 mr-3" />,
      },
      { label: "Jewelry", icon: <FaGem className="text-indigo-500 mr-3" /> },
    ],
  },
  {
    title: "Templates",
    items: [
      {
        label: "Social Media",
        icon: <FaFont className="text-indigo-500 mr-3" />,
      },
      { label: "Logos", icon: <FaMagic className="text-indigo-500 mr-3" /> },
      { label: "Icons", icon: <FaIcons className="text-indigo-500 mr-3" /> },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        label: "Tutorials",
        icon: <FaPlayCircle className="text-indigo-500 mr-3" />,
      },
      { label: "Guides", icon: <FaBook className="text-indigo-500 mr-3" /> },
      { label: "Blog", icon: <FaFont className="text-indigo-500 mr-3" /> },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", icon: <FaUsers className="text-indigo-500 mr-3" /> },
      {
        label: "Careers",
        icon: <FaLightbulb className="text-indigo-500 mr-3" />,
      },
      {
        label: "Contact",
        icon: <FaEnvelope className="text-indigo-500 mr-3" />,
      },
    ],
  },
];

const MobileAccordion = ({ title, items, onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-3 text-left font-medium text-gray-800 focus:outline-none hover:text-indigo-600 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <FaChevronDown
          className={`text-xs transition-transform duration-200 ${
            isOpen ? "rotate-180 text-indigo-600" : "text-gray-500"
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="pb-2">
          {items.map((item) => (
            <Link
              key={item.label}
              href="#"
              className="flex items-center py-2 px-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200"
              onClick={onLinkClick}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = (item) => {
    setClickedItem(item);
    setTimeout(() => setClickedItem(null), 300);
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSearchSuggestions(e.target.value.length > 0);
  };

  const handleDropdownToggle = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <nav
      ref={navRef}
      className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md transition-all duration-200"
              aria-label="Home"
              onClick={() => handleLinkClick("logo")}
            >
              <div
                className={`w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:rotate-12 ${
                  clickedItem === "logo" ? "scale-90" : ""
                }`}
              >
                <FaCube className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold">
                MOCKUP
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  PRO
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Desktop Search with Suggestions */}
            <div ref={searchRef} className="relative flex-1 max-w-md mx-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for mockups..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400 transition-all duration-200 hover:border-gray-300"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setShowSearchSuggestions(true)}
                />
                {showSearchSuggestions && (
                  <div className="absolute z-50 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden animate-fadeIn">
                    <div className="py-2">
                      <h3 className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Popular Searches
                      </h3>
                      {popularSearches.map((search) => (
                        <Link
                          key={search.term}
                          href="#"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-150"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setSearchQuery(search.term);
                            setShowSearchSuggestions(false);
                          }}
                        >
                          {search.icon}
                          {search.term}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Menu Items */}
            {navSections.map((section) => (
              <div key={section.title} className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown(section.title)}
                  onClick={() => handleDropdownToggle(section.title)}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeDropdown === section.title
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
                  aria-expanded={activeDropdown === section.title}
                  aria-haspopup="true"
                >
                  <span>{section.title}</span>
                  <FaChevronDown
                    className={`ml-1 text-xs transition-transform duration-200 ${
                      activeDropdown === section.title ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-lg z-50 border border-gray-200 transition-all duration-200 origin-top ${
                    activeDropdown === section.title
                      ? "scale-100 opacity-100 visible"
                      : "scale-95 opacity-0 invisible"
                  }`}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.label}
                        href="#"
                        className={`flex items-center px-4 py-2 text-sm text-gray-700 transition-all duration-150 ${
                          clickedItem === item.label
                            ? "bg-indigo-100"
                            : "hover:bg-indigo-50"
                        } hover:text-indigo-600`}
                        onClick={() => handleLinkClick(item.label)}
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Pricing Link */}
            <Link
              href="#"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                clickedItem === "pricing"
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
              }`}
              onClick={() => handleLinkClick("pricing")}
            >
              <div className="flex items-center">Pricing</div>
            </Link>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3 ml-2">
              <Link
                href="login"
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  clickedItem === "login"
                    ? "bg-gray-100"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                }`}
                onClick={() => handleLinkClick("login")}
              >
                Log In
              </Link>
              <Link
                href="signup"
                className={`relative px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${
                  clickedItem === "signup" ? "transform scale-95" : ""
                }`}
                onClick={() => handleLinkClick("signup")}
              >
                <span className="relative z-10">Sign Up</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md p-1 transition-all duration-200"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <FaTimes className="h-6 w-6 transform rotate-180 transition-transform duration-300" />
              ) : (
                <FaBars className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 border-t border-gray-200 bg-gray-50">
          {/* Mobile Search */}
          <div ref={searchRef} className="relative">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search mockups..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setShowSearchSuggestions(true)}
              />
              {showSearchSuggestions && (
                <div className="absolute z-50 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden animate-fadeIn">
                  <div className="py-2">
                    <h3 className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Popular
                    </h3>
                    {popularSearches.map((search) => (
                      <Link
                        key={search.term}
                        href="#"
                        className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-150"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setSearchQuery(search.term);
                          setShowSearchSuggestions(false);
                          setMobileOpen(false);
                        }}
                      >
                        {search.icon}
                        {search.term}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Items */}
          {navSections.map((section) => (
            <MobileAccordion
              key={section.title}
              title={section.title}
              items={section.items}
              onLinkClick={handleLinkClick}
            />
          ))}

          {/* Mobile Pricing Link */}
          <Link
            href="#"
            className="flex items-center px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200 border-b border-gray-200"
            onClick={() => handleLinkClick("pricing")}
          >
            <FaDollarSign className="text-indigo-500 mr-3" />
            Pricing
          </Link>

          {/* Mobile Auth Buttons */}
          <div className="pt-2 space-y-3">
            <Link
              href="login"
              className="block px-4 py-3 text-center text-gray-700 bg-white border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
              onClick={() => handleLinkClick("login")}
            >
              Log In
            </Link>
            <Link
              href="signup"
              className="block px-4 py-3 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              onClick={() => handleLinkClick("signup")}
            >
              Sign Up Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

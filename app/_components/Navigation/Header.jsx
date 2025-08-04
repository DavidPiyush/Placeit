"use client";

import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import Logo from "../Logo";
 // Keep if using this toggle

export default function Header() {
  return (
    <header className="bg-white shadow-sm dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between py-4 gap-6 flex-wrap md:flex-nowrap">
          {/* Logo */}
          <div>
            <Logo />
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-[450px]">
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                <BiSearch />
              </span>
              <input
                type="text"
                placeholder="Search mockups..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Navigation & Auth */}
          <div className="flex items-center gap-6 flex-wrap justify-center md:justify-end">
            {/* Navigation Links */}
            <nav className="flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
              {["Home", "Mockup", "Design", "Logos"].map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="hover:underline hover:text-teal-500 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Auth Buttons */}
            <div className="flex gap-4">
              <button className="text-sm text-gray-600 dark:text-gray-300 hover:text-teal-500">
                Login
              </button>
              <button className="text-sm bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors">
                Sign Up
              </button>
              {/* <ColorModeButton /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

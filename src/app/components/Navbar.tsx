"use client";

import React from "react";
import { FiSearch, FiBell } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-6 py-4 rounded-xl shadow-sm">
      <div className="flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-10">
          {/* Placeholder for logo */}
          <div>
            <a href="/" className="text-xl font-bold flex items-center gap-2">
              <img src="/drone.png" alt="App Logo" width={40} height={40} className="h-10 w-auto" />
            </a>
          </div>


          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <button className="px-3 py-1 rounded-lg bg-white/10 text-white">
              Dashboard
            </button>
            <button className="hover:text-gray-300">Products</button>
            <button className="hover:text-gray-300">Contact</button>
            <button className="hover:text-gray-300">Regulations</button>
          </div>
        </div>

        {/* Search Bar (center on large screens) */}
        <div className="hidden lg:flex flex-1 justify-center">
          <div className="relative w-[350px]">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#1F2A3C] text-sm text-gray-300 pl-10 pr-3 py-2 rounded-lg border border-gray-700 outline-none focus:ring-1 focus:ring-indigo-400"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* Bell Icon with Tooltip */}
          <div className="relative group">
            <FiBell className="text-xl text-gray-300 cursor-pointer hover:text-white" />

            {/* Tooltip */}
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 transition">
              Enable notifications
            </span>
          </div>

          {/* Login Button */}
          <button className="px-4 py-1 bg-blue-900 text-white rounded-md hover:bg-blue-800">
            Login
          </button>
        </div>
      </div>

      {/* Search Bar visible on small screens */}
      <div className="flex lg:hidden mt-4">
        <div className="relative w-full">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#1F2A3C] text-sm text-gray-300 pl-10 pr-3 py-2 rounded-lg border border-gray-700 outline-none focus:ring-1 focus:ring-indigo-400"
          />
        </div>
      </div>
    </nav>
  );
}

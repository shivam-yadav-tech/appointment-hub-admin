import React from "react";
import { Menu, ChevronDown, User } from "lucide-react";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="w-full h-20 bg-[#f1f1f1] border-b border-gray-300 flex items-center justify-between px-6">

      {/* Left Section */}
      <div className="flex items-center gap-5">

        {/* Menu Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="w-12 h-12 rounded-xl bg-gray-600 text-white flex items-center justify-center shadow-md border-4 border-gray-300"
        >
          <Menu size={22} />
        </button>

        {/* Title */}
        <h1 className="text-[20px] md:text-[22px] font-bold text-black">
          Admin Panel
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">

        <span className="text-gray-600 text-[18px] font-medium">
          Admin
        </span>

        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
          <User size={18} />
        </div>

        {/* Dropdown Icon */}
        <ChevronDown size={18} className="text-blue-500" />
      </div>
    </header>
  );
};

export default Header;
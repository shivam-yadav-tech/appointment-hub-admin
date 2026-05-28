import {
  Home,
  Users,
  CreditCard,
  LogOut,
  IdCard
} from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logo from "../assets/images/logo.png";

export default function Sidebar({ sidebarOpen }) {
  const navigate = useNavigate(); 
  const handleLogout = () => {
    console.log("Logout clicked");
    localStorage.removeItem("token"); // Login status ko localStorage se remove karo
   navigate("/Login");
  }
  return (
    <div
      className={`
        bg-[#0e5a7a] text-white flex flex-col
        h-screen fixed left-0 top-0 z-50
        transition-all duration-300

        ${sidebarOpen ? "w-65" : "w-0 overflow-hidden"}
      `}
    >

      {/* Logo */}
      <div className="py-4 flex justify-center bg-white">
        <img
          src={logo}
          alt="logo"
          className="w-52 h-20 object-contain"
        />
      </div>

      {/* Menu */}
      <div className="flex-1 px-4 py-6 space-y-4">

        {/* Dashboard */}
        <Link to="/dashboard">
        <div className="flex items-center gap-3 bg-linear-to-r from-[#3a7ca5] to-[#2a6f97] p-3 rounded-xl cursor-pointer">
           <Home size={24} />
          <span className="text-lg font-bold">
            Dashboard
          </span>
        </div>
        </Link>

        {/* Service Partners */}
        <Link to= "/service-partner">
        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#1c6b8c] cursor-pointer">
          <Users size={24} />
          <span className="font-bold text-lg">
            Service Partners
          </span>
        </div>
        </Link>

        {/* Membership */}
        <Link to="/Membership-List">
        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#1c6b8c] cursor-pointer">
          <IdCard size={24} />
          <span className="font-bold text-lg">
            Membership Plans
          </span>
        </div>
        </Link>

        {/* Payments */}
        <Link to="/PaymentsTable">
        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#1c6b8c] cursor-pointer">
          <CreditCard size={24} />
          <span className="font-bold text-lg">
            Payments
          </span>
        </div>
        </Link>
      </div>

      {/* Logout */}
      <div className="px-4 pb-6" onClick={handleLogout}>
        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#1c6b8c] cursor-pointer">
          <LogOut size={24} />
          <span className="font-bold text-lg" onClick={handleLogout}>
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}
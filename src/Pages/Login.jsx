import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://appointment.aitechnotech.in/api/auth/login",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
            role: "platform_admin",
          }),
        },
      );

      console.log("Login response:", response);
      if (response.ok) {
        const data = await response.json();
        alert(`${data.message}`);
        localStorage.setItem("token", data.data.token);
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Login failed:", err.message);
    }
  };

  return (
    // Pura background blue screen karne ke liye
    <div className="fixed inset-0 flex items-center justify-center bg-[#0a46b3] p-4">
      {/* Central White Card */}
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl md:p-10">
        {/* Logo Image aur Heading */}
        <div className="mb-8 flex flex-col items-center">
          <img
            src={logo}
            alt="Appointment Hub"
            className="h-auto w-48 object-contain" // Image ki size choti-badi karne ke liye w-48 badal sakte ho
          />
          <h2 className="mt-4 text-xl font-bold text-gray-900">Admin Login</h2>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#005a84] py-3 font-semibold text-white transition duration-200 hover:bg-[#004667] focus:outline-none focus:ring-2 focus:ring-[#005a84] focus:ring-offset-2"
          
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

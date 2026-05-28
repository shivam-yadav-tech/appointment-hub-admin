import React, { useState } from "react";

import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import AddPartnerForm from "./Components/AddPartnerForm";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import ServicePartner from "./Pages/SeivicePartner";
import MembershipTable from "./Pages/MembershipList";
import PaymentsTable from "./Pages/PaymentsTable";
import AddMembershipForm from "./Components/AddMembershipForm";
import Login from "./Pages/Login";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

 const isLoggedIn = localStorage.getItem("token");

  const location = useLocation();

  return (
    <div className="flex bg-[#f5f7fb] min-h-screen max-w-full overflow-hidden">

      {/* Sidebar */}
      {location.pathname !== "/Login" && isLoggedIn && (
        <Sidebar sidebarOpen={sidebarOpen} />
      )}

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 w-full ${sidebarOpen ? "ml-65" : "ml-0"
          }`}
      >

        {/* Header */}
        {location.pathname !== "/Login" && isLoggedIn && (
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        )}

        {/* Routes */}
        <Routes>

          {/* Login Route */}
          <Route
            path="/Login"
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" />
              ) : (
                <Login />
              )
            }
          />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Dashboard />
              ) : (
                <Navigate to="/Login" />
              )
            }
          />

          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <Dashboard />
              ) : (
                <Navigate to="/Login" />
              )
            }
          />

          <Route
            path="/Add-Partner-Form"
            element={
              isLoggedIn ? (
                <AddPartnerForm />
              ) : (
                <Navigate to="/Login" />
              )
            }
          />

          <Route
            path="/Service-Partner"
            element={
              isLoggedIn ? (
                <ServicePartner />
              ) : (
                <Navigate to="/Login" />
              )
            }
          />

          <Route
            path="/Membership-List"
            element={
              isLoggedIn ? (
                <MembershipTable />
              ) : (
                <Navigate to="/Login" />
              )
            }
          />

          <Route
            path="/PaymentsTable"
            element={
              isLoggedIn ? (
                <PaymentsTable />
              ) : (
                <Navigate to="/Login" />
              )
            }
          /> 

          <Route
            path="/Add-Membership-Form"
            element={
              isLoggedIn ? (
                <AddMembershipForm />
              ) : (
                <Navigate to="/Login" />
              )
            }
          />

        </Routes>
      </div>
    </div>
  );
}

export default App;
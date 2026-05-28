import React from "react";
import { Link } from "react-router-dom";

const AddPartnerForm = () => {
  return (
    <div className="bg-white p-3 rounded-xl shadow border w-full">
      
      {/* Top */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-gray-800 text-xl">
          Add New Partner
        </h3>

        <Link to= "/Service-Partner" ><button className="bg-[#0f5f7a] text-white px-4 py-2 rounded-md text-sm font-semibold">
          👁 View All
        </button>
        </Link>
      </div>

      {/* FORM GRID */}
      <div className="grid grid-cols-2 gap-5">

        {/* Partner Name */}
        <div>
          <label className="text-sm text-gray-600">
            Partner Name
          </label>

          <input
            type="text"
            placeholder="Enter Partner name"
            className="w-full mt-1 border rounded-md px-3 py-2 text-sm outline-none"
          />
        </div>

        {/* Service Type */}
        <div>
          <label className="text-sm text-gray-600">
            Service Type
          </label>

          <select className="w-full mt-1 border rounded-md px-3 py-2 text-sm outline-none">
            <option>AC Repair</option>
            <option>Plumbing</option>
            <option>Electrical</option>
          </select>
        </div>

        {/* Membership */}
        <div>
          <label className="text-sm text-gray-600">
            Membership Plan
          </label>

          <select className="w-full mt-1 border rounded-md px-3 py-2 text-sm outline-none">
            <option>Basic</option>
            <option>Premium</option>
          </select>
        </div>

        {/* Total Provider */}
        <div>
          <label className="text-sm text-gray-600">
            Total Providers
          </label>

          <input
            type="number"
            placeholder="Number of service providers"
            className="w-full mt-1 border rounded-md px-3 py-2 text-sm outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm text-gray-600">
            Phone
          </label>

          <input
            type="text"
            placeholder="Contact number"
            className="w-full mt-1 border rounded-md px-3 py-2 text-sm outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-600">
            Email
          </label>

          <input
            type="email"
            placeholder="Email address"
            className="w-full mt-1 border rounded-md px-3 py-2 text-sm outline-none"
          />
        </div>

        {/* Status */}
        <div>
          <label className="text-sm text-gray-600">
            Status
          </label>

          <select className="w-full mt-1 border rounded-md px-3 py-2 text-sm outline-none">
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Revenue */}
        <div>
          <label className="text-sm text-gray-600">
            Total Revenue (₹)
          </label>

          <input
            type="number"
            placeholder="Total earned amount"
            className="w-full mt-1 border rounded-md px-3 py-2 text-sm outline-none"
          />
        </div>

        {/* Address */}
        <div className="col-span-2">
          <label className="text-sm text-gray-600">
            Address
          </label>

          <textarea
            rows="4"
            placeholder="Partner address"
            className="w-full mt-1 border rounded-md px-3 py-2 text-sm outline-none"
          ></textarea>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">
        <button className="bg-[#0f5f7a] text-white px-4 py-2 rounded-md text-sm font-semibold">
          💾 Save Partner
        </button>

        <button className="bg-gray-400 text-white px-4 py-2 rounded-md text-sm font-semibold">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddPartnerForm;
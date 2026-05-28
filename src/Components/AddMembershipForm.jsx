import React from 'react';
import { Eye, Save } from 'lucide-react';
import { Link } from 'react-router-dom';

const AddMembershipForm = () => {
  return (
    <div className="p-6 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-slate-800">Add New Membership Plan</h2>
      <Link to="/Membership-List">    <button className="bg-[#005f73] hover:bg-[#004e5f] text-white px-4 py-1.5 rounded flex items-center gap-2 text-sm font-semibold transition-all">
            <Eye size={18} /> View All
          </button>
            </Link>
        </div>

        {/* Form Body */}
        <form className="p-6 space-y-6">
          
          {/* Row 1: Plan Name & Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Plan Name</label>
              <input 
                type="text" 
                placeholder="Enter plan name" 
                className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-1 focus:ring-cyan-600 transition-all placeholder:text-gray-400"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Price (₹)</label>
              <input 
                type="text" 
                placeholder="Enter price" 
                className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-1 focus:ring-cyan-600 transition-all placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Row 2: Duration & Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Duration</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-1 focus:ring-cyan-600 transition-all bg-white appearance-none">
                <option>15 Days</option>
                <option>1 Month</option>
                <option>6 Months</option>
                <option>1 Year</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Status</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-1 focus:ring-cyan-600 transition-all bg-white">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          {/* Row 3: Benefits (Full Width Textarea) */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Benefits</label>
            <textarea 
              rows="4"
              placeholder="Example: Unlimited appointments, priority support" 
              className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-1 focus:ring-cyan-600 transition-all placeholder:text-gray-400 resize-y"
            ></textarea>
          </div>

          {/* Form Actions (Buttons) */}
          <div className="flex gap-3 pt-4 border-t border-gray-100">
            <button 
              type="submit" 
              className="bg-[#005f73] hover:bg-[#004e5f] text-white px-5 py-2 rounded flex items-center gap-2 text-sm font-semibold transition-all shadow-sm"
            >
              <Save size={18} /> Save Membership
            </button>
            <button 
              type="button" 
              className="bg-slate-500 hover:bg-slate-600 text-white px-6 py-2 rounded text-sm font-semibold transition-all shadow-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      {/* Footer Text */}
      <div className="mt-8 text-center text-slate-500 text-sm">
        College Nerd AI Admin
      </div>
    </div>
  );
};

export default AddMembershipForm;
import React from 'react';
import { Edit, Trash2, Plus, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const MembershipTable = () => {
  const plans = [
    { id: 1, name: "Basic Plan", price: "₹499", duration: "1 Month", benefits: "5 Appointments", status: "Active" },
    { id: 2, name: "Standard Plan", price: "₹1,299", duration: "3 Months", benefits: "20 Appointments", status: "Active" },
    { id: 3, name: "Premium Plan", price: "₹2,499", duration: "6 Months", benefits: "Unlimited Appointments", status: "Active" },
    { id: 4, name: "Gold Partner", price: "₹3,999", duration: "1 Year", benefits: "Priority Leads", status: "Inactive" },
    { id: 5, name: "Silver Partner", price: "₹2,499", duration: "1 Year", benefits: "Standard Leads", status: "Active" },
    { id: 6, name: "Trial Plan", price: "₹199", duration: "15 Days", benefits: "2 Appointments", status: "Expired" },
  ];

  // Status Badge Logic
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Active': return 'bg-emerald-600 text-white';
      case 'Inactive': return 'bg-orange-400 text-white';
      case 'Expired': return 'bg-red-500 text-white';
      default: return 'bg-gray-400 text-white';
    }
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          <h2 className="text-lg font-bold text-slate-800">Membership List</h2>
        < Link to = "/Add-Membership-Form"> <button className="bg-[#005f73] hover:bg-[#004e5f] text-white px-4 py-1.5 rounded flex items-center gap-2 text-sm font-semibold transition-all">
            <Plus size={18} /> Add New
          </button>
          </Link>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center px-4 py-3 border-y border-gray-100 gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <select className="border border-gray-300 rounded px-2 py-1 outline-none">
              <option>10</option>
              <option>25</option>
            </select>
            <span>entries per page</span>
          </div>
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full border border-gray-300 rounded pl-3 pr-10 py-1.5 outline-none focus:border-cyan-600 text-sm"
            />
            <Search className="absolute right-3 top-2 text-gray-400" size={16} />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#005f73] text-white text-sm">
                <th className="p-3 font-semibold border-r border-cyan-700/30">#</th>
                <th className="p-3 font-semibold border-r border-cyan-700/30">Plan Name</th>
                <th className="p-3 font-semibold border-r border-cyan-700/30">Price</th>
                <th className="p-3 font-semibold border-r border-cyan-700/30">Duration</th>
                <th className="p-3 font-semibold border-r border-cyan-700/30">Benefits</th>
                <th className="p-3 font-semibold border-r border-cyan-700/30 text-center">Status</th>
                <th className="p-3 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {plans.map((item, index) => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-3 text-gray-600">{index + 1}</td>
                  <td className="p-3 font-medium text-slate-700">{item.name}</td>
                  <td className="p-3 text-slate-700 font-semibold">{item.price}</td>
                  <td className="p-3 text-slate-600">{item.duration}</td>
                  <td className="p-3 text-slate-600">{item.benefits}</td>
                  <td className="p-3 text-center">
                    <span className={`px-3 py-0.5 rounded-full text-[11px] font-bold tracking-tight ${getStatusStyle(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <div className="flex justify-center gap-2">
                      <button className="bg-amber-400 p-1.5 rounded hover:bg-amber-500 text-white shadow-sm">
                        <Edit size={15} />
                      </button>
                      <button className="bg-red-500 p-1.5 rounded hover:bg-red-600 text-white shadow-sm">
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Info */}
        <div className="p-4 text-sm text-gray-500 font-medium bg-white">
          Showing 1 to {plans.length} of {plans.length} entries
        </div>
      </div>

      {/* Footer Branding */}
      <div className="mt-8 text-center text-slate-500 text-sm">
        Appointment Hub
      </div>
    </div>
  );
};

export default MembershipTable;
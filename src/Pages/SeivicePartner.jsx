import React from 'react'
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SeivicePartner = () => {
      const partners = [
    { id: 1, name: "AC Service Pro", type: "AC Repair", membership: "Premium", providers: 8, phone: "9876543210", revenue: "₹1,25,000", status: "Active" },
    { id: 2, name: "Quick Plumbing", type: "Plumbing", membership: "Standard", providers: 6, phone: "9123456780", revenue: "₹92,000", status: "Active" },
    { id: 3, name: "Home Electric", type: "Electrical", membership: "Basic", providers: 5, phone: "9988776655", revenue: "₹65,500", status: "Inactive" },
    { id: 4, name: "Clean Master", type: "Cleaning", membership: "Standard", providers: 7, phone: "9090909090", revenue: "₹78,300", status: "Active" },
    { id: 5, name: "Pest Control Hub", type: "Pest Control", membership: "Premium", providers: 9, phone: "8888777766", revenue: "₹1,10,400", status: "Active" },
    { id: 6, name: "Appliance Fixer", type: "Appliance Repair", membership: "Basic", providers: 4, phone: "7777666655", revenue: "₹48,900", status: "Suspended" },
    { id: 7, name: "Urban Technician", type: "Multi Service", membership: "Premium", providers: 3, phone: "9999888877", revenue: "₹55,000", status: "Active" },
  ];

  // Membership Style Helper
  const getMembershipStyle = (type) => {
    switch (type) {
      case 'Premium': return 'bg-yellow-500 text-white';
      case 'Standard': return 'bg-blue-500 text-white';
      case 'Basic': return 'bg-gray-500 text-white';
      default: return 'bg-gray-200';
    }
  };

  // Status Style Helper
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Active': return 'bg-emerald-600 text-white';
      case 'Inactive': return 'bg-orange-400 text-white';
      case 'Suspended': return 'bg-red-500 text-white';
      default: return 'bg-gray-200';
    }
  };

   return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center p-4 gap-4">
          <h1 className="text-xl font-bold text-slate-800">Service Partner List</h1>
         <Link to="/Add-Partner-Form"> <button className="bg-[#005f73] hover:bg-[#004e5f] text-white px-4 py-2 rounded flex items-center gap-2 text-sm font-semibold transition-colors">
            <Plus size={18} /> Add New Partner
          </button>
          </Link>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 bg-white border-y border-gray-100 gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <select className="border rounded p-1 outline-none focus:ring-1 focus:ring-cyan-500">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span>entries per page</span>
          </div>

          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full border rounded pl-3 pr-10 py-1.5 outline-none focus:ring-1 focus:ring-cyan-500 text-sm"
            />

            <Search 
              className="absolute right-3 top-2 text-gray-400" 
              size={16} 
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">

            <thead>
              <tr className="bg-[#005f73] text-white text-sm uppercase">
                <th className="p-3 border-r border-cyan-700/50">#</th>
                <th className="p-3 border-r border-cyan-700/50">Partner Name</th>
                <th className="p-3 border-r border-cyan-700/50">Service Type</th>
                <th className="p-3 border-r border-cyan-700/50 text-center">Membership</th>
                <th className="p-3 border-r border-cyan-700/50 text-center">Total Providers</th>
                <th className="p-3 border-r border-cyan-700/50">Phone</th>
                <th className="p-3 border-r border-cyan-700/50">Total Revenue</th>
                <th className="p-3 border-r border-cyan-700/50 text-center">Status</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody className="text-sm text-gray-700">
              {partners.map((partner, index) => (
                <tr 
                  key={partner.id} 
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors font-medium"
                >

                  <td className="p-3 text-gray-500">
                    {index + 1}
                  </td>

                  <td className="p-3">
                    {partner.name}
                  </td>

                  <td className="p-3 text-gray-600">
                    {partner.type}
                  </td>

                  <td className="p-3 text-center">
                    <span
                      className={`px-3 py-0.5 rounded-full text-[10px] uppercase font-bold italic tracking-wider ${getMembershipStyle(partner.membership)}`}
                    >
                      {partner.membership}
                    </span>
                  </td>

                  <td className="p-3 text-center">
                    {partner.providers}
                  </td>

                  <td className="p-3">
                    {partner.phone}
                  </td>

                  <td className="p-3">
                    {partner.revenue}
                  </td>

                  <td className="p-3 text-center">
                    <span
                      className={`px-3 py-1 rounded text-[11px] font-bold ${getStatusStyle(partner.status)}`}
                    >
                      {partner.status}
                    </span>
                  </td>

                  <td className="p-3">
                    <div className="flex justify-center gap-2">

                      <button className="bg-amber-400 p-1.5 rounded hover:bg-amber-500 transition-colors text-white">
                        <Edit size={16} />
                      </button>

                      <button className="bg-red-500 p-1.5 rounded hover:bg-red-600 transition-colors text-white">
                        <Trash2 size={16} />
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Footer Section */}
        <div className="p-4 text-sm text-gray-600 font-medium">
          Showing 1 to {partners.length} of {partners.length} entries
        </div>

      </div>
    </div>
  );
};

export default SeivicePartner

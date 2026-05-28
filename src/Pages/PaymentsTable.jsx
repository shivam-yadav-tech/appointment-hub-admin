import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaymentsTable = () => {
  const transactions = [
    { id: 1, invoice: "#INV-101", customer: "Rahul Sharma", amount: "₹1,200", method: "UPI", status: "Paid" },
    { id: 2, invoice: "#INV-102", customer: "Amit Kumar", amount: "₹850", method: "Cash", status: "Paid" },
    { id: 3, invoice: "#INV-103", customer: "Pooja Verma", amount: "₹1,500", method: "Card", status: "Pending" },
    { id: 4, invoice: "#INV-104", customer: "Suresh Patel", amount: "₹650", method: "UPI", status: "Failed" },
    { id: 5, invoice: "#INV-105", customer: "Neha Singh", amount: "₹2,000", method: "Net Banking", status: "Paid" },
    { id: 6, invoice: "#INV-106", customer: "Rohit Mehta", amount: "₹1,100", method: "Card", status: "Paid" },
    { id: 7, invoice: "#INV-107", customer: "Anjali Gupta", amount: "₹900", method: "UPI", status: "Pending" },
  ];

  // Status Styling Logic
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Paid': return 'bg-emerald-600 text-white';
      case 'Pending': return 'bg-amber-500 text-white';
      case 'Failed': return 'bg-red-500 text-white';
      default: return 'bg-gray-400 text-white';
    }
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden font-sans">
        
        {/* Title */}
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-slate-800 tracking-tight">Payments</h2>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center px-4 py-4 gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <select className="border border-gray-300 rounded px-1 py-1 outline-none focus:ring-1 focus:ring-cyan-600">
              <option>10</option>
              <option>25</option>
            </select>
            <span>entries per page</span>
          </div>
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full border border-gray-300 rounded pl-3 pr-10 py-1.5 outline-none focus:ring-1 focus:ring-cyan-600 text-sm shadow-sm"
            />
            <Search className="absolute right-3 top-2 text-gray-400" size={16} />
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#005f73] text-white text-sm font-medium">
                <th className="p-3 border-r border-cyan-700/30">Invoice No</th>
                <th className="p-3 border-r border-cyan-700/30">Customer</th>
                <th className="p-3 border-r border-cyan-700/30">Amount</th>
                <th className="p-3 border-r border-cyan-700/30">Method</th>
                <th className="p-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {transactions.map((txn, index) => (
                <tr 
                  key={txn.id} 
                  className={`border-b border-gray-100 transition-colors ${
                    index % 2 === 0 ? 'bg-gray-100/50' : 'bg-white'
                  }`}
                >
                  <td className="p-3 font-semibold text-slate-700">{txn.invoice}</td>
                  <td className="p-3 text-slate-700">{txn.customer}</td>
                  <td className="p-3 font-medium text-slate-800">{txn.amount}</td>
                  <td className="p-3 text-slate-600">{txn.method}</td>
                  <td className="p-3 text-center">
                    <span className={`px-4 py-0.5 rounded-full text-[10px] font-bold tracking-wide ${getStatusStyle(txn.status)}`}>
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 text-sm text-gray-500 font-medium">
          Showing 1 to {transactions.length} of {transactions.length} entries
        </div>
      </div>
    </div>
  );
};

export default PaymentsTable;
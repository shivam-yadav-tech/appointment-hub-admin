import React from 'react';

const RecentAppointments = () => {
  // Sample Data (Aap isse map function ke liye use kar sakte hain)
  const appointments = [
    { id: 1, customer: "Rahul Sharma", partner: "AC Service Pro", date: "22 Jan 2026", status: "Completed" }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mt-6 ml-10">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Recent Appointments</h2>
      
      <div className="overflow-x-auto rounded-t-xl border border-gray-200">
        <table className="w-full text-left border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-[#005f7a] text-white">
              <th className="p-4 font-semibold border-r border-white/20">#</th>
              <th className="p-4 font-semibold border-r border-white/20">Customer</th>
              <th className="p-4 font-semibold border-r border-white/20">Partner</th>
              <th className="p-4 font-semibold border-r border-white/20">Date</th>
              <th className="p-4 font-semibold">Status</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-gray-700">
            {appointments.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-4 border-r border-gray-200">{item.id}</td>
                <td className="p-4 border-r border-gray-200 font-medium">{item.customer}</td>
                <td className="p-4 border-r border-gray-200">{item.partner}</td>
                <td className="p-4 border-r border-gray-200">{item.date}</td>
                <td className="p-4">
                  <span className="bg-[#10854d] text-white px-4 py-1 rounded-lg text-sm font-bold inline-block">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentAppointments;
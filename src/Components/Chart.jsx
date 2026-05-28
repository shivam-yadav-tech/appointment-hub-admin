import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample Data (Aap isse apni API se replace kar sakte hain)
const data = [
  { name: 'Jan', confirmed: 120, completed: 100, cancelled: 20 },
  { name: 'Feb', confirmed: 135, completed: 120, cancelled: 15 },
  { name: 'Mar', confirmed: 150, completed: 130, cancelled: 18 },
  { name: 'Apr', confirmed: 140, completed: 125, cancelled: 22 },
  { name: 'May', confirmed: 160, completed: 145, cancelled: 15 },
  { name: 'Jun', confirmed: 170, completed: 150, cancelled: 20 },
  { name: 'Jul', confirmed: 180, completed: 160, cancelled: 18 },
  { name: 'Aug', confirmed: 175, completed: 155, cancelled: 20 },
  { name: 'Sep', confirmed: 165, completed: 148, cancelled: 17 },
  { name: 'Oct', confirmed: 190, completed: 170, cancelled: 20 },
  { name: 'Nov', confirmed: 200, completed: 180, cancelled: 22 },
  { name: 'Dec', confirmed: 210, completed: 195, cancelled: 15 },
];

const MonthlyAppointments = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 w-full mt-10 ml-5  ">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Monthly Appointments</h2>
      
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#666', fontSize: 12}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#666', fontSize: 12}} />
            <Tooltip cursor={{fill: '#f5f5f5'}} />
            <Legend verticalAlign="top" align="center" iconType="rect" wrapperStyle={{paddingBottom: '20px'}} />
            
            {/* Bars with colors matching your image */}
            <Bar dataKey="confirmed" fill="#93c5fd" radius={[4, 4, 0, 0]} barSize={15} />
            <Bar dataKey="completed" fill="#fca5a5" radius={[4, 4, 0, 0]} barSize={15} />
            <Bar dataKey="cancelled" fill="#fdba74" radius={[4, 4, 0, 0]} barSize={15} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyAppointments;
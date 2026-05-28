import React from 'react'
import { Users, CalendarCheck, DollarSign, Award } from 'lucide-react';
import Chart from '../Components/Chart';
import RecentAppointments from '../Components/RecentAppointments';

const Dashboard = () => {
  return (

    
  <div className='w-full min-h-screen px-8'>
      
      <div className='flex gap-5 mt-8'>
          <div className='bg-blue-600 h-25 flex-1 rounded-xl px-5 py-4 flex justify-between' > <div ><h6 className='text-white'>Total Partner</h6> <span className='text-2xl font-bold text-white'>120</span></div> <div className="bg-white/20 p-3 rounded-full">
          <Users className='size-10 text-white  '   />
        </div></div>
          <div className='bg-emerald-700 h-25 flex-1  rounded-xl py-4 px-5 flex justify-between'><div><h6 className='text-white'>Appointments</h6><span className='text-2xl font-bold text-white'>345</span></div><div className="bg-white/20 p-3 rounded-full">
          <CalendarCheck className='size-10 text-white ' />
        </div></div>
          <div className='bg-yellow-500 h-25 flex-1 rounded-xl py-4 px-5 flex justify-between'><div><h6 className='text-white' >Revenue</h6><span className='text-2xl font-bold text-white'>$23000</span></div><div className="bg-white/20 p-3 rounded-full">
          <DollarSign  className='size-10 text-white '/>
        </div></div>
          <div className='bg-red-500 h-25 flex-1 rounded-xl py-4 px-5 flex justify-between'><div><h6 className='text-white'>Active Membership</h6><span className='text-2xl font-bold text-white'>78</span></div><div className="bg-white/20 p-3 rounded-full">
          <Award className='size-10 text-white ' />
        </div></div>
      </div>


     <Chart />

     <RecentAppointments />

    </div>
  )
}

export default Dashboard

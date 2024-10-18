import React from 'react';
import { Users, Beaker, Pill } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DashboardCard
          title="OPD"
          icon={<Users className="h-12 w-12 text-blue-500" />}
          value="152"
          subtext="Patient visits today"
          color="bg-blue-100"
        />
        <DashboardCard
          title="Pathology"
          icon={<Beaker className="h-12 w-12 text-green-500" />}
          value="47"
          subtext="Tests conducted today"
          color="bg-green-100"
        />
        <DashboardCard
          title="Pharmacy"
          icon={<Pill className="h-12 w-12 text-purple-500" />}
          value="89"
          subtext="Prescriptions filled today"
          color="bg-purple-100"
        />
      </div>
    </div>
  );
}

function DashboardCard({ title, icon, value, subtext, color }) {
  return (
    <div className={`${color} rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        {icon}
      </div>
      <div className="text-5xl font-bold text-gray-800 mb-2">{value}</div>
      <p className="text-gray-600">{subtext}</p>
    </div>
  );
}
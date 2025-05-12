import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';
import axios from '../utils/axiosConfig';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AnalyticsDashboard = () => {
  const [stats, setStats] = useState({
    patients: 0,
    doctors: 0,
    appointments: 0,
    billing: 0,
  });

  const [appointmentsData, setAppointmentsData] = useState([]);
  const [billingData, setBillingData] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await axios.get('/dashboard/summary');
      setStats(res.data);
    };

    const fetchCharts = async () => {
      const appRes = await axios.get('/dashboard/appointments/chart');
      const billRes = await axios.get('/dashboard/billing/chart');
      setAppointmentsData(appRes.data);
      setBillingData(billRes.data);
    };

    fetchStats();
    fetchCharts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📊 Admin Analytics Dashboard</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Patients" value={stats.patients} color="bg-blue-100" />
        <StatCard title="Doctors" value={stats.doctors} color="bg-green-100" />
        <StatCard title="Appointments" value={stats.appointments} color="bg-yellow-100" />
        <StatCard title="Billing ($)" value={stats.billing} color="bg-red-100" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">📅 Appointments Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={appointmentsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">💵 Billing by Department</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={billingData}
                dataKey="amount"
                nameKey="department"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {billingData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, color }) => (
  <div className={`p-4 rounded shadow ${color}`}>
    <div className="text-sm text-gray-500">{title}</div>
    <div className="text-2xl font-bold">{value}</div>
  </div>
);

export default AnalyticsDashboard;

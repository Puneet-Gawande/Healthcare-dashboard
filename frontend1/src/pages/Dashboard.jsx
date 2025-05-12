import React, { useEffect, useState } from 'react';
import { Card, Button } from '../components/UIComponents'; // Custom UI Components
import axios from '../utils/axiosConfig';

const Dashboard = () => {
  const [userStats, setUserStats] = useState({ patients: 0, appointments: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const response = await axios.get('/dashboard/stats');
      setUserStats(response.data);
    };
    fetchStats();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <div className="stats-container">
        <Card title="Total Patients" value={userStats.patients} />
        <Card title="Upcoming Appointments" value={userStats.appointments} />
      </div>
      <Button onClick={() => alert('More stats coming soon!')}>More Stats</Button>
    </div>
  );
};

export default Dashboard;

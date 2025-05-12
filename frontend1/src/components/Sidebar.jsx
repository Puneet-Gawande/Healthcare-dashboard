import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 h-screen w-64 p-5 shadow-md fixed">
      <h2 className="text-xl font-semibold mb-6">Menu</h2>
      <nav className="flex flex-col space-y-3">
        <Link to="/dashboard" className="text-gray-800 hover:text-blue-600">Dashboard</Link>
        <Link to="/patients" className="text-gray-800 hover:text-blue-600">Patient Manager</Link>
        <Link to="/doctors" className="text-gray-800 hover:text-blue-600">Doctor Manager</Link>
        <Link to="/appointments" className="text-gray-800 hover:text-blue-600">Appointments</Link>
        <Link to="/billing" className="text-gray-800 hover:text-blue-600">Billing</Link>
        <Link to="/reports" className="text-gray-800 hover:text-blue-600">Reports</Link>
        <Link to="/inventory" className="text-gray-800 hover:text-blue-600">Inventory</Link>
        <Link to="/analytics" className="text-gray-800 hover:text-blue-600">Analytics</Link>
        <Link to="/notifications" className="text-gray-800 hover:text-blue-600">Notifications</Link>
        <Link to="/chat" className="text-gray-800 hover:text-blue-600">Chat</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProtectedRoute from './components/ProtectedRoute';

import Login from '../../frontend1/src/pages/Login';
import Register from '../../frontend1/src/pages/Register';
import Dashboard from '../../frontend1/src/pages/Dashboard';
import PatientManager from '../../frontend1/src/pages/PatientManager';
import DoctorManager from '../../frontend1/src/pages/DoctorManager';
import AppointmentManager from './pages/AppointmentManager';
import BillingManager from '../../frontend1/src/pages/BillingManager';
import ReportManager from '../../frontend1/src/pages/ReportManager';
import InventoryManager from '../../frontend1/src/pages/InventoryManager';
import AnalyticsDashboard from '../../frontend1/src/pages/AnalyticsDashboard';
import NotificationPanel from '../../frontend1/src/pages/NotificationPanel';
import ChatRoom from './pages/ChatRoom';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Navbar />
          <main className="p-4">
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Protected Routes */}
              <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/patients" element={<ProtectedRoute><PatientManager /></ProtectedRoute>} />
              <Route path="/doctors" element={<ProtectedRoute><DoctorManager /></ProtectedRoute>} />
              <Route path="/appointments" element={<ProtectedRoute><AppointmentManager /></ProtectedRoute>} />
              <Route path="/billing" element={<ProtectedRoute><BillingManager /></ProtectedRoute>} />
              <Route path="/reports" element={<ProtectedRoute><ReportManager /></ProtectedRoute>} />
              <Route path="/inventory" element={<ProtectedRoute><InventoryManager /></ProtectedRoute>} />
              <Route path="/analytics" element={<ProtectedRoute><AnalyticsDashboard /></ProtectedRoute>} />
              <Route path="/notifications" element={<ProtectedRoute><NotificationPanel /></ProtectedRoute>} />
              <Route path="/chat" element={<ProtectedRoute><ChatRoom /></ProtectedRoute>} />

              {/* Catch-all redirect to dashboard */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;

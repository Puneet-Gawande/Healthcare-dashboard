import React, { useState, useEffect } from 'react';
import axios from '../utils/axiosConfig';
import { useEffect } from 'react';
import socket from '../utils/socket';

useEffect(() => {
  socket.on('new-notification', (notification) => {
    setNotifications((prevNotifications) => [notification, ...prevNotifications]);
  });
  return () => {
    socket.off('new-notification');
  };
}, []);

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    const res = await axios.get('/notifications');
    setNotifications(res.data);
  };

  const handleSend = async () => {
    if (!message) return;

    await axios.post('/notifications', { message });
    setMessage('');
    fetchNotifications();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/notifications/${id}`);
    fetchNotifications();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🔔 Notification Panel</h2>

      <div className="mb-6">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write a notification"
          rows="4"
          className="w-full p-4 border rounded"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
        >
          Send Notification
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification._id}
            className="bg-gray-100 p-4 rounded shadow"
          >
            <div>{notification.message}</div>
            <button
              onClick={() => handleDelete(notification._id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPanel;

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from '../utils/axiosConfig';

const socket = io('http://localhost:5000'); // ✅ replace with deployed URL in production

const ChatRoom = () => {
  const [roomId, setRoomId] = useState('general');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState('Admin'); // Replace with logged-in user name

  useEffect(() => {
    // Join the room
    socket.emit('joinRoom', { roomId });

    // Fetch chat history
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`/chat/${roomId}`);
        setMessages(res.data);
      } catch (err) {
        console.error('Fetch chat error:', err);
      }
    };
    fetchMessages();

    // Listen for incoming messages
    socket.on('receiveMessage', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, [roomId]);

  const handleSend = async () => {
    if (!message) return;

    const msgPayload = {
      roomId,
      message,
      sender: user
    };

    // Emit to socket
    socket.emit('sendMessage', msgPayload);

    // Save to DB
    try {
      await axios.post('/chat', msgPayload);
    } catch (err) {
      console.error('Message save error:', err);
    }

    setMessage('');
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">💬 Chat Room: {roomId}</h2>
      <div className="border rounded h-96 overflow-y-auto p-4 bg-gray-100">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.sender === user ? 'text-right' : 'text-left'}`}>
            <div className="text-sm text-gray-600">{msg.sender}</div>
            <div className="inline-block bg-white px-3 py-2 rounded shadow-sm">{msg.message}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;

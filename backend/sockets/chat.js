module.exports = (io) => {
    io.on('connection', (socket) => {
      console.log('✅ New client connected:', socket.id);
  
      socket.on('joinRoom', ({ roomId }) => {
        socket.join(roomId);
        console.log(`🔒 User joined room: ${roomId}`);
      });
  
      socket.on('sendMessage', ({ roomId, message, sender }) => {
        const payload = { message, sender, timestamp: new Date() };
        io.to(roomId).emit('receiveMessage', payload);
      });
  
      socket.on('disconnect', () => {
        console.log('❌ Client disconnected:', socket.id);
      });
    });
  };
  
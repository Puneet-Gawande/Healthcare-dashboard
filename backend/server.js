const http = require('http');
const { Server } = require('socket.io');
const app = require('./app');
const connectMongo = require('./config/mongo');
const  { connectPostgres }= require('./config/postgres');
require('dotenv').config(); // Load .env variables
const chatSocket = require('./sockets/chat'); 

// DB Connections
connectMongo();
connectPostgres();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*', // frontend origin
    methods: ['GET', 'POST']
  }
});
chatSocket(io);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

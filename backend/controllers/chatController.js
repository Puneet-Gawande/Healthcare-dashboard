const Chat = require('../models/Chat');

exports.getChatByRoom = async (req, res) => {
  const roomId = req.params.roomId;
  const messages = await Chat.find({ roomId }).sort({ timestamp: 1 });
  res.json(messages);
};

exports.saveMessage = async (req, res) => {
  const { roomId, message, sender } = req.body;
  const saved = await new Chat({ roomId, message, sender }).save();
  res.status(201).json(saved);
};

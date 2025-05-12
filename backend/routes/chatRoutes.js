const express = require('express');
const router = express.Router();
const { getChatByRoom, saveMessage } = require('../controllers/chatController');

router.get('/:roomId', getChatByRoom);
router.post('/', saveMessage);

module.exports = router;

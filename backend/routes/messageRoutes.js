const express = require('express');
const router = express.Router();
const { protectRoute } = require('../middleware/authMiddleware');
const {
  getMessages,
  createMessage,
  updateMessage,
  deleteMessage,
} = require('../controllers/messageController');

router.get('/', protectRoute, getMessages);

router.post('/', protectRoute, createMessage);

router.put('/:id', protectRoute, updateMessage);

router.delete('/:id', protectRoute, deleteMessage);

module.exports = router;

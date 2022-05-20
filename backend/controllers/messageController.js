asyncHandler = require('express-async-handler');
const Message = require('../models/messageModel');
const User = require('../models/userModel');

// @desc Get messages
// @route GET /api/messages
// @access Private

const getMessages = asyncHandler(async (req, res) => {
  const messages = await Goal.find({ user: req.user.id });
  res.status(200).json(messages);
});

// @desc Create message
// @route POST /api/messages
// @access Private

const createMessage = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  const message = await Message.create({
    title: req.body.title,
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(message);
});

// @desc Update message
// @route PUT /api/messages/:id
// @access Private

const updateMessage = asyncHandler(async (req, res) => {
  const message = await Message.findById(req.params.id);

  if (!message) {
    res.status(400);
    throw new Error('Message not found');
  }

  const user = await User.findById(req.user.id);

  // Check if user exists in db
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }
  // Ensure logged in user matches message user
  if (message.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const updatedMessage = await Message.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedMessage);
});

// @desc Delete message
// @route Delete /api/messages/:id
// @access Private

const deleteMessage = asyncHandler(async (req, res) => {
  const message = await Message.findById(req.params.id);

  if (!message) {
    res.status(400);
    throw new Error('Message not found');
  }

  const user = await User.findById(req.user.id);

  // Check if user exists in db
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }
  // Ensure logged in user matches goal user
  if (message.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await message.remove();
  // return the id
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getMessages,
  createMessage,
  updateMessage,
  deleteMessage,
};

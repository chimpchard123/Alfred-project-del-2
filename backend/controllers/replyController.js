// backend/controllers/replyController.js
const replyModel = require('../models/replyModel');

function getRepliesByThreadId(req, res) {
  const { threadId } = req.params;
  const replies = replyModel.getRepliesByThreadId(threadId);
  res.json(replies);
}

function createReply(req, res) {
  const { threadId } = req.params;
  const { content } = req.body;
  replyModel.createReply(threadId, content);
  res.status(201).send('Reply created');
}

module.exports = { getRepliesByThreadId, createReply };

// backend/controllers/threadController.js
const threadModel = require('../models/threadModel');

function getAllThreads(req, res) {
  const threads = threadModel.getAllThreads();
  res.json(threads);
}

function getThreadById(req, res) {
  const { id } = req.params;
  const thread = threadModel.getThreadById(id);
  if (!thread) {
    return res.status(404).send('Thread not found');
  }
  res.json(thread);
}

function createThread(req, res) {
  const { title, content } = req.body;
  threadModel.createThread(title, content);
  res.status(201).send('Thread created');
}

module.exports = { getAllThreads, getThreadById, createThread };

// backend/models/threadModel.js
const db = require('../utils/db');

function getAllThreads() {
  return db.prepare('SELECT * FROM threads ORDER BY created_at DESC').all();
}

function getThreadById(id) {
  return db.prepare('SELECT * FROM threads WHERE id = ?').get(id);
}

function createThread(title, content) {
  const stmt = db.prepare('INSERT INTO threads (title, content, created_at) VALUES (?, ?, ?)');
  stmt.run(title, content, new Date().toISOString());
}

module.exports = { getAllThreads, getThreadById, createThread };

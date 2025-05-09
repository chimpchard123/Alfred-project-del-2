// backend/models/replyModel.js
const db = require('../utils/db');

function getRepliesByThreadId(threadId) {
  return db.prepare('SELECT * FROM replies WHERE thread_id = ? ORDER BY created_at DESC').all(threadId);
}

function createReply(threadId, content) {
  const stmt = db.prepare('INSERT INTO replies (thread_id, content, created_at) VALUES (?, ?, ?)');
  stmt.run(threadId, content, new Date().toISOString());
}

module.exports = { getRepliesByThreadId, createReply };

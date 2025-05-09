// backend/routes/replyRoutes.js
const express = require('express');
const router = express.Router();
const replyController = require('../controllers/replyController');

router.get('/threads/:threadId/replies', replyController.getRepliesByThreadId);
router.post('/threads/:threadId/replies', replyController.createReply);

module.exports = router;

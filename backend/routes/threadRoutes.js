// backend/routes/threadRoutes.js
const express = require('express');
const router = express.Router();
const threadController = require('../controllers/threadController');

router.get('/threads', threadController.getAllThreads);
router.get('/threads/:id', threadController.getThreadById);
router.post('/threads', threadController.createThread);

module.exports = router;

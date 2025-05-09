// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const threadRoutes = require('./routes/threadRoutes');
const replyRoutes = require('./routes/replyRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(threadRoutes);
app.use(replyRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

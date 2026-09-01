const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});

const express = require('express');
const app = express();
const PORT = 3002; // Internal port, not exposed to the public directly

// Serve static files from 'public' folder
app.use(express.static('public'));

// Root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
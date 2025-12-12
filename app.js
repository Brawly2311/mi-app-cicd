const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', function(req, res) {
  res.json({
    message: 'App CI/CD funcionando!',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    author: 'igbrawly'
  });
});

app.get('/health', function(req, res) {
  res.json({ status: 'OK', uptime: process.uptime() });
});

app.listen(PORT, function() {
  console.log('Servidor en http://localhost:' + PORT);
});
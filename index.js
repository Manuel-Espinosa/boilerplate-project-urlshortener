require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./router')

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(router)

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

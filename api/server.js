const express = require('express');

const projectRouter = require('./projects/projectRouter.js');

const server = express();

server.use(express.json());


server.use('/api/projects', projectRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'You are here...' });
});


module.exports = server;

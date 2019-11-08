const express = require('express');

const RecipesRouter = require('./recipes/recipe-router.js');

const server = express();

server.use(express.json());
server.get('/', (req, res) => {
  res.status(200).json({
    message: `Hello from the Projects api`,
  });
});
server.use('/api/recipes', RecipesRouter);

module.exports = server;

const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
});

router.get('/:id/shopping', (req, res) => {
  const id = req.params.id
  Recipes.getShoppingList(id)
    .then(list => {
      res.json(list);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get shopping list' });
    });
});

router.get('/:id/instructions', (req, res) => {
  const id = req.params.id
  Recipes.getInstructions(id)
    .then(instructions => {
      res.json(instructions);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipe instructions' });
    });
});

module.exports = router
exports.seed = function (knex) {
  return knex('recipe_ingredients').insert([
    { quantity: 1.0, recipe_id: 4, ingredient_id: 4 },
    { quantity: 1.0, recipe_id: 4, ingredient_id: 5 },
    { quantity: 1.0, recipe_id: 4, ingredient_id: 6 }
  ]);
};
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('recipes').insert([
    { recipe_name: 'Garlic Chicken Soup' },
    { recipe_name: 'Tomato Soup' },
    { recipe_name: 'Butter Chicken' }
  ]);
};

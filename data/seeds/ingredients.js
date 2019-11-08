
exports.seed = function (knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'chicken breast' },
    { ingredient_name: 'coconut milk' },
    { ingredient_name: 'garlic clove' }
  ]);
};

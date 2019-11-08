
exports.seed = function (knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'chicken breast' },
    { ingredient_name: 'coconut milk' },
    { ingredient_name: 'garlic clove' },
    { ingredient_name: 'peanut butter' },
    { ingredient_name: 'grape jelly' },
    { ingredient_name: 'sliced bread' },
  ]);
};

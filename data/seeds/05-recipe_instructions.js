exports.seed = function (knex) {
  return knex('recipe_instructions').insert([
    { recipe_id: 4, instruction_id: 1 },
    { recipe_id: 4, instruction_id: 2 },
    { recipe_id: 4, instruction_id: 3 },
    { recipe_id: 4, instruction_id: 4 },
  ]);
};
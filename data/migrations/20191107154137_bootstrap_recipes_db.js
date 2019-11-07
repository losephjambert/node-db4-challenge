exports.up = function (knex) {
  return knex.schema
    // recipes table
    .createTable('recipes', recipes => {
      recipes.increments();
      recipes.string('recipe_name', 255).notNullable()
    })

    // ingredients table
    .createTable('ingredients', ingredients => {
      ingredients.increments()
      ingredients.string('ingredient_name', 255).notNullable()
    })

    // instructions table
    .createTable('instructions', instructions => {
      instructions.increments()
      instructions.integer('sequence_number').notNullable()
      instructions.text('instruction_text', 500).notNullable()
    })
};

exports.down = function (knex) {

};

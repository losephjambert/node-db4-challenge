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

    // recipe_ingredients table
    .createTable('recipe_ingredients', recipe_ingredients => {
      recipe_ingredients.increments()
      recipe_ingredients.integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function (knex) {

};

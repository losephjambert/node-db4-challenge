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
      recipe_ingredients.float('quantity').notNullable()

      // foreign key to recipe id
      recipe_ingredients.integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      // foregin key to ingredient id
      recipe_ingredients.integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')


    })

  // recipe_instructions table
  // .createTable('recipe_instructions', recipe_instructions => {
  //   recipe_instructions.increments()
  //   recipe_instructions.integer('recipe')
  // })
};

exports.down = function (knex) {

};

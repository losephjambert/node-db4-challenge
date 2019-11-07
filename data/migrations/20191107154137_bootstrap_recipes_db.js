const RECIPES = 'recipes'
const INGREDIENTS = 'ingredients'
const INSTRUCTIONS = 'instructions'
const RECIPE_INGREDIENTS = 'recipe_ingredients'
const RECIPE_INSTRUCTIONS = 'recipe_instructions'

exports.up = function (knex) {
  return knex.schema
    // recipes table
    .createTable(RECIPES, table => {
      table.increments();
      table.string('recipe_name', 255).notNullable()
    })

    // ingredients table
    .createTable(INGREDIENTS, table => {
      table.increments()
      table.string('ingredient_name', 255).notNullable()
    })

    // instructions table
    .createTable(INSTRUCTIONS, table => {
      table.increments()
      table.integer('sequence_number').notNullable()
      table.text('instruction_text', 500).notNullable()
    })

    // recipe_ingredients table
    .createTable(RECIPE_INGREDIENTS, table => {
      table.increments()
      table.float('quantity').notNullable()

      // foreign key to recipe id
      table.integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable(RECIPES)
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      // foregin key to ingredient id
      table.integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable(INGREDIENTS)
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    })

    // recipe_instructions table
    .createTable(RECIPE_INSTRUCTIONS, table => {
      table.increments()

      // foreign key to recipe id
      table.integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable(RECIPES)
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      // foreign key to recipe id
      table.integer('instruction_id')
        .unsigned()
        .references('id')
        .inTable(INSTRUCTIONS)
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    })

};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists(RECIPES)
    .dropTableIfExists(INGREDIENTS)
    .dropTableIfExists(INSTRUCTIONS)
    .dropTableIfExists(RECIPE_INGREDIENTS)
    .dropTableIfExists(RECIPE_INSTRUCTIONS)
};

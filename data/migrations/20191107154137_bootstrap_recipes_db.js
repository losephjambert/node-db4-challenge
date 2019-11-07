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
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      // foregin key to ingredient id
      table.integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')


    })

  // recipe_instructions table
  // .createTable(RECIPE_INSTRUCTIONS, table => {
  //   table.increments()
  //   table.integer('recipe_id')
  // })
};

exports.down = function (knex) {
  knex.schema.dropTableIfExists('users')
};

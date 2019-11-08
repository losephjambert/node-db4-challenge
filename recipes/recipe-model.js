const db = require('../data/db-config.js');

/**
getRecipes()
getShoppingList(recipe_id)
getInstructions(recipe_id)
 */

const getRecipes = async () => {
  return await db('recipes')
}

const getShoppingList = async (recipe_id) => {
  /*
  select ri.quantity,i.ingredient_name
  from recipe_ingredients as ri
  join ingredients as i
  join recipes as r
  where i.id = ri.ingredient_id
  and r.id = 4;
  */
  try {
    const shoppingList = await db('recipe_ingredients as ri')
      .join('ingredients as i', 'i.id', '=', 'ri.ingredient_id')
      .where('ri.recipe_id', '=', recipe_id)
      .select('i.ingredient_name')

    return shoppingList
  } catch (error) {
    console.log(error)
    return error
  }
}

const getInstructions = async recipe_id => {
  /*
  select i.instruction_text,r.recipe_name
  from recipe_instructions as ri
  join instructions as i
  join recipes as r
  where i.id = ri.instruction_id
  and r.id = 4;
  */
  try {
    const instructions = await db('recipe_instructions as ri')
      .join('recipes as r', 'r.id', '=', 'ri.recipe_id')
      .join('instructions as i', 'i.id', '=', 'ri.instruction_id')
      .where('ri.recipe_id', '=', recipe_id)
      .select('i.instruction_text', 'r.recipe_name')

    return instructions.reduce((instructions, currentLine) => {
      instructions.recipe_name = currentLine.recipe_name
      instructions.instructions = instructions.instructions || []
      instructions.instructions.push(currentLine.instruction_text)
      return instructions
    }, {})
  } catch (error) {
    console.log(error)
    return error
  }
}
module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}
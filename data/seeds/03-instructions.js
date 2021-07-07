
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('instructions').insert([
    { sequence_number: 1, instruction_text: 'Use knife to spread peanut butter on one piece of bread' },
    { sequence_number: 2, instruction_text: 'Use knife to spread jelly on other piece of bread' },
    { sequence_number: 3, instruction_text: 'Put the two pieces of bread together; be sure the jelly and peanut butter sides are touching.' },
    { sequence_number: 4, instruction_text: 'Use knife to diagonally cut the sandwich in half.' }
  ]);
};

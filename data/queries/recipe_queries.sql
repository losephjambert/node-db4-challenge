-- select * from ingredients;
-- select * from recipes;
-- select * from recipe_ingredients;

-- select ri.quantity, r.recipe_name, i.ingredient_name
-- from recipe_ingredients as ri
-- join ingredients as i
-- join recipes as r
-- where i.id = ri.ingredient_id
-- and r.id = 4;
-- select * from ingredients;
select * from instructions;
select * from recipes where recipes.id = 4;
select * from recipe_instructions;

-- select ri.quantity,i.ingredient_name
-- from recipe_ingredients as ri
-- join ingredients as i
-- join recipes as r
-- where i.id = ri.ingredient_id
-- and r.id = 4;

select i.instruction_text,r.recipe_name
from recipe_instructions as ri
join instructions as i
join recipes as r
where i.id = ri.instruction_id
and r.id = 4;
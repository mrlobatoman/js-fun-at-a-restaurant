
function nameMenuItem(food) {
  return 'Delicious ' + food
}

//refer to line 42 and ask about parameter 1 "menuItemName"
function createMenuItem(name, price, type) {
  return {name, price, type}
}

function addIngredients(ingredient, ingredients =[]) {
  if(!ingredients.includes(ingredient))
  ingredients.push(ingredient)
}


//=================

function formatPrice() {

}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  // decreasePrice,
  // createRecipe
}

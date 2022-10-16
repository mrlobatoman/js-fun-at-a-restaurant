
function nameMenuItem(food) {
  return `Delicious ${food}`
}


function createMenuItem(name, price, type) {
  return {name, price, type}
}

function addIngredients(ingredient, ingredients) {
  if(!ingredients.includes(ingredient)) {
  ingredients.push(ingredient)
}
}



function formatPrice(price) {
return `$${price}`
}

function decreasePrice(price) {
  return price * (1 - 0.1)
}

function createRecipe(title, ingredients, type) {
  return {title, ingredients, type}
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}

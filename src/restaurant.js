function createRestaurant(restName, menus) {
var restaurant = {
  name: restName,
  menus: {breakfast: [], lunch: [], dinner: []}
}
return restaurant
}

function addMenuItem(restaurant, addItem) {
  restaurant.menus.lunch.push(addItem)
return addItem
}




module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}


function takeOrder(newOrder, deliveryOrders) {
if (deliveryOrders.length < 3) {
  return deliveryOrders.push(newOrder)
  }
}
//refer to line 79

function refundOrder(orderNum, deliveryOrders) {
//access a property within an object "order #"
for (i = 0; i < deliveryOrders.length; i++) {
  if (deliveryOrders[i].orderNumber === orderNum) {
        deliveryOrders.splice([i], 1);
      //anytime you want to loop through the index of an array, make sure you use [i]
// deliverOrders[i].number is looping through all the orders
//because we use dot notation it will specifically pull the value
  }
}
}

function listItems(deliveryOrders) {
 var itemName = []
for (i = 0; i < deliveryOrders.length; i++) {
  itemName.push(deliveryOrders[i].item)
  //itemName is the vessel "box" and .push(this is what we are pushing into the box)
  console.log(itemName)
}
console.log(itemName.join(`, `))
return itemName.join(`, `)
// .join returns the array and
}

//ASK FOR MATT M TO GO OVER THE RETURN -- LINES 37-41
function searchOrder(deliveryOrders, orderItemName) {

for (i = 0; i < deliveryOrders.length; i++) {
 if (deliveryOrders[i].item === orderItemName) {
  return true
}
}
return false
//return false has to be outside of the for loop
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}

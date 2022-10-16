
function takeOrder(newOrder, deliveryOrders) {
if (deliveryOrders.length < 3) {
  return deliveryOrders.push(newOrder)
  }
}


function refundOrder(orderNum, deliveryOrders) {
for (i = 0; i < deliveryOrders.length; i++) {
  if (deliveryOrders[i].orderNumber === orderNum) {
        deliveryOrders.splice([i], 1);
  }
}
}

function listItems(deliveryOrders) {
 var itemName = []
for (i = 0; i < deliveryOrders.length; i++) {
  itemName.push(deliveryOrders[i].item)
  console.log(itemName)
}
console.log(itemName.join(`, `))
return itemName.join(`, `)
}


function searchOrder(deliveryOrders, orderItemName) {
for (i = 0; i < deliveryOrders.length; i++) {
 if (deliveryOrders[i].item === orderItemName) {
  return true
}
}
  return false
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}

let orders = [];

function createOrder(order){
order.id = Date.now();
order.status = "pending";
order.driver = null;
orders.push(order);
}

function getOrders(){
return orders;
}

function updateOrder(id,data){
let o = orders.find(o=>o.id===id);
Object.assign(o,data);
}

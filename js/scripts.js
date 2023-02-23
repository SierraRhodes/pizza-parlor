let pizza = new Pizza();

//Business Logic 

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;

}

Pizza.prototype.cost = function() {
 const standardCosts = {
  Small: 5,
  Medium: 8,
  Large: 14
 };

const toppingCostPerTopping = 1;


const standardCost = standardCosts[this.size];
const toppingCost = toppingCostPerTopping * this.toppings.length;

return standardCost * toppingCost;
};

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

const ToppingOptions = [
  {name: "Pepperoni", price: 1 },
  {name: "Sausage", price: 1 },
  {name: "Ham", price: 1 },
  {name: "Banana Peppers", price: 1 },
  {name: "Green Peppers", price: 1 },
  {name: "Spinach", price: 1 },
  {name: "Mushrooms", price: 1 },
  {name: "Cheese", price: 1 },

];

//UI Logic 





window.addEventListener("load", function(event) {

const form = document.getElementById("pizza-form");
const total = document.getElementById("total-cost");
form.addEventListener("submit", function(event) {
 event.preventDefault();
});

});
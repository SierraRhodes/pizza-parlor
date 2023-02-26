let pizza = new Pizza();

//Business Logic 

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;

}

Pizza.prototype.cost = function() {
 const standardCosts = {
  sizeOptions: 0,
  small: 5.69,
  medium: 8.20,
  large: 14.30,
 };

const toppingCostPerTopping = 1;

const standardCost = standardCosts[this.size];
const toppingCost = toppingCostPerTopping * this.toppings.length;
console.log("Standard Cost:", standardCost);
console.log("Topping Cost:", toppingCost);
return standardCost + toppingCost;
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
console.log("Calculating cost for:", this.size, this.toppings);
function updateCost() {
  const checkboxes = document.querySelectorAll("input[type=checkbox][name=toppings]:checked");
  const toppings = Array.from(checkboxes).map(cb => cb.value);
  const size = document.querySelector("select[name=size]").value;
  pizza.toppings = toppings;
  pizza.size = size;
  console.log("Toppings:", pizza.toppings);
  console.log("Size:", pizza.size);
  const cost = parseFloat(pizza.cost().toFixed(2));
  document.querySelector("#total-cost").textContent = "$" + cost;
 }



 window.addEventListener("load", function(event) {
  const form = document.getElementById("pizza-form");
  // Update cost when page loads
  updateCost();
  // updateCost() changes event of the inputs
  form.addEventListener("change", function(event) {
    updateCost();
  });
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    document.querySelector("h4").innerText = "Your order has been placed, but be aware it'll never be delivered. :)";
    document.querySelector("#total-cost").textContent =  "$" + 0;
    document.getElementById("pizza-form").reset();
  });
});





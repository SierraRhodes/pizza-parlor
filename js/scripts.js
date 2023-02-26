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
  medium: 8.28,
  large: 14.32,
 };

const toppingCostPerTopping = 1;

const standardCost = standardCosts[this.size];
const toppingCost = toppingCostPerTopping * this.toppings.length;
return standardCost + toppingCost;
};

//UI Logic 
console.log("Calculating cost for:", this.size, this.toppings);
function updateCost() {
  const checkboxes = document.querySelectorAll("input[type=checkbox][name=toppings]:checked");
  const toppings = Array.from(checkboxes).map(cb => cb.value);
  const size = document.querySelector("select[name=size]").value;
  pizza.toppings = toppings;
  pizza.size = size;
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





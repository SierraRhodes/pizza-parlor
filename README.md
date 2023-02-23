Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Pizza.prototype.cost()

Test: "It should return the cost of a small pizza with two properties for toppings."
Code: 
const pizza1 = new Pizza(["cheese", "mushrooms"], "Medium");
console.log(pizza1.cost());
Expected Output: 16;
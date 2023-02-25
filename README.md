# _Pizza Parlor_

#### By _**Sierra Rhodes**_

#### _It is a simple application that allows the user to order a pizza._

## Technologies Used

* _HTML5_
* _CSS_
* _Bootstrap_
* _JavaScript_

## Description

_This application allows the user to select the toppings as well as the size of their pizza and gives them a total for their order._

## Setup/Installation Requirements

* _Open up a new browser_
* _Go to https://github.com/lilbitsnpieces/pizza-parlor
* _Click on code and copy link_
* _In the command line, type git clone and attach the copied link_
* _Press enter/return on keyboard_
* _Find the folder on your computer's desktop and open index.html link with preferred browser_


## Known Bugs

* _None_


## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

Copyright (c) _2023_ _Sierra Rhodes_




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
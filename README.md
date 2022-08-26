# Pizza Parlor

### Contributors
  * Athea DeLing

### Description
  This is a web page where the user can select all parts of there pizza. Depending on what they select size wise and topping wise will change the price they receive at the end. When they get there price they will also get a list of all the toppings they choose for their pizza.

### Technologies Used
  * HTML
  * CSS
  * JavaScript

### Setup Instructions
  There are a couple ways you can choose to set up this web page
  * Clone the repository from the GitHub repository to your local desktop
  * Open the created [GitHub](will add) pages link to access the web page

### Known Bugs
  * There are no known bugs

### Tests
Describes: initialPrice()

Test: "It should return 5 when small is put in the function"
Code:
if (this.size === "Small") {
return 5
}
Expected Output: 5

Test: "It should return 10 when medium is put in the function"
Code:
else if (this.size === "Medium") {
  return 10
}
Expected Output: 10

Test: "It should return 15 when large is put in the function"
Code:
else if (this.size === "Large") {
  return 15
}
Expected Output: 15

Test: "It should return 20 when extra large is put in the function"
Code:
else if (this.size === "Extra Large") {
  return 20
}
Expected Output: 20

Describes: pizzaMeatPrice()

Test: "It should return 6 when ham is put in the function"
Code:
if (this.meat === "Ham") {
  return initialPrice(small) + 1
}
Expected Output: 6

Test: "It should return 7 when sausage is put in the function"
Code:
else if (this.meat === "Sausage") {
  return initialPrice(small) + 2
}
Expected Output: 7

Test: "It should return 9 when bacon is put in the function"
Code:
else if (this.meat === "Bacon") {
  return initialPrice(small) + 4
}
Expected Output: 9

Test: "It should return initialPrice() when pepperoni or none is but in the function"
Code:
else (this.meat === "Pepperoni" || this.meat === "None") {
  return initialPrice(small)
}
Expected Output: 5


### License
  [GNU GPL3.0](https://choosealicense.com/licenses/gpl-3.0/) Copyright (c) 08/26/2022 Athea DeLing
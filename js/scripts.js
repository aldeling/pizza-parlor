// Business Logic

function Pizza(size, crust, cheese, meat, sauce, greens, extras) {
  this.size = size;
  this.crust = crust;
  this.cheese = cheese;
  this.meat = meat;
  this.sauce = sauce;
  this.greens = greens;
  this.extras = extras;
}

Pizza.prototype.initialPrice = function() {
  if (this.size === "Small") {
    return 5;
  } else if (this.size === "Medium") {
    return 10;
  } else if (this.size === "Large") {
    return 15;
  } else if (this.size === "Extra Large") {
    return 20
  }
  return 0;
};

Pizza.prototype.pizzaMeatPrice = function() {
  if (this.meat === "Ham") {
    return this.initialPrice() + 1;
  } else if (this.meat === "Sausage") {
    return this.initialPrice() + 2;
  } else if (this.meat === "Bacon") {
    return this.initialPrice() + 4;
  } else {
    return this.initialPrice()
  }
};  

// UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  let selectedSize = document.getElementById("size").value;
  document.getElementById("sizeDisplay").innerText = selectedSize;
  let selectedCrust = document.getElementById("crust").value;
  document.querySelector(".crust").innerText = selectedCrust;
  let selectedCheese = document.getElementById("cheese").value;
  document.querySelector(".cheese").innerText = selectedCheese;
  let selectedMeat = document.getElementById("meat").value;
  document.querySelector(".meat").innerText = selectedMeat;
  let selectedSauce = document.getElementById("sauce").value;
  document.querySelector(".sauce").innerText = selectedSauce;
  let selectedGreens = document.getElementById("greens").value;
  document.querySelector(".greens").innerText = selectedGreens;
  let selectedExtras = document.getElementById("extras").value;
  document.querySelector(".extras").innerText = selectedExtras;
  let myPizza = new Pizza(selectedSize, selectedCrust, selectedCheese, selectedMeat, selectedSauce, selectedGreens, selectedExtras);
  console.log(myPizza.initialPrice())
  console.log(myPizza.pizzaMeatPrice())
  document.querySelector(".price").innerText = myPizza.pizzaMeatPrice();
}

window.addEventListener("load", function() {
  document.querySelector("form#pizza").addEventListener("submit", handleFormSubmission);
});
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

// UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const selectedSize = document.getElementById("size").value;
  document.querySelector("size").innerText = selectedSize;
  const selectedCrust = document.getElementById("crust").value;
  document.querySelector("crust").innerText = selectedCrust;
  const selectedCheese = document.getElementById("cheese").value;
  document.querySelector("cheese").innerText = selectedCheese;
  const selectedMeat = document.getElementById("meat").value;
  document.querySelector("meat").innerText = selectedSize;
  const selectedSauce = document.getElementById("sauce").value;
  document.querySelector("sauce").innerText = selectedSauce;
  const selectedGreens = document.getElementById("greens").value;
  document.querySelector("greens").innerText = selectedGreens;
  const selectedExtras = document.getElementById("extras").value;
  document.querySelector("extras").innerText = selectedExtras;
}

window.addEventListener("load", function() {
  document.querySelector("form#pizza").addEventListener("submit", handleFormSubmission);
});
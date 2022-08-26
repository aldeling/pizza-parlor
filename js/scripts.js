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
  document.querySelector(".size").innerText = selectedSize;
  const selectedCrust = document.getElementById("crust").value;
  const selectedCheese = document.getElementById("cheese").value;
  const selectedMeat = document.getElementById("meat").value;
  const selectedSauce = document.getElementById("sauce").value;
  const selectedGreens = document.getElementById("greens").value;
  const selectedExtras = document.getElementById("extras").value;
}

window.addEventListener("load", function() {
  document.querySelector("form#pizza").addEventListener("submit", handleFormSubmission);
});
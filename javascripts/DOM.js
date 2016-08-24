var breads_selection = document.getElementById("breads_selection");
var meat_selection = document.getElementById("meat");
var cheese_selection = document.getElementById("cheese");
var veggie_selection = document.getElementById("veggies");
var condiments_selection = document.getElementById("condiments");

var finalSandwichPrice = 0;
var display = document.getElementById("output");

// var button = document.getElementById("btn");
// button.addEventListener("click", function() {
//   display.innerHTML = finalSandwichPrice;
// })


breads_selection.addEventListener("change", function(event) {
  var selectedBread = event.target.value;
  SandwichMaker.addBread(selectedBread);
  console.log(selectedBread);
});

meat_selection.addEventListener("change", function(event) {
  var selectedMeat = event.target.value;
  SandwichMaker.addMeat(selectedMeat);
  console.log(selectedMeat);
})

veggie_selection.addEventListener("change", function(event) {
  var selectedVeggie = event.target.value;
  SandwichMaker.addVeggie(selectedVeggie);
  console.log(selectedVeggie);
})

cheese_selection.addEventListener("change", function(event) {
  var selectedCheese = event.target.value;
  SandwichMaker.addCheese(selectedCheese);
  console.log(selectedCheese);
})

condiments_selection.addEventListener("change", function(event) {
  var selectedCondiment = event.target.value;
  SandwichMaker.addCondiment(selectedCondiment);
  console.log(selectedCondiment);
})









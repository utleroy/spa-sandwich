// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {};

  // Augment the original object with another method
  maker.addMeat = function(added) {
    var options = {
      turkey: 0.90,
      bacon: 0.45
    }
    return SandwichMaker.meatPrices
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);
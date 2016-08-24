var SandwichMaker = (function(condimentMaker) {

  condimentMaker.addCondiment = function(type) {
    var options = {
      ketchup: 0.90,
      mustard: 0.45,
      none: 0
    }
    var userCondimentPricing = options[type];
    console.log("condiment price chosen", userCondimentPricing);
    SandwichMaker.addTopping(userCondimentPricing)
  };
  return condimentMaker;

})(SandwichMaker || {});
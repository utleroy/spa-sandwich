var SandwichMaker = (function(veggieMaker) {

  veggieMaker.addVeggie = function(veggieType) {
    var options = {
      lettuce: 0.80,
      tomato: 0.25,
      none: 0
    }
    var userVeggieprice = options[veggieType];
    console.log("veggie price chosen", userVeggieprice);
    SandwichMaker.addTopping(userVeggieprice)
  };
  return veggieMaker;

})(SandwichMaker || {});
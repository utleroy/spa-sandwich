var SandwichMaker = (function(cheeseMaker) {

  cheeseMaker.addCheese = function(cheeseType) {
    var options = {
      mozzarella: 0.80,
      swiss: 0.25,
      none: 0
    }
    var userCheesePrice = options[cheeseType];
    console.log("cheese price chosen", userCheesePrice);
    SandwichMaker.addTopping(userCheesePrice)
  };
  return cheeseMaker;

})(SandwichMaker || {});
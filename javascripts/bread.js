var SandwichMaker = (function(breadMaker) {

  breadMaker.addBread = function(breadType) {
    var options = {
      white: 0.90,
      wheat: 0.45
    }
    var userBreadPrice = options[breadType];
    console.log("bread price chosen", userBreadPrice);
    SandwichMaker.addTopping(userBreadPrice)
  };
  return breadMaker;

})(SandwichMaker || {});

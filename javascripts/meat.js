var SandwichMaker = (function(meatMaker) {

  meatMaker.addMeat = function(meatType) {
    var options = {
      turkey: 0.90,
      bacon: 0.45,
      none: 0
    }
    var userMeatPrice = options[meatType];
    console.log("meat price chosen", userMeatPrice);
    SandwichMaker.addTopping(userMeatPrice)
  };
  return meatMaker;

})(SandwichMaker || {});
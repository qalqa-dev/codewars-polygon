var numWaterBottles = function (numBottles, numExchange) {
  let count = numBottles;
  let emptyBottles = numBottles;
  while (emptyBottles >= numExchange) {
    const newBottles = Math.floor(emptyBottles / numExchange);
    count += newBottles;
    emptyBottles = newBottles + (emptyBottles % numExchange);
  }
  return count;
};

console.log(numWaterBottles(10, 3));

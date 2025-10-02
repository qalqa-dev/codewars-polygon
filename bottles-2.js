var numWaterBottles = function (numBottles, numExchange) {
  let count = numBottles;
  let emptyBottles = numBottles;
  while (emptyBottles >= numExchange) {
    console.log(emptyBottles, count, numExchange);
    emptyBottles -= numExchange;
    emptyBottles += 1;
    count++;
    numExchange++;
  }
  return count;
};

console.log(numWaterBottles(13, 6));

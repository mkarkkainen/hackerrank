// Input is n = number of priced toys and k = amount of currency available,
// array of integers (the prices of toys);
//
// Idea is to maximise the amount of toys that can be bought
//

const maximumToys = (prices, k) => {
  prices.sort((a, b) => a - b);
  for (let i = 0; i < prices.length; i++) {
    if (k >= 0) {
      k -= prices[i];
      if (k < 0) return i;
    }
  }
};

console.log(maximumToys([1, 2, 3, 4], 7));

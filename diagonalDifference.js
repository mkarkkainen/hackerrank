// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

const diagonalDifference = (arr) => {
  // Write your code here
  const len = arr.length;
  let d1 = 0,
    d2 = 0;

  for (let i = 0; i < len; i++) {
    d1 += arr[i][i];
    d2 += arr[len - 1 - i][i];
  }
  return Math.abs(d1 - d2);
};

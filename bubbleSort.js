// expected input is an array of integers
// expected output is in the following form:
//
// Array is sorted in x swaps.
// First Element: x
// Last Element: x
//

const bubbleSorter = (a) => {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    for (let ii = 0; ii < a.length - 1; ii++) {
      if (a[ii] > a[ii + 1]) {
        [a[ii], a[ii + 1]] = [a[ii + 1], a[ii]];
        count++;
      }
    }
  }
  // The actual hackerrank challenge expects output into STDOUT and not returned
  console.log(
    `Array is sorted in ${count} swaps.\nFirst Element: ${
      a[0]
    }\nLast element: ${a[a.length - 1]}`
  );
};

console.log(bubbleSorter([5, 4, 3, 2, 1]));

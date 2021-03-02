let input = [3, 2, 2, 1, 4];

const cake = (arr) => {
  let one = 0,
    two = 0,
    three = 0,
    four = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] === 4
      ? four++
      : arr[i] === 3
      ? three++
      : arr[i] === 2
      ? two++
      : one++;
  }

  return;
};

console.log(cake(input));

//// This one works. The idea is to return the amount of the highest value
// entry in the array. The values range from 1 to 4.

const birthdayCake = (arr) => {
  // Lets get the highest value entry in the input array.
  const maxInt = Math.max(...arr);
  // Filter the input array by selecting entires that are equal to the max
  // entry that we determined. Return.
  return arr.filter((x) => x === maxInt);
};

console.log(birthdayCake(input));

//Write a short program that prints each number from 1 to 100 on a new line.

//For each multiple of 3, print "Fizz" instead of the number.

//For each multiple of 5, print "Buzz" instead of the number.

//For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

const fizzBuzz = (n) => {
  let x = [];
  for (let i = 1; i <= n; i++) {
    x.push(i);
  }

  return x.map((x) =>
    x % 5 === 0 && x % 3 === 0
      ? (x = "FizzBuzz")
      : x % 5 === 0
      ? (x = "Buzz")
      : x % 3 === 0
      ? (x = "Fizz")
      : x
  );
};

console.log(fizzBuzz(30));

// Given a number return Fizz for multiples of 3 Buzz for multiples of 5 FizzBuzz for multiples of both or the number if none applies.

const fizzBuzz = (n) => {
  let result = [];

  for (let i = 1; i <= n; i++) {
    let string = "";
    if (i % 3 === 0) string += "Fizz";
    if (i % 5 === 0) string += "Buzz";
    if (string === "") string += i;
    result.push(string);
  }
  return result;
};

console.log(fizzBuzz(15));
console.log(fizzBuzz(30));

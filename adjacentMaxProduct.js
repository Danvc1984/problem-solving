// Given an array of numbers determine and return the max product from adjacent numbers.

function adjacentElementsProduct(inputArray) {
  let maxAdjacent = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length - 1; i++) {
    if (getAdjacent(inputArray, i) > maxAdjacent) {
      maxAdjacent = getAdjacent(inputArray, i);
    }
  }

  return maxAdjacent;
}

function getAdjacent(inputArray, index) {
  return inputArray[index] * inputArray[index + 1];
}

console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]));

// Given a numeric array sort it consecutively and return missing numbers in between smallest and largest numbers.

function solution(statues) {
  statues.sort(compareNumbers);
  let missingSizes = [];
  for (let i = statues[0]; i <= statues[statues.length - 1]; i++) {
    if (!statues.includes(i)) {
      missingSizes.push(i);
    }
  }
  return missingSizes.length;
}

function compareNumbers(a, b) {
  return a - b;
}

function simplifiedSolution(statues) {
  let missingSizes = [];
  for (let i = Math.min(...statues); i <= Math.max(...statues); i++) {
    if (!statues.includes(i)) {
      missingSizes.push(i);
    }
  }
  return missingSizes.length;
}

console.log(solution([2, 3, 6, 8]));
console.log(simplifiedSolution([2, 3, 6, 8]));

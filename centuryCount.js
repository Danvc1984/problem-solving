// Given a year return which century it's part of.

function solution(year) {
  let centuryCount = 0;
  while (year > 0) {
    year -= 100;
    centuryCount += 1;
  }
  return centuryCount;
}

console.log(solution(2314));
